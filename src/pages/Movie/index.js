import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import {
  Container,
  SessionsList,
  SessionContainer,
  Session,
  SessionText,
  TimesContainer,
  FooterContainer,
  ContentContainer,
  MovieFooterText,
  SessionDayText
} from './styles'

import MainTitle from '../../components/MainTitle'
import MovieContainer from '../../components/MovieContainer'


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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function handleMovieSessions(){
      setLoading(true)
      setSessions([])
      try{
        const {data} = await axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movie.id}/showtimes`)

        setSessions(data)
        setMovieInfos(movie)
      }catch(err){
        Alert.alert(
          "Ops! Tivemos um erro ao carregar as sessões do filme",
          err.response.data,
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "Tentar novamente", onPress: () => handleMovieSessions() }
          ]
        );
      }finally{
        setLoading(false)
      }
    }

    handleMovieSessions()
  }, [movie])

  const handleNavigation = (id) => {
    navigate('Session', {
      movieId: id
    })
  }

  return (
    <Container>
      <ContentContainer>
        <MainTitle text="Selecione o horário" />
        {loading ? 
          <ActivityIndicator />
          :
          <SessionsList 
            data={sessions.days}
            keyExtractor={days => days.id}
            renderItem={({ item: day }) => (
              <SessionContainer>
                <SessionDayText>{day.weekday} - {day.date}</SessionDayText>
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
        }
        
      </ContentContainer>
      
      <FooterContainer>
        <MovieContainer
          movie={movieInfos}
          width='50px'
          height='75px'
        />
        <MovieFooterText>{movieInfos.title}</MovieFooterText>
      </FooterContainer>
    </Container>
  );
}

export default MovieScreen;