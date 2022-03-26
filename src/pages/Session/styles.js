import styled, {css} from 'styled-components'
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView`
    padding: 20px;
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