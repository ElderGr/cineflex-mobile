import styled, {css} from 'styled-components'
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
`

export const SeatsContainer = styled(FlatList)`
    width: 100%;
    margin-top: 15px;
    height: 20%;
`

export const Seat = styled(TouchableOpacity)`
    background: #C3CFD9;
    width: 36px;
    height: 36px;

    margin: 5px;
    border-radius: 50px;
    border: 1px solid #808F9D;

    align-items: center;
    justify-content: center;
`

export const LegendContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin: 35px 0;
`

export const Legend = styled.View`
    align-items: center;
    justify-content: center;
`

export const LegendColor = styled.View`
    width: 25px;
    height: 25px;

    ${props => {
        if(props.color === `selected`){
            return css`
                background: #8DD7CF;
                border: 1px solid #1AAE9E;
            `
        }else if(props.color === `disabled`){
            return css`
                background: #FBE192;
                border: 1px solid #F7C52B;
            `
        }else{
            return css`
                background: #C3CFD9;
                border: 1px solid #7B8B99;
            `
        }
    }};

    border-radius: 50px;
`

export const InputContainer = styled.View`
    margin-bottom: 15px;
`

export const Input = styled.TextInput`
    border: 1px solid #D4D4D4;
    height: 50px;
    border-radius: 5px;
    padding: 15px;
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

export const MainContainer = styled.ScrollView`
    padding: 20px;

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