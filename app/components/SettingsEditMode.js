import React from 'react';
import {View, Modal, Text, StyleSheet} from 'react-native';

const SettingsEditMode = props => {
  return (
    <Modal {...props} animationType="slide">
      {props.children}
    </Modal>
  );
};

const s = StyleSheet.create({});

export default SettingsEditMode;
