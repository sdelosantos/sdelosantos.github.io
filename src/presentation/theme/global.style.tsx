import { createGlobalStyle } from 'styled-components';
const multipleBoxShadow = (n: number, offset: number = 2800) => {
  let value = `${Math.floor(Math.random() * offset)}px ${Math.floor(
    Math.random() * offset
  )}px #FFF`;

  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * offset)}px ${Math.floor(
      Math.random() * offset
    )}px #FFF`;
  }

  return value;
};

const shadowsSmall = multipleBoxShadow(1000);
const shadowsMedium = multipleBoxShadow(500);
const shadowsBig = multipleBoxShadow(200);

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  #root{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  #stars {
    box-shadow: ${shadowsSmall};
    &:after {
        box-shadow: ${shadowsSmall};
    }
  }
  #stars2 {
    box-shadow: ${shadowsMedium};
    &:after {
        box-shadow: ${shadowsMedium};
    }
  }

  #stars3 {
    box-shadow: ${shadowsBig};
    &:after {
        box-shadow: ${shadowsBig};
    }
  }
`;
