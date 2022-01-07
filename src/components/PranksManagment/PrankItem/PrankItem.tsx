import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { Card } from 'react-native-paper';

const PrankItem = () => {

    return (
        <Card style={styles.container}>
            <Text>
                Prank
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 7,
    },
});

export default React.memo(PrankItem);
