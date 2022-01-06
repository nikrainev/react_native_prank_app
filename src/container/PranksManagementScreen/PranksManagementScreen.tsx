import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';
import { useBool } from '../../hooks/useBool';
import { AddPrankBlock } from '../../components/PranksManagment/AddPrankBlock';

const PranksManagementScreen = () => {
    const addPrankOpened = useBool(false);

    return (
        <View style={styles.container}>
            <Button
                icon={addPrankOpened.value ? 'cancel' : 'plus' }
                mode='contained'
                style={styles.addButton}
                onPress={() => addPrankOpened.onToggle()}
            >
                { addPrankOpened.value ? 'Cancel' : 'Add prank' }
            </Button>
            {addPrankOpened.value && (
                <AddPrankBlock />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 7,
    },
    addButton: {
        marginTop: 10,
        marginBottom: 10,
    }
})

export default React.memo(PranksManagementScreen);
