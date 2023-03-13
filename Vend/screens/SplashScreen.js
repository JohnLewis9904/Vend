import { StyleSheet, View, Text } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text>Splash</Text>
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