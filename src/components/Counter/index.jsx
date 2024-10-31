import { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import { Plus } from '@phosphor-icons/react'

// Componente que realiza uma contagem animada
function ContadorAnimado({ valorFinal, duracao = 2000, start }) {
  // Estado para armazenar o valor atual do contador, inicializado com valorFinal
  const [contador, setContador] = useState(valorFinal);

  useEffect(() => {
    // Se start for false, não inicia a contagem
    if (!start) return;

    // Reinicia o contador para 0 quando a contagem começa
    setContador(0);
    // Calcula o incremento com base no valor final e na duração da contagem
    const incremento = valorFinal / (duracao / 10); // Incrementa a cada 10ms

    // Cria um intervalo que atualiza o contador
    const interval = setInterval(() => {
      setContador(prev => {
        // Calcula o novo valor do contador
        const novoValor = prev + incremento;
        // Se o novo valor alcançar ou ultrapassar o valor final
        if (novoValor >= valorFinal) {
          clearInterval(interval); // Para o intervalo
          return valorFinal; // Retorna o valor final
        }
        return novoValor; // Retorna o novo valor do contador
      });
    }, 10); // Atualiza a cada 10ms

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [valorFinal, duracao, start]); // Executa o efeito quando valorFinal, duracao ou start mudam

  // Renderiza o contador arredondado para baixo
  return <h1>{Math.floor(contador)}</h1>;
}

// Componente que controla a sequência de contadores animados
export function Counter() {
  // Estado que armazena qual contador está ativo
  const [contadorAtivo, setContadorAtivo] = useState(0);

  useEffect(() => {
    // Cria um intervalo que incrementa contadorAtivo a cada 2.5 segundos
    const interval = setInterval(() => {
      setContadorAtivo(prev => prev + 1);
    }, 1200);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []); // Executa uma vez ao montar o componente

  return (
    <Container>
      <Content>
        <div>
          <h4>
            <ContadorAnimado valorFinal={9750} duracao={1000} start={contadorAtivo === 0} />             
            <span>
              <Plus size={32}/>
            </span>
          </h4>
          <p>Clientes Satisfeitos</p>
        </div>

        <div>
          <h4>
            <ContadorAnimado valorFinal={2800} duracao={1000} start={contadorAtivo === 1} />
          </h4>
          <p>Pratos Feitos</p>
        </div>

        <div>
          <h4>
            <ContadorAnimado valorFinal={5700} duracao={1000} start={contadorAtivo === 2} /> 
            <span>
              <Plus size={32} />
            </span>
          </h4>
          <p>Fãs de mídia social</p>
        </div>

        <div>
          <h4>
            <ContadorAnimado valorFinal={6400} duracao={2000} start={contadorAtivo === 3} />
          </h4>
          <p>Horas trabalhadas</p>
        </div>

      </Content>
    </Container>
  );
}
