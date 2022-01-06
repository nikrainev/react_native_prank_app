import React from 'react';
import {
    Text,
    View,
} from 'react-native';

const AboutScreen = () => {

    return (
        <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                AboutPage
            </Text>
            <Text>
               Krainev Nikita
            </Text>
        </View>
    );
};

export default React.memo(AboutScreen);
