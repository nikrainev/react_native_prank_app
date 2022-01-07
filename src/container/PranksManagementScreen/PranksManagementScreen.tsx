import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';
import { useBool } from '../../hooks/useBool';
import { AddPrankBlock } from '../../components/PranksManagment/AddPrankBlock';
import { PrankItem } from '../../components/PranksManagment/PrankItem';
import { useApp } from '../../context/AppContext';

const PranksManagementScreen = () => {
    const addPrankOpened = useBool(false);
    const { pranks, onAddPrank } = useApp();

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
                <AddPrankBlock
                    onAddPrank={onAddPrank}
                />
            )}
            <PrankItem />
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
