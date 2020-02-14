import React from 'react';
import { Text } from 'react-native';

import SettingsSection from '../components/SettingsSection';
import AvatarLink from '../components/user/AvatarLink';
import Username from '../components/user/Username';
import CheckboxField from '../components/CheckboxField';
import ViewWrapper from './ViewWrapper';
import LogoutBtn from '../views/auth/LogoutBtn';
import Loader from '../components/Loader';

import ImagePicker from 'react-native-image-picker';
import { withNavigation } from 'react-navigation';
import { getLoggedUser } from '../auth';

const Settings = () => {
    const [avatar, setAvatar] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        getLoggedUser()
            .then(user => {
                setUser(user);
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
                        size='large'
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

    // return the loader
    return <Loader />

};

export default withNavigation(Settings);