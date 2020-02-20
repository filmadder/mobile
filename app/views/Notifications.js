import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import NotificationItem from '../components/NotificationItem';
import ViewTitle from '../components/ViewTitle';
import ViewWrapper from './ViewWrapper';
import ws from '../ws';

const Notifications = props => {
    const [page, setPage] = React.useState(0);
    const [updates, setUpdates] = React.useState([]);

    React.useEffect(() => {
        props.navigation.popToTop()
        getUpdates();
    }, [updates]);

    const getUpdates = () => {
        setPage(page + 1);

        ws.send({
            type: "get_updates",
            per_page: 10,
            page: page,
            id: null
        })
        .then(data => {
            if (data.items.length > 0) {
                setUpdates(updates.concat(data.items))
            }
        })
        .catch(err => (console.log(err)))
    };

    return (
        <ViewWrapper>
            <FlatList
                ListHeaderComponent={<ViewTitle title='Notifications' style={{ paddingTop: 20 }} />}
                data={updates}
                renderItem={({ item }) => <NotificationItem
                        user={item.user}
                        type={item.type}
                        created={item.created} />
                }
                keyExtractor={item => item.pk.toString()}
                onEndReached={() => getUpdates()}
            />
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
    buttonGroup: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});

export default Notifications;