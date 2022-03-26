import styled, {css} from 'styled-components'
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView`
    width: 100%;
    padding: 25px;
`
export const MainTitle = styled.Text`
    font-size: 24px;
    color: #247A6B;
`

export const CategoryTitle = styled.Text`
    font-size: 24px;
    color: #293845;
    font-weight: bold;
`

export const CategoryInfo = styled.Text`
    font-size: 22px;
    color: #293845;
`

export const Button = styled.TouchableOpacity`
    background: #E8833A;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 50px;
`

export const ButtonText = styled.Text`
    color: #fff;
`

export const CategoryContainer = styled.View`
    margin: 25px 0;
`