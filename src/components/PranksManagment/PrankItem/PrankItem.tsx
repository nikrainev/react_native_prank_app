import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {
    Card,
    Button,
    Menu,
    Divider
} from 'react-native-paper';

interface IProps {
    name: string
}

const PrankItem = (props:IProps) => {
    const {
        name
    } = props;

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);


    return (
        <Card style={styles.container}>
            <Button
                icon='plus'
                mode='contained'
            >
                Save
            </Button>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}>
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
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
