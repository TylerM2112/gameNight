import React, { Fragment }from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage.js';

export default <Fragment>
    <Route exact path="/" component={LandingPage} />
   </Fragment>