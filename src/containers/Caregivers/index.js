import React, { Component } from "react";
import { connect } from "react-redux";
import caregiverAction from "../../redux/caregivers/actions";
import { Layout, Icon } from "antd";
import Button from "../../components/uielements/button";
import CaregiverList from "../../components/caregivers/caregiverList";
import SingleCaregiverView from "../../components/caregivers/singleView";
import EditCaregiverView from "../../components/caregivers/editView";
import DeleteButton from "../../components/caregivers/deleteButton";
import { otherAttributes } from "./caregiversData";
import IntlMessages from '../../components/utility/intlMessages';

const {
  changeCaregiver,
  addCaregiver,
  editCaregiver,
  deleteCaregiver,
  viewChange
} = caregiverAction;

const { Sider, Content } = Layout;
class Caregivers extends Component {
  render() {
    const {
      caregivers,
      seectedId,
      editView,
      changeCaregiver,
      addCaregiver,
      editCaregiver,
      deleteCaregiver,
      viewChange
    } = this.props;
    const selectedCaregiver = seectedId
      ? caregivers.filter(caregiver => caregiver.id === seectedId)[0]
      : null;
    const onVIewChange = () => viewChange(!editView);
    return (
      <Layout className="isomorphicContacts" style={{ background: "none" }}>
        <Sider width="400" className="isoContactListBar">
          <CaregiverList
            caregivers={caregivers}
            seectedId={seectedId}
            changeCaregiver={changeCaregiver}
            deleteCaregiver={deleteCaregiver}
          />
        </Sider>
        <Layout className="isoContactBoxWrapper">
          {selectedCaregiver
            ? <Content className="isoContactBox">
                <div className="isoContactControl">
                  <Button type="button" onClick={onVIewChange}>
                    {editView
                      ? <Icon type="check" />
                      : <Icon type="edit" />}{" "}
                  </Button>
                  <DeleteButton
                    deleteCaregiver={deleteCaregiver}
                    caregiver={selectedCaregiver}
                  />
                  <Button
                    type="primary"
                    onClick={addCaregiver}
                    className="isoAddContactBtn"
                  >
                    <IntlMessages id="caregiverlist.addNewCaregiver" />
                  </Button>
                </div>
                {editView
                  ? <EditCaregiverView
                      caregiver={selectedCaregiver}
                      editCaregiver={editCaregiver}
                      otherAttributes={otherAttributes}
                    />
                  : <SingleCaregiverView
                      caregiver={selectedCaregiver}
                      otherAttributes={otherAttributes}
                    />}
              </Content>
            : <div className="isoContactControl">
                <Button
                  type="primary"
                  onClick={addCaregiver}
                  className="isoAddContactBtn"
                >
                  <IntlMessages id="caregiverlist.addException" />
                </Button>
              </div>}
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  const { caregivers, seectedId, editView } = state.Caregivers.toJS();
  return {
    caregivers,
    seectedId,
    editView
  };
}
export default connect(mapStateToProps, {
  changeCaregiver,
  addCaregiver,
  editCaregiver,
  deleteCaregiver,
  viewChange
})(Caregivers);
