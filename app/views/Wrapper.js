import React from 'react';
import { View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import ws from '../ws';

const Wrapper = props => {

    React.useEffect(() => {
        let listener = EventRegister.addEventListener('error', error => {
            props.navigation.navigate('Error', { error })
        })

        return () => EventRegister.removeEventListener(listener)
    }, [props.fetch])

    return (
        <View>
            {props.children}
        </View>
    )
};

export default Wrapper;
