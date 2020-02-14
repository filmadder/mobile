import React from 'react';

import FilmCard from '../FilmCard';
import UserRow from '../user/UserRow';
import TagItem from '../TagItem';

const ProfileCard = props => {

    switch (props.type) {
        case 'friends':
            return <UserRow user={props.item} size='large' />
        case 'tags':
            return <TagItem
                tagName={props.item}
                style={{marginRight: 5, marginVertical: 5}}
            />
        default:
            return <FilmCard film={props.item} />
    }
};

export default ProfileCard;
