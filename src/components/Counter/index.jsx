import React, { useEffect, useState } from 'react';

function ContadorAnimado({ valorFinal, duracao = 2000, start }) {
  const [contador, setContador] = useState(valorFinal); // Começa com o valor final

  useEffect(() => {
    if (!start) return; // Se `start` for false, não inicia a contagem

    setContador(0); // Define como 0 ao iniciar a contagem
    const incremento = valorFinal / (duracao / 10); // Incremento a cada 10ms

    const interval = setInterval(() => {
      setContador(prev => {
        const novoValor = prev + incremento;
        if (novoValor >= valorFinal) {
          clearInterval(interval); // Para ao atingir o valor final
          return valorFinal;
        }
        return novoValor;
      });
    }, 10);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [valorFinal, duracao, start]);

  return <h1>{Math.floor(contador)}</h1>;
}

export function Counter() {
  const [contadorAtivo, setContadorAtivo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContadorAtivo(prev => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ContadorAnimado valorFinal={9750} duracao={2000} start={contadorAtivo === 0} />
      <ContadorAnimado valorFinal={2800} duracao={2000} start={contadorAtivo === 1} />
      <ContadorAnimado valorFinal={5700} duracao={2000} start={contadorAtivo === 2} />
      <ContadorAnimado valorFinal={6400} duracao={2000} start={contadorAtivo === 3} />
    </div>
  );
}
