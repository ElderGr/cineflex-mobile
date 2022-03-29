import React from 'react';

import { Container, MovieImage } from './styles';

function MovieContainer({
    movie,
    handleNavigation,
    width,
    height
}) {
  return (
    <Container 
      onPress={handleNavigation}
      height={height}
      width={width}
    >
        <MovieImage source={{ uri : movie.posterURL}} />
    </Container>
  );
}

export default MovieContainer;