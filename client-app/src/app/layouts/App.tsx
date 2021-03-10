import { Fragment, useEffect } from 'react';
import { Button, Container } from 'semantic-ui-react';
import NavBar from '../layouts/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from '../layouts/LoadingComponent';
import { useStore } from '../store/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadingActivities();
  }, [activityStore])

  if (activityStore.loadingInitials) return <LoadingComponent />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>

    </Fragment>
  );
}

export default observer(App);
