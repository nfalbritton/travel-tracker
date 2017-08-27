import React, { Component } from 'react';
import Place from '../constants/Place';

class WishList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: null
    }

    this.handlePlaceClick = this.handlePlaceClick.bind(this)
  }

  handlePlaceClick( id ){
    this.setState( { selectedId: id } )
  }

  render() {
    let className;
    let list = this.props.data.places.map(place => {

      if (place.id === this.state.selectedId){
        className = "selected"
      } else {
        className = " "
      }

      let onPlaceClick = ( ) => this.handlePlaceClick(place.id)

      return(
        <Place
          key={place.id}
          id={place.id}
          name={place.name}
          handleClick={onPlaceClick}
          className={className}
        />
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default WishList;
