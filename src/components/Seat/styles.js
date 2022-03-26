import styled, { css } from 'styled-components'
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 36px;
    height: 36px;

    margin: 5px;
    border-radius: 50px;

    ${props => {
        if(props.disabled){
            return css`
                border: 1px solid #F7C52B;
                background: #FBE192; 
            `
        } else {
            if(props.reserved){
                return css`
                    border: 1px solid #45BDB0;
                    background: #8DD7CF; 
                `
            }else{
                return css`
                    border: 1px solid #808F9D;
                    background: #C3CFD9; 
                `
            }
        }
    }}
    

    align-items: center;
    justify-content: center;
`