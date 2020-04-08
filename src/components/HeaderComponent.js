import React from 'react';
import { Jumbotron } from 'reactstrap';
//import { NavLink } from 'react-router-dom';
//import { findAllByTestId } from '@testing-library/react';//

function Header() {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Disney World</h1>
              <h2>The Happiest Place on Earth</h2>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;
