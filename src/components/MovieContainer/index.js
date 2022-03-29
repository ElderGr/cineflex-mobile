import React from 'react';

import { Container, MovieImage } from './styles';

function MovieContainer({
    movie,
    handleNavigation
}) {
  return (
    <Container onPress={() => handleNavigation(movie)}>
        <MovieImage source={{ uri : movie.posterURL}} />
    </Container>
  );
}

export default MovieContainer;