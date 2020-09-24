import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.main`
  .first {
    background-color: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #f5e1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #7dbb91;
          width: 100%;
        }
      }
    }
    .b {
      background-color: #582534;
      width: 100%;
      height: 100%;
    }

    .c {
      background-color: #0a7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background-color: green;
    width: 100%;
    height: 100%;
  }

  .third {
    background-color: yellow;
    width: 100%;
    height: 100%;
  }

  .fourth {
    background-color: blue;
    width: 100%;
    height: 100%;
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
