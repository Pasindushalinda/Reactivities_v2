import { Activity } from './../Model/activity';
import { makeAutoObservable } from 'mobx';
import agent from '../api/agent';

export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitials = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadingActivities = async () => {
    this.loadingInitials = true;
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split('T')[0];
        this.activities.push(activity);
      });
      this.setLoadingInitials(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitials(false);
    }
  };

  setLoadingInitials = (state: boolean) => {
    this.loadingInitials = state;
  };

  selectActivity = (id: string) => {
    this.selectedActivity = this.activities.find((x) => x.id === id);
  };

  cancelSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectActivity(id) : this.cancelSelectedActivity();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };
}
