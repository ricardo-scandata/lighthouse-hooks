/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ReportApi from './Reports';
// import MainListItems from './MainMenu';

// eslint-disable-next-line react/prop-types
const randomGen = () => Math.floor((Math.random() * 100) + 1);

function ReportContainer({ location }) {
  return (
    <section className="route-section">
      <Switch location={location}>
        <Route path="/Reports" render={(props) => <ReportApi {...props} key={randomGen()} />} />
      </Switch>
    </section>
  );
}

export default withRouter(ReportContainer);
