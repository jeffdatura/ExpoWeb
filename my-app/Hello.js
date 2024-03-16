import { StyleSheet, Text, View } from 'react-native';

export default function Hello() {
    return (
        <View style={styles.container}>
          <Text style={styles.hello}>Jeff</Text>
        </View>
      );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1456',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
      },
  });