import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export type NewTweetButtonProps = {}


const NewTweetButton = (props: NewTweetButtonProps) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('NewTweet')
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={onPress}
        >
            <MaterialCommunityIcons name='feather' size={30} color='white' />
        </TouchableOpacity>
    );
};

export default NewTweetButton;
