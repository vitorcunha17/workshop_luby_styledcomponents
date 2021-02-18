import styled, { css } from 'styled-components/native';
import { Button } from 'native-base';

interface ButtonProps {
    green?: boolean;
    red?: boolean;
    yellow?: boolean;
}

export const StyledText = styled.Text`
    font-size: 25px;
    color: red;
`;

export const StyledButton = styled(Button)<ButtonProps>`
    background-color: blue;
    margin: 0 auto;
    margin-top: 10px;

    ${props => props.green && css`
        background-color: green;
    `}
    ${props => props.red && css`
        background-color: red;
    `}
    ${props => props.yellow && css`
        background-color: yellow;
    `}
`;