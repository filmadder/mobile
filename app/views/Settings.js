import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import SettingsSection from '../components/SettingsSection';
import Avatar from '../components/user/Avatar';
import Username from '../components/user/Username';
import CheckboxField from '../components/CheckboxField';

const Settings = props => {

    const onCheckboxChange = currentState => {
        console.log('the current state is')
        console.log(currentState)
    }

    return (
        <View style={{paddingTop: 50 }}>
            <ScrollView>
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
                    title='Privacy'>
                        <CheckboxField
                            text='hide me from the search resultshide me from the search results'
                            onCheckboxChange={onCheckboxChange}></CheckboxField>
                        <CheckboxField
                            text='show my avatar to befriended users only'
                            onCheckboxChange={onCheckboxChange}></CheckboxField>
                </SettingsSection>
            </ScrollView>
        </View>
    )
};

const s = StyleSheet.create({

});

export default Settings;