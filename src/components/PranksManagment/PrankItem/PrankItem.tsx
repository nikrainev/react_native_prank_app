import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { Card } from 'react-native-paper';

interface IProps {
    name: string
}

const PrankItem = (props:IProps) => {
    const {
        name
    } = props;

    return (
        <Card style={styles.container}>
            <Text>
                {name}
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
