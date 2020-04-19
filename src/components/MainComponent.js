import React, { Component } from 'react';
import Park from './ParkComponent';
import ParkInfo from './ParkInfoComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    parks: state.parks,
    reviews: state.reviews,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home park={this.props.parks.filter((park) => park.featured)[0]} />
      );
    };

    const ParkWithId = ({ match }) => {
      return (
        <ParkInfo
          park={
            this.props.parks.filter(
              (park) => park.id === +match.params.parkId
            )[0]
          }
          reviews={this.props.reviews.filter(
            (review) => review.reviewId === +match.params.reviewId
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/park"
            render={() => <Park parks={this.props.parks} />}
          />
          <Route path="/park/:parkId" component={ParkWithId} />

          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
