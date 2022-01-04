import React from 'react';
import {
    Text,
} from 'react-native';
import { Button } from 'react-native-paper';

const MainPage = () => {

    return (
        <>
            <Text>
            MainPage
            </Text>
           <Button
               icon='camera'
           >
               Start caption
           </Button>
        </>
    );
};

export default React.memo(MainPage);
