import styled from 'styled-components/native'
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
`

export const MovieList = styled(FlatList)`
    width: 100%;
    margin: 25px 0;
`

export const MovieContainer = styled(TouchableOpacity)`
    width: 145px;
    height: 209px;
    margin: 10px;

    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.9;
    shadow-radius: 6;
    elevation: 1;


`

export const MovieImage = styled.Image`
    width: 100%;
    height: 100%;
`