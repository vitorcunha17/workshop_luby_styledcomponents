import styled from 'styled-components/native';
import { Button } from 'native-base';

interface TextProps {
    cor: string;
}

interface ButtonProps {
    ativo: boolean;
}

export const StyledText = styled.Text<TextProps>`
    font-size: 25px;
    color: ${(props) => props.cor};
`;

export const StyledTextRand = styled.Text`
    font-size: 25px;
    color: hsl(${Math.random() *120}, 100%, 50%);
    font-weight: bold;
`;

export const StyledButton = styled(Button)<ButtonProps>`
    background-color: ${({ ativo }) => (ativo ? 'green' : 'red')};
    margin: 0 auto;
    margin-top: 10px;
`;
