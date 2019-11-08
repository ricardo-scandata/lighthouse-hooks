/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Admin from '../Admin/Admin';
import ReportApi from '../Reports/Reports';

function MainContainer({ location }) {
  const randomGen = () => Math.floor((Math.random() * 100));

  console.log(location);
  return (
    <section className="route-section">
      <Switch location={location}>
        <Route path="/Admin" exact component={Admin} />
        <Route path="/Reports" render={(props) => <ReportApi {...props} key={randomGen()} />} />
      </Switch>
    </section>
  );
}

export default withRouter(MainContainer);
