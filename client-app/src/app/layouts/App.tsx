import React, { Fragment } from 'react';
import { Button, Container } from 'semantic-ui-react';
import NavBar from '../layouts/NavBar';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/homePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/forms/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {

  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>

              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
            </Container>
          </>
        )}
      />

    </>
  );
}

export default observer(App);
