import styled from 'styled-components/native'
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 25px;
`

export const MovieList = styled(FlatList)`
    width: 100%;
    margin: 25px 0;
`

export const MainTitle = styled.Text`
    font-size: 24px;
    text-align: center;
    padding: 15px 0;
`