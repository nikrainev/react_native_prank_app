import React, {
    useState,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TextInput, Card } from 'react-native-paper';

const AddPrankBlock = () => {
    const [prankName, setPrankName] = useState('');
    return (
        <Card style={styles.container}>
            <View style={styles.inputWr}>
                <TextInput
                    mode="outlined"
                    label="Prank name"
                    style={styles.prankNameInput}
                    value={prankName}
                    onChangeText={text => setPrankName(text)}
                />
            </View>
            <Text>
                Add prank
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 7,
    },
    prankNameInput: {
        height: 47,
    },
    inputWr: {
        width: '100%',
    }
});

export default React.memo(AddPrankBlock);
