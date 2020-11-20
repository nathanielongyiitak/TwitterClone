import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { listTweets } from '../../graphql/queries';
import Tweet from '../Tweet';

export type FeedProps = {}

const Feed = (props: FeedProps) => {
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchTweets = async () => {
        setLoading(true)
        try {
            const tweetsData = await API.graphql(graphqlOperation(listTweets))
            setTweets(tweetsData.data.listTweets.items)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTweets()
    }, [])

    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={tweets}
                renderItem={({ item }) => (<Tweet tweet={item} />)}
                keyExtractor={item => item.id}
                refreshing={loading}
                onRefresh={fetchTweets}
            />
        </View>
    );
};

export default Feed;
