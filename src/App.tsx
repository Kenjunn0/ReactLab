import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import Router from "./Router";
import {ReactQueryDevtools} from "react-query/devtools";
import {useRecoilState, useSetRecoilState} from "recoil";
import {isDarkAtom} from "./atom";
import { darkTheme, lightTheme } from "./theme";
import React from "react";
import { StarIcon, SunIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const LightMode = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.accentColor};
`

const ToggleButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.boxColor};
`

const Text = styled.h2`
  font-size : 40px;
  font-weight: 600;
  color: ${props => props.theme.bgColor}
`

function App() {
    const [ isDark, setIsDark ] = useRecoilState(isDarkAtom);
    const navigate = useNavigate();

    const handleLightMode = () => {
        setIsDark((prev) => !prev);
    }

    const handleNavHome = () => navigate("/");

  return (
    <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>
      <GlobalStyle />
        <LightMode >
            <Text>Nomad Coins</Text>
            <ToggleButton onClick={handleLightMode}>{isDark ? <StarIcon /> : <SunIcon /> }</ToggleButton>
            <ToggleButton onClick={handleNavHome}><ArrowLeftIcon /></ToggleButton>
        </LightMode>
      <Router />
      <ReactQueryDevtools />
    </ThemeProvider>
  );
}

export default App;