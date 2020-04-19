import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
//import { PARKS } from '../shared/parks';

function RenderPark({ park }) {
  console.log(park.image);
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg className="images" top src={park.image} alt={park.name} />
        <CardBody>
          <CardTitle>{park.name}</CardTitle>
          <CardText>{park.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderReviews({ reviews }) {
  if (reviews) {
    return (
      <div className="col-md-5 m-1">
        <h4> Reviews </h4>
        {reviews.map((review) => {
          return (
            <div key={review.id}>
              <p>
                {review.text}
                <br />
                --{review.author},{' '}
              </p>{' '}
            </div>
          );
        })}
      </div>
    );
  }
  return <div />;
}

function ParkInfo(props) {
  if (props.park) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>{props.park.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderPark park={props.park} />
          <RenderReviews reviews={props.reviews} />
        </div>
      </div>
    );
  }

  return <div />;
}

export default ParkInfo;
