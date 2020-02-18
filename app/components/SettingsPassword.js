import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './dom/Input';
import FaButton from './dom/FaButton';
import LogoutBtn from '../views/auth/LogoutBtn';
import ws from '../ws';
import { colours } from '../colours';

const SettingsPassword = props => {
    const [oldPass, setOldPass] = React.useState('');
    const [newPass1, setNewPass1] = React.useState('');
    const [newPass2, setNewPass2] = React.useState('');
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState(false);

    const newRef1 = React.createRef();
    const newRef2 = React.createRef();

    const change = () => {
        if (oldPass.length === 0 || newPass1.length === 0 || newPass2.length === 0) {
            setError('Please fill in all the fields');
        } else if (newPass1 !== newPass2) {
            setError('New passwords do not match');
        } else {
            ws.send({
                id: null,
                type: "change_password",
                old_password: oldPass,
                new_password: newPass1        
            })
            .then(response => {
                if (response.type === 'confirm') {
                    setSuccess(true)
                } else {
                    setError(response.message)
                }
            })
            .catch(err => {
                console.warn(err)
            })
        }

    };

    return (
        <View style={{ width: '100%' }}>
            {error !== '' &&
                <Text style={s.message}>{error}</Text>
            }
            {!success ? (
                <View>
                <Input
                    style={{ paddingVertical: 30 }}
                    dark='true'
                    label='old password'
                    textContentType='password'
                    value={oldPass}
                    onChangeText={text => setOldPass(text)}
                    setFocused={() => setError('')}
                    onSubmitEditing={() => newRef1.current.focus()} />
                <Input
                    style={{ paddingVertical: 30 }}
                    dark='true'
                    label='new password'
                    textContentType='password'
                    value={newPass1}
                    onChangeText={text => setNewPass1(text)}
                    setFocused={() => setError('')}
                    ref={newRef1}
                    onSubmitEditing={() => newRef2.current.focus()} />
                <Input
                    style={{ paddingVertical: 30 }}
                    dark='true'
                    label='repeat new password'
                    textContentType='password'
                    value={newPass2}
                    onChangeText={text => setNewPass2(text)}
                    setFocused={() => setError('')}
                    ref={newRef2}
                    onSubmitEditing={change} />
                <FaButton
                    title='change'
                    onPress={change} />
                </View>
            ) : (
                <>
                    <Text style={[s.message, {fontSize: 50}]}>🎉</Text>
                    <Text style={s.message}>Your password is now changed!</Text>
                    <LogoutBtn
                        title='close' />
                </>
            )}
        </View>
    )
};

const s = StyleSheet.create({
    message: {
        textAlign: 'center',
        fontSize: 17,
        padding: 20,
        fontWeight: 'bold',
        color: colours.black
    }
})

export default SettingsPassword;