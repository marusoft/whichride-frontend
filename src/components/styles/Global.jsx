import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "CeraPro";
  src: url("/src/assests/fonts/CeraPro-Bold.ttf") format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: block;
}
@font-face {
   font-family: "CeraPro";
   src: url("/src/assests/fonts/CeraPro-Bold.otf") format('truetype');
   font-weight: 600;
   font-style: normal;
   font-display: block;
 }
 @font-face {
   font-family: "CeraPro";
   src: url("/src/assests/fonts/CeraPro-Black.otf") format('truetype');
   font-weight: 400;
   font-style: normal;
   font-display: block;
 }
 @font-face {
   font-family: "CeraPro";
   src: url("/src/assests/fonts/CeraPro-Black.ttf") format('truetype');
   font-weight: 400;
   font-style: normal;
   font-display: block;
 }
 @font-face {
   font-family: "CeraPro";
   src: url("/src/assests/fonts/CeraPro-Medium.otf") format('truetype');
   font-weight: 300;
   font-style: normal;
   font-display: block;
 }
 @font-face {
   font-family: "CeraPro";
   src: url("/src/assests/fonts/CeraPro-Medium.ttf") format('truetype');
   font-weight: 300;
   font-style: normal;
   font-display: block;
 }
 @font-face {
   font-family: "CeraPro";
   src: url("/src/assests/fonts/CeraPro-Light.otf") format('truetype');
   font-weight: 200;
   font-style: normal;
   font-display: block;
 }
 @font-face {
   font-family: "CeraPro";
   src: url("/src/assests/fonts/CeraPro-Light.ttf") format('truetype');
   font-weight: 200;
   font-style: normal;
   font-display: block;
 }
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,
html {
  font-family: 'CeraPro', sans-serif;
  background-color: ${({ theme }) => theme.colors.body};
  color: #232C35;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "CeraPro";
}
`;
export default GlobalStyles;
