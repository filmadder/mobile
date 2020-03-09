import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ws from '../../ws';
import {colours} from '../../colours';

const Header = props => {
  const [status, setStatus] = React.useState(props.status);
  const [statusText, setStatusText] = React.useState();
  const [showStatusOptions, setshowStatusOptions] = React.useState();

  React.useEffect(() => {
    setText();
    setshowStatusOptions(false);
  }, [status]);

  const titleFontSize = {
    fontSize: props.title.length < 40 ? 32 : 24,
  };

  const setText = () => {
    switch (status) {
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
  };

  const setNewStatus = newStatus => {
    if (newStatus === status) {
      newStatus = 'n';
    }

    ws.send({
      id: null,
      type: 'set_film_status',
      film: props.filmId,
      status: newStatus,
    })
      .then(data => {
        if (data.type === 'confirm') {
          setStatus(newStatus);
          props.reloadFilm();
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <ImageBackground
      style={s.poster}
      source={{uri: props.poster}}
      resizeMode="cover">
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.4)', colours.blue5]}
        locations={[0, 0.85]}
        style={s.overlay}>
        <View style={[s.infoContainer, props.style]}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={s.statusCurrentBtn}
              onPress={() => setshowStatusOptions(!showStatusOptions)}>
              <Text style={s.statusCurrent}>{statusText}</Text>
            </TouchableOpacity>
            {showStatusOptions && (
              <View style={s.statusOptionsContainer}>
                <TouchableOpacity
                  onPress={() => setNewStatus('f')}
                  activeOpacity={0.8}>
                  <Text style={s.statusOption}>watchlist</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setNewStatus('p')}
                  activeOpacity={0.8}>
                  <Text style={s.statusOption}>seen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setNewStatus('o')}
                  activeOpacity={0.8}>
                  <Text style={s.statusOption}>watching</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <Text style={[s.title, titleFontSize]}>{props.title}</Text>
            <Text style={s.type}>
              {props.type} | {props.year}
            </Text>
            <Text style={s.country}>{props.country}</Text>
            <Text style={s.duration}>{props.duration}</Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
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
    justifyContent: 'space-between',
    height: '100%',
  },
  infoLeft: {
    paddingRight: 30,
  },
  infoRight: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontFamily: 'SourceSansPro-Bold',
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
  statusOptionsContainer: {
    backgroundColor: colours.blue0,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  statusCurrentBtn: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  statusCurrent: {
    color: colours.blue4,
    fontFamily: 'Pacifico-Regular',
    fontSize: 20,
  },
  statusOption: {
    fontSize: 20,
    color: colours.blue4,
    fontFamily: 'Pacifico-Regular',
    textAlign: 'right',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
});

export default Header;
