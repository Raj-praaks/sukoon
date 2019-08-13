import React from "react";
import styled, { ThemeProvider } from "styled-components";


const Wrapper = styled.div`
  padding: ${props => props.full ? '0' : '5px'};
  background: ${props=> props.theme.fg};
  border: 1px solid ${props => props.theme.bg};

`;

const ThemedButton = styled.button`
  padding: 5px 10px;
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
`;

const green = {
    bg: '#12443e',
    fg: '#fff',
    paleMint:'#C2DCD3',
};

const white = {
    bg: '#fff',
    fg: '#12443e',
};

const mint ={
    bg:'#C2DCD3',
    fg: '#12443e',
};


const Button = (props) =>{

    const theme = props.theme === 'green' ? green : props.theme === 'mint' ? mint : props.theme === 'white' ? white : green;

    return(
        <ThemeProvider theme={theme}>
            <Wrapper full={props.full} id={props.id} className={`${props.wrapperClass || ''} w-fit`}>
                <ThemedButton
                    className={`${props.buttonClass || ''} block relative font-gilroyMedium outline-none text-sm items-center`}>
                    {props.children}
                </ThemedButton>
            </Wrapper>
        </ThemeProvider>

    )
};

export default Button;