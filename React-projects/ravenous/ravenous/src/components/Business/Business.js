import React from 'react';
import './Business.css';

class Business extends React.Component {
    render () {
        return (
            <div className="Business">
  <div className="image-container">
    <img src={this.props.business.imageSrc} alt='' />
  </div>
  {this.props.business.name}
  <div className="Business-information">
    <div className="Business-address">
    {this.props.business.address}
    {this.props.business.city}
    {this.props.business.zipCode}
    </div>
    <div className="Business-reviews">
    {this.props.business.category}
      <h3 className="rating">{this.props.business.rating}</h3>
      {this.props.business.reviewCount}
    </div>
  </div>
</div>
        )
    }
}

export default Business;