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
}

export default function ActivityDashboard({
    activities, selectActivity, selectedActivity, cancelselectActivity
}: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelselectActivity={cancelselectActivity}
                    />}
                <ActivityForm />
            </GridColumn>
        </Grid>
    )
}