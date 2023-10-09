import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* ---------------------------------- RESET --------------------------------- */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

:root {
  --color-brand-1: #748FCD;
  --color-brand-2: #416478;
  --color-light: #F8F6F6;
  --color-neutral: #AFAAAD;
  --color-dark: #29202E;

  --color-success: ##559A70;
  --color-atention: ##D08F36;
  --color-error:##F43D30;

  --color-gray-900: #212121;
  --color-gray-800: #424242;
  --color-gray-700: #616161;
  --color-gray-600: #757575;
  --color-gray-500: #9e9e9e;
  --color-gray-400: #bdbdbd;
  --color-gray-300: #e0e0e0;
  --color-gray-200: #eeeeee;
  --color-gray-100: #f5f5f5;

  --font-nunito: 'Nunito', sans-serif;

  --font-size-44: 2.75rem;
	--font-size-36: 2.25rem;
	--font-size-32: 2rem;
	--font-size-28: 1.75rem;
	--font-size-24: 1.5rem;
	--font-size-20: 1.25rem;
	--font-size-16: 1rem;
	--font-size-14: 0.875rem;

	--font-weight-800: 800;
	--font-weight-700: 700;
	--font-weight-600: 600;
	--font-weight-500: 500;
	--font-weight-400: 400;
}

body,html{
  width: 100vw;
  height: 100vh;
}

body {
  color: var(--color-dark);
  background-color: var(--color-neutral);
  -webkit-font-smoothing: antialiased;

  overflow-x: hidden;
}

body, input, button, textarea {
  font-size: 1rem;
  font-family: var(--font-nunito);
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 500;
}

button {
  cursor: pointer;
  font-family: var(--font-nunito);
  border: 2px;
  border-radius: 4px;
}
`;
