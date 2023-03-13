import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
    <View style={styles.container}>
        <Button 
            title="Go next"
            onPress={() => navigation.navigate("Splash")}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyConent: 'center',
    }
})