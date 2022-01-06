import React from 'react';
import {
    Text,
    View,
} from 'react-native';

const AddPersonBlock = () => {

    return (
        <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Pranks List
            </Text>
            <Text>
                Add prank
            </Text>
        </View>
    );
};

export default React.memo(AddPersonBlock);
