import React from 'react';
import SpaceType from './SpaceType';

class SpaceTypes extends React.Component {

  render() {
  	var spaceTypes = this.props.spaceTypes.map((spaceType) => {
		 	return ( 
		 		<SpaceType spaceType={spaceType} />
		 	); 
		});

    return (
      <div className='SpaceTypes'>
      	<table className='table'>
	      	<tbody>
	      		<tr>
	      			<th>Name</th>
	      			<th colSpan='2'>Actions</th>
	      		</tr>
	       		{spaceTypes}
	       	</tbody>
       	</table>
      </div>
    )
  }
}

export default SpaceTypes;
