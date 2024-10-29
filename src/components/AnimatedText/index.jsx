import { useSpring, animated } from "@react-spring/web";
import { Container } from "./styles";
import { useState, useEffect } from "react";

export function AnimatedText() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 3000); // 4s: 2s de animação + 2s de espera

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const text1Props = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0px)' : 'translateY(-30px)',
    config: { tension: 200, friction: 20 },
    delay: 0, // Sem delay para o primeiro texto
  });

  const text2Props = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0px)' : 'translateY(-30px)',
    config: { tension: 200, friction: 20 },
    delay: 500, // Delay de 0.5s para o segundo texto
  });

  const text3Props = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0px)' : 'translateY(-30px)',
    config: { tension: 200, friction: 20 },
    delay: 1000, // Delay de 1s para o terceiro texto
  });

  return (
    <Container>
      <animated.div style={text1Props}>
        <div style={{ fontSize: "2.5em", color: "#EBB576", fontWeight:"600" }}>BEM VINDO(a)</div>
      </animated.div>

      <animated.div style={text2Props}>
        <div style={{ fontSize: "3em", fontWeight:"700", color: "#fff" }}>
          PADARIA PADAJÃO
        </div>
      </animated.div>

      <animated.div style={text3Props}>
        <div style={{ fontSize: "1.5em", fontWeight:"400", color: "#fff" }}>
        Onde o aroma fresco e o sabor <br />caseiro se encontram        </div>
      </animated.div>
    </Container>
  );
}
