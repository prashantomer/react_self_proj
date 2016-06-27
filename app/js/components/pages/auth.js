import flash from './flash'

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendLoginRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
        flash.success('Sign in successfully...!')
      } else {
        if (cb) cb(false)
        this.onChange(false)
        flash.warning('Invalid email or password...!')
      }
    })
  },

  signup(name, email, pass, confirm_pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendSignupRequest(name, email, pass, confirm_pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
        flash.success('Sign Up successfully...!')
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  facebookAuth(token, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendFacebookRequest(token, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
        flash.success('Sign in successfully...!')
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendLoginRequest(email, pass, cb) {
  setTimeout(() => {
    $.ajax({
      url: `${host()}/login`,
      type: 'POST',
      data: { credentials: { email: email, password: pass } },
      success: (response) => { 
        cb({
          authenticated: true,
          token: response.token
        })
      },
      complete: (response) => { 
        if (response.status != 200) {
          cb({ authenticated: false })
        }
      } 
    });
  }, 0)
}

function pretendSignupRequest(name, email, pass, confirm_pass, cb) {
  setTimeout(() => {
    $.ajax({
      url: `${host()}/registrations`,
      type: 'POST',
      data: { user: { name: name, email: email, password: pass, password_confirmation: confirm_pass } },
      success: (response) => { 
        cb({
          authenticated: true,
          token: response.token
        })
      },
      complete: (response) => { 
        if (response.status != 200) {
          cb({ authenticated: false })
          flash.errors_with_object(response.responseJSON)
        }
      } 
    });
  }, 0)
}

function pretendFacebookRequest(token, cb) {
  setTimeout(() => {
    $.ajax({
      url: `${host()}/authentications/facebook`,
      type: 'POST',
      data: { token: token },
      success: (response) => { 
        cb({
          authenticated: true,
          token: response.token
        })
      },
      complete: (response) => { 
        if (response.status != 200) {
          cb({ authenticated: false })
          flash.warning(response.responseJSON.error.message)
        }
      } 
    });
  }, 0)
}

function host() {
  if (process.env.NODE_ENV != 'production') {
    return 'https://compartir-espacios-api.herokuapp.com'
  } else {
    return 'https://compartir-espacios-api.herokuapp.com'
  }
}
// https://compartir-espacios-api.herokuapp.com