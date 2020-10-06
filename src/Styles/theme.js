import { css } from 'styled-components';

const theme = {
  up: '#e12343',
  down: '#1763b6',
  flex: (justify = null, align = null, direction = null) => {
    return css`
      display: flex;
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${direction};
    `;
  },
};

export default theme;
