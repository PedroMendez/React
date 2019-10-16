import { caregivers } from './reducer';

function ascendingSort(caregiver1, caregiver2) {
  const name1 = caregiver1.name ? caregiver1.name.toUpperCase() : '~';
  const name2 = caregiver2.name ? caregiver2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const caregiverActions = {
  ADD_CAREGIVER: 'ADD_CAREGIVER',
  EDIT_CAREGIVER: 'EDIT_CAREGIVER',
  DELETE_CAREGIVER: 'DELETE_CAREGIVER',
  CHANGE_CAREGIVER: 'CHANGE_CAREGIVER',
  EDIT_VIEW: 'EDIT_VIEW',
  changeCaregiver: (id) => ({
    type: caregiverActions.CHANGE_CAREGIVER,
    id,
  }),
  addCaregiver: () => {
    const newCaregiver = {
      id: new Date(),
      firstName: '',
      avatar: caregivers[new Date() % 10].avatar,
      LastName: '',
      mobile: '',
      home: '',
      name: '',
      company: '',
      work: '',
      note: '',
    };
    return (dispatch, getState) => {
      dispatch({
        type: caregiverActions.ADD_CAREGIVER,
        caregivers: [...getState().Caregivers.get('caregivers'), newCaregiver],
        selectedId: newCaregiver.id,
      });
    };
  },
  editCaregiver: (newCaregiver) => {
    return (dispatch, getState) => {
      const caregivers = getState().Caregivers.get('caregivers');
      const newCaregivers = [];
      caregivers.forEach(caregiver => {
        if (caregiver.id === newCaregiver.id) {
          newCaregivers.push(newCaregiver);
        } else {
          newCaregivers.push(caregiver);
        }
      });
      dispatch({
        type: caregiverActions.EDIT_CAREGIVER,
        caregivers: newCaregivers.sort(ascendingSort),
      });
    }
  },
  deleteCaregiver: (id) => {
    return (dispatch, getState) => {
      const caregivers = getState().Caregivers.get('caregivers');
      const seectedId = getState().Caregivers.get('seectedId');
      const newCaregivers = [];
      caregivers.forEach(caregiver => {
        if (caregiver.id === id) {
        } else {
          newCaregivers.push(caregiver);
        }
      });
      dispatch({
        type: caregiverActions.DELETE_CAREGIVER,
        caregivers: newCaregivers,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: caregiverActions.EDIT_VIEW,
    view,
  }),
};
export default caregiverActions;