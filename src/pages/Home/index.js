import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { MovieContainer, MovieList, MovieImage, Container } from './styles'

function HomeScreen(props) {
  const {
    navigation: { navigate }
  } = props
  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`)
      .then(responde => {
        setMovies(responde.data)
      })
      .catch(err => {
        console.warn(err)
      })
  }, [])

  const handleNavigation = (movie) => {
    navigate('Movie', {
      movie
    })
  }

  return (
    <Container>
      <MovieList
        data={movies}
        contentContainerStyle={{
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        keyExtractor={movie => movie.id}
        renderItem={({ item: movie }) => (
          <MovieContainer onPress={() => handleNavigation(movie)}>
            <MovieImage source={{ uri : movie.posterURL}} />
          </MovieContainer>
        )}
      />
    </Container>
  );
}

export default HomeScreen;