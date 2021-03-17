import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layouts/LoadingComponent';
import { useStore } from '../../../app/store/store';
import ActivityList from '../dashboard/ActivityList';

export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { loadingInitials, loadingActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadingActivities();
    }, [activityRegistry.size, loadingActivities])

    if (loadingInitials) return <LoadingComponent />

    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList />
            </GridColumn>
            <GridColumn width='6'>
                <h2>Activity filters</h2>
            </GridColumn>
        </Grid>
    )
})