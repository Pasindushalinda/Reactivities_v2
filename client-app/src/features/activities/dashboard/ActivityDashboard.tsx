import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Activity } from '../../../app/Model/activity';
import ActivityList from '../dashboard/ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../forms/ActivityForm';

interface Props {
    activities: Activity[],
    selectedActivity: Activity | undefined,
    selectActivity: (id: string) => void,
    cancelselectActivity: () => void
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityDashboard({
    activities,
    selectActivity,
    selectedActivity,
    cancelselectActivity,
    editMode,
    openForm,
    closeForm,
    createOrEdit
}: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                />
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelselectActivity={cancelselectActivity}
                        openForm={openForm}
                    />}
                {editMode &&
                    <ActivityForm
                        activity={selectedActivity}
                        closeForm={closeForm}
                        createOrEdit={createOrEdit}
                    />}
            </GridColumn>
        </Grid>
    )
}