import React from 'react';
import {Modal, StyleSheet} from 'react-native';

const SettingsEditMode = props => {
  return (
    <Modal {...props} animationType="slide">
      {props.children}
    </Modal>
  );
};

const s = StyleSheet.create({});

export default SettingsEditMode;
