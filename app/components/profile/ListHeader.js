import React from 'react';
import {View} from 'react-native';

import UserCard from '../user/UserCard';
import ListFilterDropdown from '../ListFilterDropdown';

const ListHeader = props => {
  return (
    <View>
      <UserCard
        longPress={props.isBefriended && !props.isThemselves}
        cancelPress={props.isThemselves}
        reload={props.reload}
        size="large"
        user={props.user}
      />
      <ListFilterDropdown
        // style={styles.dropdown}
        onTypeSelected={props.onTypeSelected}
      />
    </View>
  );
};

export default ListHeader;
