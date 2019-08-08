import { createGlobalStyle } from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import 'react-alice-carousel/lib/alice-carousel.css'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.4rem;
    font-family: "Alegreya Sans", "Open Sans", sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    background-color: #f5f5f5
  }

  tt,
  code,
  kbd,
  samp,
  listing {
    font-family: hasklig, Hack, "Fira Code", "Source Code Pro", monaco, menlo,
      consolas, monospace;
    font-variant-ligatures: contextual;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`
