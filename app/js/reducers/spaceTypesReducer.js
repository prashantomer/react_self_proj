//reducers been called from index reducers


function spaceTypes(state=[], action) {
	switch(action.type) {
		case "deleteSpace_Type" :
			console.log(state={spacetype: action.type});
	return state;
			// $.ajax({
		 //      url: `${auth.host()}/space_types/${action.index}`,
		 //      type: 'DELETE',
		 //        headers: { 'Authorization': `Token ${action.token}`
		 //      },
		 //      success:(response) => {
		 //        if (response == 'ok') {
		 //          this.props.handleDelete(id);
		 //        } else {
		 //          flash.warning(response);
		 //        }
		 //        console.log(response);
		 //      },
		 //      error:(response) => {
		 //        flash.error(response.responseText);
		 //      }

		 //    });
		
		case "editSpace_Type":
			console.log(state={spacetype: action.type});
	return state;
	}
	return state;
}

export default spaceTypes;