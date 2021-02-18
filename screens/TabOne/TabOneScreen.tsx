import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyledText, StyledButton } from './styles';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <StyledText>teste tab one</StyledText>

      <StyledButton green>
        <Text>Button nativeBase</Text>
      </StyledButton> 

      <StyledButton yellow>
        <Text>Button nativeBase</Text>
      </StyledButton> 
      
      <StyledButton red>
        <Text>Button nativeBase</Text>
      </StyledButton> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
