import React from 'react';
import { View, StyleSheet } from 'react-native';

const AuthForm = props => {
    const fields = props.children.map(child =>
        <View key={child.label} style={styles.field}>{child}</View>
    );

    return (
        <View style={[styles.container, props.style]}>
            {fields}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        paddingTop: 50
    },
    field: {
        width: '100%',
        marginVertical: 15,
        alignItems: 'center'
    }
});

export default AuthForm;