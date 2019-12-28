import React from 'react';
import { Text, StyleSheet } from 'react-native';

import SettingsSection from '../components/SettingsSection';
import Avatar from '../components/user/Avatar';
import Username from '../components/user/Username';
import CheckboxField from '../components/CheckboxField';
import ViewWrapper from './ViewWrapper';
import { users } from '../../data';

const Settings = props => {

    const onCheckboxChange = currentState => {
        console.log('the current state is')
        console.log(currentState)
    }

    return (
        <ViewWrapper
            title='Settings'>
            <SettingsSection
                title='Avatar'
                btnText='upload new'>
                <Avatar
                    user={users['1']}/>
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