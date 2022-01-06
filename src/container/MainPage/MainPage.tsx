import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';

const MainPage = () => {

    return (
        <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
            MainPage
            </Text>
           <Button
               icon='camera'
           >
               Start caption
           </Button>
        </View>
    );
};

export default React.memo(MainPage);
