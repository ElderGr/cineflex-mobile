import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';

import { Container } from './styles';

function Seat(props) {

    const [reserved, setReserved] = useState(false)

    return (
        <Container>
            <Text>{props.name}</Text>
        </Container>
    );
}

export default Seat;