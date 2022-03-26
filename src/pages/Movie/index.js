import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import {
  Container,
  SessionsList,
  SessionContainer,
  Session,
  SessionText,
  TimesContainer,
  FooterContainer,
  ContentContainer,
  ImageContainer
} from './styles'


function MovieScreen(props) {
  const {
    navigation: { navigate },
    route: {
      params: {
        movie
      }
    }
  } = props

  const [movieInfos, setMovieInfos] = useState({})
  const [sessions, setSessions] = useState({})

  useEffect(() => {
    async function handleMovieSessions(){
      const {data} = await axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movie.id}/showtimes`)

      setSessions(data)
      setMovieInfos(props.route.params.movie)
    }

    handleMovieSessions()
  }, [])

  const handleNavigation = (id) => {
    navigate('Session', {
      movieId: id
    })
  }

  return (
    <Container>
      <ContentContainer>
        <Text>Selecione o horário</Text>
        <SessionsList 
          data={sessions.days}
          keyExtractor={days => days.id}
          renderItem={({ item: day }) => (
            <SessionContainer>
              <Text>{day.weekday} - {day.date}</Text>
              <TimesContainer 
                data={day.showtimes}
                keyExtractor={showtimes => showtimes.id}
                renderItem={({ item: showtimes }) => (
                  <Session onPress={() => handleNavigation(showtimes.id)}>
                    <SessionText>{showtimes.name}</SessionText>                  
                  </Session>
                )}
              />

            </SessionContainer>
          )}
        />
      </ContentContainer>
      
      <FooterContainer>
        <ImageContainer source={{
          uri: movieInfos.posterURL
        }} />
        <Text>{movieInfos.title}</Text>
      </FooterContainer>
    </Container>
  );
}

export default MovieScreen;