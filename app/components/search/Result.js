import React from 'react';

import TagItem from '../TagItem';
import UserRow from '../user/UserRow';
import FilmCard from '../../components/FilmCard';

const Result = props => {
  switch (props.type) {
    case 'users':
      return <UserRow user={props.result} size="large" />;
    case 'tags':
      return (
        <TagItem
          tagName={props.result}
          style={{marginRight: 5, marginVertical: 5}}
        />
      );
    default:
      return <FilmCard film={props.result} />;
  }
};

export default Result;
