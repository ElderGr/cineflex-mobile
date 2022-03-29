import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { MovieList, Container, MainTitle } from './styles'
import MovieContainer from '../../components/MovieContainer'
import { ActivityIndicator, Alert  } from 'react-native'

function HomeScreen(props) {
  const {
    navigation: { navigate }
  } = props
  
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setMovies([])
      handleMovieLoad()
  }, [])

  const handleMovieLoad = () => {
    setLoading(true)
    axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`)
    .then(responde => {
      setMovies(responde.data)
    })
    .catch(err => {
      Alert.alert(
        "Ops! Tivemos um erro ao carregar o catálogo de filmes",
        err.response.data,
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Tentar novamente", onPress: () => handleMovieLoad() }
        ]
      );
    })
    .finally(() => setLoading(false))
  }

  const handleNavigation = (movie) => {
    navigate('Movie', {
      movie
    })
  }

  return (
    <Container>
      <MainTitle>Selecione o filme</MainTitle>
      {loading ? 
        <ActivityIndicator size="large" color="#E8833A" />
        :
        <MovieList
          data={movies}
          contentContainerStyle={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          keyExtractor={movie => movie.id}
          renderItem={({ item: movie }) => (
            <MovieContainer 
              handleNavigation={handleNavigation}
              movie={movie}
            />
          )}
        />
      }
      
    </Container>
  );
}

export default HomeScreen;