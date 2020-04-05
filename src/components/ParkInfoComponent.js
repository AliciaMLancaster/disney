import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { PARKS } from '../shared/parks';

class ParkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: PARKS,
    };
  }
  render() {
    //const parksInfo = this.state.parks.map((item => <Parks key={item.id} item={item} />)

    return (
      <div>
        <CardTitle>Hi</CardTitle>
        <CardBody>
          <CardImg>{this.state.parks.parkImage}</CardImg>
        </CardBody>
      </div>
    );
  }
}

export default ParkInfo;
