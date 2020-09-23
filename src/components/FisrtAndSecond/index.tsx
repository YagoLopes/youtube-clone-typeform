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

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );

  return <Sticky className="first" style={{ scale: firstScale }}></Sticky>;
};

export default FisrtAndSecond;
