import { observer } from 'mobx-react-lite';
import { group } from 'node:console';
import { Fragment } from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/store/store';
import ActivityListItem from './ActivityListItem';


export default observer(function () {

    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}
                </Fragment>
            ))}
        </>

    )
})