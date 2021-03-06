import styled, {css} from 'styled-components/native'
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    ${(props) => {
        if(props.width && props.height){
            return css`
                width: ${props.width};
                height: ${props.height};
            `
        }else{
            return css`
                width: 145px;
                height: 209px;
            `
        }
    }}
    
    margin: 10px;

    border-width: 1;
    border-radius: 0.1;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 1};
    shadow-opacity: 0.1;
    shadow-radius: 6;
    elevation: 1;

    justify-content: center;
    align-items: center;
    background: #fff;
`

export const MovieImage = styled.Image`
    width: 90%;
    height: 90%;
`