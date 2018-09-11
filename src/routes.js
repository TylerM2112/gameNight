import React, { Fragment }from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage.js';
import TerraformingMars from './components/games/TerraformingMars/TerraformingMars'

export default <Fragment>
    <Route exact path="/" component={LandingPage} />
    <Route path="/terraformingMars" component={TerraformingMars} />
   </Fragment>