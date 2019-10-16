import { Map } from "immutable";
import caregiversData from "../../containers/Caregivers/caregiversData";
import caregiverActions from "./actions";

const caregivers = new caregiversData(10).getAll();

const initState = new Map({
  caregivers,
  seectedId: caregivers[0].id,
  editView: false
});

export default function caregiverReducer(state = initState, action) {
  switch (action.type) {
    case caregiverActions.CHANGE_CAREGIVER:
      return state.set("seectedId", action.id).set("editView", false);
    case caregiverActions.ADD_CAREGIVER:
      return state
        .set("caregivers", action.caregivers)
        .set("seectedId", action.selectedId)
        .set("editView", true);
    case caregiverActions.EDIT_CAREGIVER:
      return state.set("caregivers", action.caregivers);
    case caregiverActions.DELETE_CAREGIVER:
      return state
        .set("caregivers", action.caregivers)
        .set("seectedId", action.seectedId);
    case caregiverActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}

export { caregivers };
