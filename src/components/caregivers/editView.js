import React, { Component } from 'react';
import { Icon } from 'antd';
import Input from '../uielements/input';
import Upload from '../uielements/upload';
import notification from '../notification';
import './upload.css';

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    notification('error', 'You can only upload JPG file!', '');
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    notification('error', 'Image must smaller than 2MB!', '');
    return false;
  }
  notification('success', 'Image uploaded successfully!', '');
  return true;
}
export default class editCaregiverView extends Component {
  render() {
    const { caregiver, otherAttributes } = this.props;
    const name = caregiver.name ? caregiver.name : 'No Name';
    const extraInfos = [];
    const names = [
      { value: 'firstName', title: 'First Name' },
      { value: 'lastName', title: 'Last Name' },
    ];
    [...names, ...otherAttributes].forEach(attribute => {
      const value = caregiver[attribute.value];
      const editCaregiver = event => {
        caregiver[attribute.value] = event.target.value;
        let name = '';
        if (caregiver.firstName) {
          name = `${caregiver.firstName} `;
        }
        if (caregiver.lastName) {
          name = `${name}${caregiver.lastName}`;
        }
        caregiver.name = name;
        this.props.editCaregiver(caregiver);
      };
      if (attribute.value === 'note') {
        extraInfos.push(
          <div className="isoContactCardInfos" key={attribute.value}>
            <p className="isoInfoLabel">{`${attribute.title}`}</p>
            <Input
              placeholder={`${attribute.title}`}
              value={value}
              type="textarea"
              rows={5}
              onChange={event => editCaregiver(event)}
            />
          </div>,
        );
      } else {
        extraInfos.push(
          <div className="isoContactCardInfos" key={attribute.value}>
            <p className="isoInfoLabel">{`${attribute.title}`}</p>
            <Input
              placeholder={`${attribute.title}`}
              value={value}
              onChange={event => editCaregiver(event)}
            />
          </div>,
        );
      }
    });
    return (
      <div className="isoContactCard">
        <div className="isoContactCardHead">
          <div className="isoPersonImage">
            <Upload
              className="avatar-uploader"
              name="avatar"
              showUploadList={false}
              beforeUpload={beforeUpload}
              action=""
            >
              {name !== 'No Name'
                ? <img src={caregiver.avatar} alt="" className="avatar" />
                : <Icon type="plus" className="avatar-uploader-trigger" />}
            </Upload>
          </div>
          <h1 className="isoPersonName">{name}</h1>
        </div>
        <div className="isoContactInfoWrapper">
          {extraInfos}
        </div>
      </div>
    );
  }
}
