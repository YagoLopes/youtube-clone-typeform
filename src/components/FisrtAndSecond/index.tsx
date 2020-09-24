import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Sticky } from "../../styles";

const FisrtAndSecond: React.FC = () => {
  //Pega o progresso do scroll do usuário
  const { scrollYProgress } = useViewportScroll();

  //OBS: Os valores 0.qualquercoisa estão em porcentagem
  //Exemplo: 0.558 === 55%

  //Quando o progresso for 0.196 a opacidade é 0;
  //Quando o progresso for 0.198 a opacidade vira 1;

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);

  //Comportamento de aumentar o tamanho [ scala] do quadro quando o usuário desse na página

  //Quando o progresso for 0.558 a scala é 0.5511;
  //Quando o progresso for 0.627 a scala é 0.8;

  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  );

  return (
    <Sticky className="second">
      <Fisrt />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          borderRadius: "4px",
          border: "4px solid #fff",
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  );
};

const Fisrt: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  //OBS: O valor é o maximo do tamanho do elemento

  // Dos 19% da tela até os 26% da tela eu vou aumentar o quadro de 1 de scala para 51%
  //Depois quando estiver entre 58% e 62% eu vou aumentar ele de novo de 51% para 1

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );
  // Ele começa com zero de borderRadius e depois ganha 4px
  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 0.4, 4, 0]
  );

  //Do 0 até mais o menos 5 ou 6 % ele vai começar em 20vh e vai terminar em 100vh

  const leftSideHight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ["20vh", "100vh"]
  );

  //Aumentando a scala até a mentade dela
  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  );

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["58vh", "0vh"]
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.55],
    ["0%", "-100%", "-100%", "-200%"]
  );

  return (
    <Sticky
      className="first"
      style={{ scale: firstScale, borderRadius: firstRadius }}
    >
      <motion.div
        className="offset"
        style={{
          y: offsetY,
        }}
      >
        <div className="a">
          <motion.div className="left-side" style={{ height: leftSideHight }} />

          <div className="right-side">
            <motion.div
              className="right-image"
              style={{ y: rightSideY, scale: rightSideScale }}
            />
          </div>
        </div>
        <div className="b"></div>
        <div className="c"></div>
      </motion.div>
    </Sticky>
  );
};

export default FisrtAndSecond;
