import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Activity } from '../../../app/Model/activity';
import { useStore } from '../../../app/store/store';
import ActivityList from '../dashboard/ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../forms/ActivityForm';

interface Props {
    activities: Activity[],
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default observer(function ActivityDashboard({
    activities,
    createOrEdit,
    deleteActivity,
    submitting
}: Props) {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList
                    activities={activities}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails />}
                {editMode &&
                    <ActivityForm
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />}
            </GridColumn>
        </Grid>
    )
})