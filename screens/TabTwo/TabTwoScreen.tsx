import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StyledText, StyledButton, StyledTextRand } from './styles';


export default function TabTwoScreen() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <StyledText cor="green">teste tab one</StyledText>

      <StyledTextRand>TEXTO RANDON</StyledTextRand>

      <Button title="Native button" onPress={() => setAtivo(!ativo)} />

      <StyledButton ativo={ativo} onPress={() => setAtivo(!ativo)}>
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
