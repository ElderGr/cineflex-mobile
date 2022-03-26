import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Seat from '../../components/Seat'

import { 
  SeatsContainer, 
  Container, 
  LegendContainer, 
  Legend, 
  LegendColor,
  Input,
  InputContainer,
  Button,
  ButtonText,
  MainContainer,
  FooterContainer,
  ImageContainer
} from './styles';

function SessionScreen(props) {
  const {
    navigation: { navigate },
    route: {
      params: {
        movieId
      }
    }
  } = props

  const [sessionInfo, setSessionInfo] = useState({
    day: {},
    movie: {},
    seats: []
  })
  const [selectedSeats, setSelectedSeats] = useState([])
  const [clientName, setClientName] = useState(``)
  const [CPF, setCPF] = useState(``)


  useEffect(() => {
    async function handleSessionSeats(){
      const { data } = await axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${movieId}/seats`)
      setSessionInfo(data)
    }

    handleSessionSeats()
  }, [movieId])

  const handleSelectSeat = (target) => {
    const copySelectedSeats = selectedSeats
    const targetIndex = copySelectedSeats.findIndex(seat => seat.id === target.id)

    if(targetIndex !== -1){
      setSelectedSeats([
        ...selectedSeats.filter(seat => seat.id !== target.id)
      ])
    }else{
      setSelectedSeats([
        ...copySelectedSeats,
        target
      ])
    }
  }

  const handleNavigation = async () => {
    try{
      if(selectedSeats.length === 0 || !clientName || !CPF){
        throw new Error(`Necessário fornecer algumas informações!`)
      }

      await axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, {
        ids: selectedSeats,
        name: clientName,
        cpf: CPF
      })
  
      navigate('Success', {
        movie: sessionInfo.movie,
        seats: selectedSeats,
        name: clientName,
        cpf: CPF
      })
    }catch(err){
      console.log(err)
    }
   
    
  }

  return (
    <Container>
      <MainContainer>
        <Text>Selecione o(s) assento(s)</Text>
        <SeatsContainer
          contentContainerStyle={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }} 
          data={sessionInfo.seats}
          keyExtractor={seats => seats.id}
          renderItem={({ item: seat }) => (
            <Seat
              seat={seat}
              name={seat.name.padStart(2, '0')}
              isAvailable={seat.isAvailable}
              handleSelectSeat={handleSelectSeat}
            />
          )}
        />
        <LegendContainer>
          <Legend>
            <LegendColor color={`selected`} />
            <Text>Selecionado</Text>
          </Legend>
          <Legend>
            <LegendColor color={`enabled`} />
            <Text>Disponível</Text>
          </Legend>
          <Legend>
            <LegendColor color={`disabled`} />
            <Text>Indisponível</Text>
          </Legend>
        </LegendContainer>
        <View>
          <InputContainer>
            <Text>Nome do comprador:</Text>
            <Input 
              placeholder='Digite seu nome...'
              value={clientName}
              onChangeText={value => setClientName(value)}
            />
          </InputContainer>
          <InputContainer>
            <Text>CPF do comprador:</Text>
            <Input 
              placeholder='Digite seu CPF...'
              value={CPF}
              onChangeText={value => setCPF(value)}
            />
          </InputContainer>
        </View>
        <View>
          <Button onPress={handleNavigation}>
            <ButtonText>Reservar assento(s)</ButtonText>
          </Button>
        </View>
      </MainContainer>
      <FooterContainer>
        <ImageContainer source={{
          uri: sessionInfo.movie.posterURL
        }} />
        <View>
          <Text>{sessionInfo.movie.title}</Text>
          <View>
            <Text>{sessionInfo.day.weekday} - {sessionInfo.name}</Text>
          </View>
        </View>
      </FooterContainer>
    </Container>
  );
}

export default SessionScreen;