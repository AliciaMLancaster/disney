import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderParkItem({ park }) {
  return (
    <Card>
      <Link to={`/park/${park.id}`}>
        <CardImg width="100%" src={park.image} alt={park.name} />
        <CardImgOverlay>
          <CardTitle>{park.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
function Park(props) {
  const park = props.parks.map((park) => {
    return (
      <div key={park.id} className="col-md-5 m-1">
        <RenderParkItem park={park} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Parks</h2>
          <hr />
        </div>
      </div>
      <div className="row">{park}</div>
    </div>
  );
}

export default Park;
