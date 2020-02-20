import React from 'react';
import { ScrollView, Text } from 'react-native';

import SettingsSection from '../components/SettingsSection';
import Avatar from '../components/user/Avatar';
import Username from '../components/user/Username';
import ViewWrapper from './ViewWrapper';
import LogoutBtn from '../views/auth/LogoutBtn';
import Loader from '../components/Loader';
import ViewTitle from '../components/ViewTitle';

import { withNavigation } from 'react-navigation';
import { getLoggedUser } from '../auth';

const Settings = () => {
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

    /*
        RENDER
    */
    // return the view
    if (user) {
        return (
            <ViewWrapper>
                <ScrollView>
                    <ViewTitle title='Settings' />
                    <SettingsSection
                        title='Avatar'>
                        <Avatar
                            style={{ marginRight: 0 }}
                            name={user.name}
                            size='large'
                            user={user} />
                    </SettingsSection>
                    <SettingsSection
                        title='Username'>
                        <Username
                            name={user.name}
                            size='large' />
                    </SettingsSection>
                    <SettingsSection
                        title='Password'
                        btnText='change'>
                        <Text>🔑🔑🔑🔑🔑🔑</Text>
                    </SettingsSection>
                    <SettingsSection>
                        <LogoutBtn
                            title='logout' />
                    </SettingsSection>
                </ScrollView>
            </ViewWrapper>
        )
    }

    // return the loader
    return <Loader />

};

export default withNavigation(Settings);