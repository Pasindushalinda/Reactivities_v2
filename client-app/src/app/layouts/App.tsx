import { Fragment, useEffect, useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Activity } from '../Model/activity';
import NavBar from '../layouts/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from '../layouts/LoadingComponent';
import { useStore } from '../store/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadingActivities();
  }, [activityStore])

  // function handleSelectActivity(id: string) {
  //   setSelectedActivity(activities.find(x => x.id === id));
  // }

  // function handleCancelSelectActivity() {
  //   setSelectedActivity(undefined);
  // }

  // function handleFormOpen(id?: string) {
  //   id ? handleSelectActivity(id) : handleCancelSelectActivity();
  //   setEditMode(true);
  // }

  // function handleFormClose() {
  //   setEditMode(false);
  // }

  function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })

    }
  }

  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);
    })
  }

  if (activityStore.loadingInitials) return <LoadingComponent />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activityStore.activities}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>

    </Fragment>
  );
}

export default observer(App);
