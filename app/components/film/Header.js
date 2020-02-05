import React from 'react';
import { View, TouchableOpacity, ImageBackground, Text, Button, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ws from '../../ws';
import { colours } from '../../colours';

const Header = props => {
    const [status, setStatus] = React.useState(props.status);
    const [statusText, setStatusText] = React.useState();
    const [showStatusOptions, setshowStatusOptions] = React.useState();

    React.useEffect(() => {

        setText();
        setshowStatusOptions(false);

    }, [status])

    const setText = () => {

        switch(status) {
            case 'p':
                setStatusText('seen');
                break;
            case 'n':
                setStatusText('not set');
                break;
            case 'f':
                setStatusText('watchlist');
                break;
            case 'o':
                setStatusText('watching');
        }
    }

    const setNewStatus = newStatus => {

        if (newStatus === status) {
            newStatus = 'n'
        }

        ws.send({
            id: null,
            type: "set_film_status",
            film: props.filmId,
            status: newStatus      
        })
        .then(data => {
            if (data.type === 'confirm') {
                setStatus(newStatus);
                props.reloadFilm();
            }
        })
        .catch(err => {
            console.warn(err)
        })
    };

    return (
        <ImageBackground
            style={s.poster}
            source={{uri: props.poster}}
            resizeMode='cover'>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', colours.blue5]}
                locations={[0, 0.85]}
                style={s.overlay}>
                <View style={[s.infoContainer]}>
                    <View style={s.infoLeft}>
                        <Text style={s.title}>{props.title}</Text>
                        <Text style={s.type}>{props.type} | {props.year}</Text>
                        <Text style={s.country}>{props.country}</Text>
                        <Text style={s.duration}>{props.duration}</Text>
                    </View>
                    <View style={s.infoRight}>
                        {showStatusOptions && (
                            <View>
                                <Button onPress={() => setNewStatus('f')} color='white' title='watchlist'></Button>
                                <Button onPress={() => setNewStatus('p')} color='white' title='seen'></Button>
                                <Button onPress={() => setNewStatus('o')} color='white' title='currently watching'></Button>
                            </View>
                        )}
                        <TouchableOpacity
                            onPress={() => setshowStatusOptions(!showStatusOptions)}>
                            <Text style={s.status}>{statusText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
};

const s = StyleSheet.create({
    poster: {
        height: 600,
        width: '100%',
    },
    overlay: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
    },
    infoLeft: {
        paddingRight: 30,
    },
    title: {
        color: 'white',
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 32,
    },
    type: {
        color: 'white',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        textTransform: 'uppercase',
        marginTop: 10,
    },
    country: {
        color: 'white',
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 18,
        marginTop: 15,
    },
    duration: {
        color: 'white',
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 18,
    },
    infoRight: {

    },
    status: {
        color: 'white',
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 22,
    }
});

export default Header;