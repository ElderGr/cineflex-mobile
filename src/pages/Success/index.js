import React from 'react';
import { View, FlatList } from 'react-native';
import { 
  MainTitle,
  CategoryInfo,
  CategoryTitle,
  Container,
  Button,
  ButtonText,
  CategoryContainer
 } from './styles';


function SessionScreen(props) {
  const {
    navigation: { navigate },
    route: {
      params: {
        movie,
        seats,
        name,
        day,
        cpf
      }
    }
  } = props

  const handleNavigation = () => {
    navigate('Home')
  }

  return (
    <Container>
      <MainTitle>Pedido feito com sucesso!</MainTitle>

      <CategoryContainer>
        <CategoryTitle>Filme e sessão</CategoryTitle>
        <CategoryInfo>{movie.title}</CategoryInfo>
        <CategoryInfo>{day.date} {day.time}</CategoryInfo>
      </CategoryContainer>
      
      <CategoryContainer>
        <CategoryTitle>Ingressos</CategoryTitle>
        <FlatList
            data={seats}
            keyExtractor={seat => seat.id}
            renderItem={({ item: seat }) => (
              <View>
                <CategoryInfo>{seat.name}</CategoryInfo>
              </View>
            )}
          />
      </CategoryContainer>
      
      <CategoryContainer>
        <CategoryTitle>Comprador</CategoryTitle>
        <CategoryInfo>Nome: {name}</CategoryInfo>
        <CategoryInfo>CPF: {cpf}</CategoryInfo>
      </CategoryContainer>

      <Button onPress={handleNavigation}>
        <ButtonText>Voltar pra Home</ButtonText>
      </Button>
    </Container>
  );
}

export default SessionScreen;