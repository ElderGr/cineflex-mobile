import React, { useState } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

function Seat(props) {

    const [reserved, setReserved] = useState(false)

    return (
        <Container
            disabled={!props.isAvailable}
            reserved={reserved}
            onPress={() => {
                setReserved(!reserved)
                props.handleSelectSeat(props.seat)
            }}
        >
            <Text>{props.name}</Text>
        </Container>
    );
}

export default Seat;