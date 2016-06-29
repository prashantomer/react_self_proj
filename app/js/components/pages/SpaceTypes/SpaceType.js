import React from 'react';

class SpaceType extends React.Component {

  render() {
  	var spaceType = this.props.spaceType;
    return (
      <tr key={spaceType.id} className='SpaceType'>
      	<td>{spaceType.name}</td>
      	<td>
      		<button className='btn btn-primary'>Edit</button>
      		<button className='btn btn-warning'>Delete</button>
      	</td>
      </tr>
    )
  }
}

export default SpaceType;
