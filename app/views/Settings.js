import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import SettingsSection from '../components/SettingsSection';
import Avatar from '../components/user/Avatar';
import Username from '../components/user/Username';
import CheckboxField from '../components/CheckboxField';
import ViewWrapper from './ViewWrapper';

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
                <Avatar />
            </SettingsSection>
            <SettingsSection
                title='Username'
                btnText='change'>
                <Username
                    username='innapyrina'
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