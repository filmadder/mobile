import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

import SettingsSection from '../components/SettingsSection';
import Avatar from '../components/user/Avatar';
import Username from '../components/user/Username';
import CheckboxField from '../components/CheckboxField';
import ViewWrapper from './ViewWrapper';

import ImagePicker from 'react-native-image-picker';

import { users } from '../../data';

const Settings = props => {
    const [avatar, setAvatar] = React.useState();

    const onCheckboxChange = currentState => {
        console.log('the current state is')
        console.log(currentState)
    }

    const handleChoosePhoto = () =>{

        ImagePicker.launchImageLibrary({noData: true}, response => {
            if (response.uri) {
                setAvatar(response.uri)
            }
        });
    }

    const newAvatar = {...users['1'], avatar}

    return (
        <ViewWrapper
            title='Settings'>
            <SettingsSection
                title='Avatar'>
                <Avatar
                    onPress={handleChoosePhoto}
                    user={avatar ? newAvatar : users['1']} />
            </SettingsSection>
            <SettingsSection
                title='Username'
                btnText='change'>
                <Username
                    user={users['1']}
                    size='large' />
            </SettingsSection>
            <SettingsSection
                title='Password'
                btnText='change'>
                <Text>🔑🔑🔑🔑🔑🔑</Text>
            </SettingsSection>
            <SettingsSection
                style={{ alignItems: 'flex-start' }}
                title='Privacy'>
                    <CheckboxField
                        text='hide om from the search results'
                        onCheckboxChange={onCheckboxChange}></CheckboxField>
                    <CheckboxField
                        text='show my avatar to befriended users only  befriended users only'
                        onCheckboxChange={onCheckboxChange}></CheckboxField>
            </SettingsSection>
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
});

export default Settings;