import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.main`
  .first {
    background-color: red;
    overflow: hidden;

    .offset {
    }

    .a {
      background: #f5e1ea;
    }
    .b {
      background-color: #582534;
    }

    .c {
      background-color: #0a7397;
    }
  }

  .second {
    background-color: green;
  }

  .third {
    background-color: yellow;
  }

  .fourth {
    background-color: blue;
  }
`;
export const Section = styled.section`
  position: relative;
`;
export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
