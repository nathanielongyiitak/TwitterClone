import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export type ProfilePictureProps = {
    image?: string,
    size?: number,
}

const ProfilePicture = ({ image, size = 50 }: ProfilePictureProps) => {
    return (
        <Image
            source={{ uri: image }}
            style={{ width: size, height: size, borderRadius: size }}
        />
    );
};

const styles = StyleSheet.create({});

export default ProfilePicture;
