import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import tweets from '../../data/tweets';
import Tweet from '../Tweet';

export type FeedProps = {}

const Feed = (props: FeedProps) => {
    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={tweets}
                renderItem={({ item }) => (<Tweet tweet={item} />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default Feed;
