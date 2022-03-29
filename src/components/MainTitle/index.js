import React from 'react';

import { Container } from './styles';

function MovieContainer({
    text
}) {
  return (
    <Container>{text}</Container>
  );
}

export default MovieContainer;