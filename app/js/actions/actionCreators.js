import auth from "../components/pages/auth";
import flash from '../components/pages//flash';

// action will be written here and bind with app through Root.js

// Delete item
export function deleteItem(index, token, type) {
	debugger
	deleteItemAjax(index, token, type);
	return {
		type,
		index,
		token
	}
}

// Edit item
export function editItem(index, name, token, type) {
	debugger
	editItemAjax(index, name, token, type);
	return {
		type,
		index,
		name,
		token
	}
}

function deleteItemAjax(index, token, type) {
	var type = type.replace("delete","").toLowerCase();
	var types;
	if (type[type.length - 1] == 'y') var types = type.replace(type[type.length-1], 'ie');
	types = types+'s';
	$.ajax({
		url: `${auth.host()}/${types}/${index}`,
		method: 'delete',
		headers: { 
			'Authorization': `Token ${token}`
    },
    success:(response) => {
    	debugger
      if (response == 'ok') {
        this.props.handleDelete(id);
      } else {
        flash.warning(response);
      }
      console.log(response);
    },
    error:(response) => {
      flash.error(response.responseText);
    }
	})
}

function editItemAjax(index, name, token, type) {
	var type = type.replace("edit","").toLowerCase();
	if (type[type.length - 1] == 'y') var types = type.replace(type[type.length-1], 'ie');
	types = types+'s';
	debugger
	$.ajax({
		url: `${auth.host()}/${types}/${index}`,
		method: "PUT",
		data: { [type]: {id: index, name: name} },
    headers: { 'Authorization': `Token ${token}` },
    context: this,
    async: false,
    success:(response) => {
    	debugger
      this.props.amenity.name = name
    },
    error:(response) => {
    	debugger
      flash.error(response.responseText);
    }
	})
}