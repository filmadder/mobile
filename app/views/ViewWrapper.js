import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Error from './Error';
import { EventRegister } from 'react-native-event-listeners';

const ViewWrapper = props => {
    const [hasError, setHasError] = React.useState(false);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        let listener = EventRegister.addEventListener('error', error => {
            setHasError(true);
            setError(error);
        });

        return () => EventRegister.removeEventListener(listener);
    }, [])
    
    return (
        <View style={{ flex: 1 }}>
            {hasError ? (
                <Error error={error} />
            ) : (
                <View style={[s.container, props.style]}>
                    {props.children}
                </View>
            )}
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        paddingHorizontal: Dimensions.get('window').width  < 400 ? 15 : 30,
    }
});

export default ViewWrapper;