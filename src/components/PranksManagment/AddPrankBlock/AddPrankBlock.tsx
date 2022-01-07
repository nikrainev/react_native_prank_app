import React, {
    useState,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TextInput, Card, Button } from 'react-native-paper';
import { IInput } from '../../../models/Prank';

interface IProps {
    onAddPrank: (input:IInput) => void
}

const AddPrankBlock = (props:IProps) => {
    const [prankName, setPrankName] = useState('');
    const {
        onAddPrank,
    } = props;
    const onSavePrank = () => {
        onAddPrank({
            name: prankName
        })
    }
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
            <Button
                icon='plus'
                mode='contained'
                onPress={onSavePrank}
            >
               Save
            </Button>
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
