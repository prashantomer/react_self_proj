module.exports = {
  success(message) {
    $('.flash-message').html(
      '<div class="alert alert-success fade in"><a class="close" data-dismiss="alert" aria-label="close" title="close">×</a><strong>Success! </strong>'+message+'</div>'
    )
  },

  info(message) {
    $('.flash-message').html(
      '<div class="alert alert-info fade in"><a class="close" data-dismiss="alert" aria-label="close" title="close">×</a><strong>Info! </strong>'+message+'</div>'
    )
  },

  warning(message) {
    $('.flash-message').html(
      '<div class="alert alert-warning fade in"><a class="close" data-dismiss="alert" aria-label="close" title="close">×</a><strong>Warning! </strong>'+message+'</div>'
    )
  },

  error(message) {
    $('.flash-message').html(
      '<div class="alert alert alert-danger fade in"><a class="close" data-dismiss="alert" aria-label="close" title="close">×</a><strong>Danger! </strong>'+message+'</div>'
    )
  }
}