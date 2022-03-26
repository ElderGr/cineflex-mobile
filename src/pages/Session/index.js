import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, View, Text} from 'react-native';
import Seat from '../../components/Seat'

import { SeatsContainer, Container, LegendContainer, Legend, LegendColor } from './styles';

function SessionScreen(props) {
  const {
    navigation: { navigate },
    route: {
      params: {
        movieId
      }
    }
  } = props

  const [sessionInfo, setSessionInfo] = useState({})
  const [selectedSeats, setSelectedSeats] = useState([])

  useEffect(() => {
    async function handleSessionSeats(){
      const { data } = await axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${movieId}/seats`)

      setSessionInfo(data)
    }

    handleSessionSeats()
  }, [movieId])

  const handleNavigation = () => {
    navigate('Success')
  }

  return (
    <Container>
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
            name={seat.name.padStart(2, '0')}
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
    </Container>
  );
}

export default SessionScreen;