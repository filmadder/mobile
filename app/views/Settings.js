import React from 'react';
import { Text, View } from 'react-native';

import SettingsSection from '../components/SettingsSection';
import AvatarLink from '../components/user/AvatarLink';
import Username from '../components/user/Username';
import CheckboxField from '../components/CheckboxField';
import ViewWrapper from './ViewWrapper';
import LogoutBtn from '../views/auth/LogoutBtn';
import Loader from '../components/Loader';

import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';

import { users } from '../../data';

const Settings = () => {
    const [avatar, setAvatar] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        // TODO (separate in a module)
        AsyncStorage.getItem('user')
            .then(user => {
                let parsedUser = JSON.parse(user);
                setUser(parsedUser);
            })
            .catch(err => (console.warn(err)))

    }, [])

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

    // const newAvatar = {...users['1'], avatar}

    /*
        RENDER
    */
    // return the view
    if (user) {
        return (
            <ViewWrapper
                title='Settings'>
                <SettingsSection
                    title='Avatar'>
                    <AvatarLink
                        user={user}
                        onPress={handleChoosePhoto} />
                </SettingsSection>
                <SettingsSection
                    title='Username'
                    btnText='change'>
                    <Username
                        name={user.name}
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
                <SettingsSection>
                    <LogoutBtn />
                </SettingsSection>
            </ViewWrapper>
        )
    }

    //return the loader
    return <Loader />

};

export default withNavigation(Settings);