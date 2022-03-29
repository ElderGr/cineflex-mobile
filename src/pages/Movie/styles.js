import styled from 'styled-components'
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const SessionsList = styled(FlatList)`
    width: 100%;
    flex: 1;
    margin: 25px 0;
`

export const SessionContainer = styled.View`
    margin-bottom: 30px;
`

export const Session = styled(TouchableOpacity)`
    background: #E8833A;
    width: 83px;
    height: 43px;
    margin: 5px;
    border-radius: 5px;

    justify-content: center;
    align-items: center;
`

export const SessionText = styled.Text`
    color: #fff;
`

export const TimesContainer = styled(FlatList)`
    width: 100%;
    flex-direction: row;
    margin-top: 15px;
`

export const ContentContainer = styled.View`
    padding: 25px;
    height: 85%;
`

export const FooterContainer = styled.View`
    background: #9EADBA;
    width: 100%;
    height: 100px;
    padding: 0 15px;
    flex-direction: row;
    align-items: center;
`

export const ImageContainer = styled.Image`
    width: 48px;
    height: 72px;
    margin-right: 20px;
`

export const SessionDayText = styled.Text`
    font-size: 18px;
`

export const MovieFooterText = styled.Text`
    font-size: 20px;
    flex: 1;
    flex-wrap: wrap;
`