import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
  return <div className="ui cards">{this.props.pets.map(item=><Pet key={item.id} pet={item} onAdoptPet={this.props.onAdoptPet}/>)}</div>
  }
}

export default PetBrowser
