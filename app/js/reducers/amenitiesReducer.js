

function amenities(state=[], action) { 
	switch (action.type) {
		case "editAmenity" :
		debugger
			console.log(state={spacetype: action.type});
	return state;

		case "deleteAmenity":
			console.log(state={spacetype: action.type});
	return state;
	}
	return state 
}

export default amenities;