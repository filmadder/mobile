import React from 'react';
import { View, StyleSheet } from 'react-native';

const AuthForm = props => {
    const fields = props.children.map(child => <View key={child.label} style={styles.field}>{child}</View>);

    return (
        <View style={styles.container}>
            {fields}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    field: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'center'
    }
});

export default AuthForm;