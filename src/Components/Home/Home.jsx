import React, { useRef } from "react";

//Importe de estilo

import styles from "./Home.module.css";

//Importe imagens

import NewLogo from "../../assets/Name Azul.png";
import LogoB from "../../assets/Name branco.png";
import Personagem from "../../assets/Personagem.png";
import MockupPerfil from "../../assets/Mockup1.png";
import MockupRede from "../../assets/Mockup.png";
import Premium from "../../assets/Premium.png";
import MockupWork from "../../assets/MockupWork.png";
import Interrogação from "../../assets/inter.png";
import Video from "../../assets/MockupVideo.png";
import WhatsApp from "../../assets/Whats.Vector.png";
import Instagram from "../../assets/Insta.Vector.png";
import Twitter from "../../assets/TT.Vector.png";
import ServiceCo from "../../assets/ServiceCo.png";
import EmailIconB from "../../assets/EmailIconB.png";
import WhatsIconB from "../../assets/WhatsIconB.png";
import meuPenis from "../../assets/PlayIcon.png";
import Redes from "../../assets/Redes.png";
import Apps from "../../assets/Apps.png";
import Homem from "../../assets/Homem.png";
import Mulher from "../../assets/Mulher.png";
import HomemMobile from "../../assets/Homem2.png";
import MulherMobile from "../../assets/Mulher2.png";
import Azul from "../../assets/Azul.png";
import Branco from "../../assets/Branco.png";
import Aspas from "../../assets/Aspas.png";
import Grupo from "../../assets/Grupo.png";
import LogoIcon from "../../assets/LogoIcon.png";

function Home() {

  const inicio = useRef();
  function scrollTo(ref) {
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  }

  const sobre = useRef();
  function scrollTo(ref) {
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  }

  return (
    <div /* Princiapl */ className={styles.PrincipalContainer}>
      {/* My Service */}

      <div ref={inicio} className={styles.Header}>
        <div onClick={() => scrollTo(inicio)} className={styles.LogoContainer}>
          <img src={NewLogo} />
        </div>
      </div>
      <div className={styles.MyService}>
        <h1>
          <span className={styles.Blue}>
            Aprimore a promoção dos seus produtos ou serviços usando o nosso
            aplicativo
          </span>
          <span className={styles.Black}>!</span>
        </h1>
      </div>
      <div className={styles.Oque}>
        <h4>
          Com os nossos aplicativos, você pode divulgar seus produtos, serviços,
          contratar ou comprar de maneira rápida e fácil.
        </h4>
      </div>

      {/* Conhaça um pouco sobre nos */}

      <div className={styles.ConhecaContainer}>
        <div className={styles.ConhecaNos}>
          <h1>
            <span className={styles.Blue}>
              Conheça-nos e mergulhe em uma experiência única de qualidade
            </span>
            <span className={styles.Black}>.</span>
          </h1>
        </div>
        <div className={styles.ParaOb}>
          <h4>
            Para obter mais informações sobre nós e compreender nossa essência,
            clique no botão abaixo e descubra quem somos e por que estamos
            dedicados a esse tema.
          </h4>
        </div>
        <button onClick={() => scrollTo(sobre)} className={styles.SaibaMais}>
          Saiba mais
        </button>
      </div>

      <div className={styles.FigureContainer} />
      <div className={styles.FigureAzul} />
      <div className={styles.FigureAzulC} />
      <img src={Azul} className={styles.AzulContainer} />
      <img src={Branco} className={styles.BrancoContainer} />
      <div className={styles.Quadrado} />

      {/* Baixe o nosso aplicativo*/}

      <div className={styles.BaixeContainner}>
        <div className={styles.BaixeOApp}>
          <h1>
            Baixe o nosso aplicativo agora e tenha acesso a uma experiência
            incrível!
          </h1>
        </div>
        <div className={styles.InformacaoDoApp}>
          <h5>
            O My Service é uma plataforma de conexão entre clientes e
            profissionais qualificados. Os clientes podem se cadastrar,
            contratar serviços e compartilhar suas experiências. Os
            trabalhadores podem mostrar seus trabalhos e encontrar novas
            oportunidades. O objetivo é facilitar a conexão entre quem precisa
            de serviços e quem pode oferecê-los.
          </h5>
        </div>
        <div className={styles.Baixe}>
          <h4>Faça o download do nosso aplicativo</h4>
        </div>
        <button className={styles.CliqueAquiUser}>Clique aqui</button>
      </div>
      <div className={styles.MulherContainer}>
        <div className={styles.Mulher}>
        <img src={Mulher}/>
        </div>
        <div className={styles.BackgroundMulher}/>
      </div>

      {/* My Service Work*/}

      <div className={styles.WorkContainer}>
        <div className={styles.BaixeOWork}>
          <h1>
            Baixe agora mesmo o aplicativo Work e aproveite todos os benefícios
            que ele oferece!!
          </h1>
        </div>
        <div className={styles.InformacaoDoWork}>
          <h5>
            O My Service Work é uma plataforma que oferece estatísticas
            importantes, como faturamento e feedback dos clientes, para
            fornecedores. Essas informações ajudam a monitorar o desempenho,
            avaliar a satisfação dos clientes e tomar decisões estratégicas. É
            uma ferramenta eficaz para gerenciar e expandir a atividade
            profissional com eficiência.
          </h5>
        </div>
        <div className={styles.BaixeWork}>
          <h4>Obtenha o nosso aplicativo Work</h4>
        </div>
        <button className={styles.CliqueAquiWork}>Clique aqui</button>
      </div>
      <div className={styles.HoemmContainer}>
        <div className={styles.Homem}>
        <img src={Homem}/>
        </div>
        <div className={styles.BackgroundHomem}/>
      </div>

      {/* Premium*/}

      <div className={styles.PremiumContainer}>
        <div className={styles.Aproveite}>
          <h1>
            Aproveite o acesso aos nossos planos premium e desfrute de
            benefícios exclusivos.
          </h1>
        </div>
        <div className={styles.InformacaoPremium}>
          <h5>
            Oferecemos três planos premium exclusivos para os fornecedores de
            serviços: Bronze, Prata e Diamante. Cada plano tem características e
            benefícios distintos. Veja abaixo os detalhes de cada um deles:
          </h5>
        </div>
        <div className={styles.PremiumImg}>
          <img src={Premium} className={styles.PremiumI} />
        </div>
        <div classname={styles.InformacaoPacotes}>
          <div className={styles.Bronze}>
            <img src={Aspas} className={styles.Aspas1} />
            <h1>
              Plano Bronze: Por apenas 9,99/mês, você terá acesso a recursos
              adicionais que vão impulsionar o seu perfil e ajudar a expandir
              sua visibilidade na plataforma.
            </h1>
          </div>
          <div className={styles.Prata}>
            <img src={Aspas} className={styles.Aspas2} />
            <h1>
              Plano Prata: Ao investir 24,99/mês no Plano Prata, você terá
              acesso a benefícios ainda mais abrangentes, incluindo destaque em
              buscas, avaliações aprimoradas e maior visibilidade para atrair
              mais clientes.
            </h1>
          </div>
          <div className={styles.Diamante}>
            <img src={Aspas} className={styles.Aspas3} />
            <h1>
              O Plano Diamante é um pacote premium que oferece vantagens extras,
              como destaque nos resultados de busca, posicionamento privilegiado
              e suporte prioritário, por um valor mensal de 79,99. É uma opção
              completa para impulsionar seus negócios.
            </h1>
          </div>
          <div className={styles.Escolha}>
            <h3>
              Escolha o plano premium que melhor se adequa às suas necessidades
              e aproveite ao máximo todos os recursos e vantagens que ele
              oferece para impulsionar o seu negócio.
            </h3>
          </div>
        </div>
      </div>

      {/* Saiba mais */}

      <div className={styles.SaibaContainer}>
        <div className={styles.GrupoContainer}>
          <img src={Grupo} />
        </div>
        <div className={styles.SaibaSobre} ref={sobre}>
          <h1>
            Descubra quem somos e quais são os nossos
            <span className={styles.Blue}> objetivos. </span>
          </h1>
        </div>
        <div className={styles.QuemSomos}>
          <div className={styles.Somos}>
            <h5>
              Somos um grupo de desenvolvedores
              <span className={styles.Blue2}> juniores </span>
              apaixonados por tecnologia.
            </h5>
          </div>
          <div className={styles.Missao}>
            <h5>
              Nossa missão é criar soluções inovadoras para ajudar as pessoas a
              promoverem seus serviços e conectar-se. Desenvolvemos um
              <span className={styles.Blue2}> aplicativo </span>e um
              <span className={styles.Blue2}> site </span>
              completos com recursos abrangentes, incluindo perfis
              personalizados, pesquisa avançada e sistema de avaliações.
            </h5>
          </div>
          <div className={styles.Objetivo}>
            <h5>
              <span className={styles.Blue2}>
                Nosso objetivo é oferecer excelência e ajudar os usuários a
                expandirem seus negócios por meio de nossa plataforma.
              </span>
            </h5>
          </div>
        </div>
      </div>

      {/*  O porq esccolhemos este tema */}

      <div className={styles.PorqContainer}>
        <div className={styles.Background} />
        <div className={styles.OPorque}>
          <h1>
            Quais foram os motivos que nos levaram a escolher esse tema em
            particular?
          </h1>
        </div>
        <div className={styles.EscolhemosEste}>
          <div className={styles.Escolhemos}>
            <h4>
              O My Service é uma plataforma inovadora que soluciona as
              dificuldades dos profissionais autônomos na busca por serviços.
              Com recursos como visualização de imagens e avaliações, os
              clientes podem contratar autônomos cadastrados de forma informada.
            </h4>
          </div>
          <div className={styles.Autonomos}>
            <h4>
              Os autônomos têm a oportunidade de criar perfis detalhados,
              destacando suas habilidades e compartilhando projetos anteriores.
              Nosso objetivo é facilitar a conexão entre autônomos e clientes,
              oferecendo uma experiência completa e confiável.
            </h4>
          </div>
        </div>
      </div>

      {/*  Sobre a nossa rede social */}

      <div className={styles.RedeContainer}>
        <div className={styles.Figure} />
        <div className={styles.RedesSociais}>
          <img src={Redes}  className={styles.RedesS} />
        </div>
        <div className={styles.ExploreNaRede}>
          <h1>
            Explore nosso universo nas redes sociais e descubra tudo sobre nós
            <span className={styles.Blue2}>.</span>
          </h1>
          <h2>
            Venha nos conhecer de perto
            <span className={styles.Blue2}>!!</span>
          </h2>
        </div>
      </div>

      {/* Participantes do Projeto */}

      <div className={styles.MyServiceExplication}>
        <div className={styles.BackgroundCinza} />
        <div className={styles.QuemE}>
          <h1>
            Quem Somos<span className={styles.Blue2}>?</span>
          </h1>
        </div>
        <div className={styles.Biografia}>
          <div className={styles.Camily}>
            <img src={Aspas} className={styles.Aspas4} />
            <h1>Camily Nasciemnto:</h1>
            <h4>
              A Camily foi a nossa coordenadora e líder durante o processo desse
              projeto.
              <span className={styles.Black}>
                {" "}
                Ela também contribuiu com a parte do back-end e auxiliou no
                front-end.
              </span>
            </h4>
          </div>
          <div className={styles.Emerson}>
            <img src={Aspas} className={styles.Aspas5} />
            <h1>Emerson Santos:</h1>
            <h4>
              O Emerson foi o nosso designer e foi responsável por toda a
              prototipação dos nossos aplicativos e do nosso site.
              <span className={styles.Black}>
                {" "}
                Além disso, ele também cuidou do front-end do site.
              </span>
            </h4>
          </div>
          <div className={styles.Joao}>
            <img src={Aspas} className={styles.Aspas6} />
            <h1>João Pedro Martins:</h1>
            <h4>
              O João foi responsável pela parte do back-end e{" "}
              <span className={styles.Black}>
                também auxiliou com o front-end dos aplicativos.
              </span>
            </h4>
          </div>
          <div className={styles.Jose}>
            <img src={Aspas} className={styles.Aspas7} />
            <h1>José Vinícius:</h1>
            <h4>
              O José foi nosso sublíder e também atuou como front-end nos
              aplicativos.
              <span className={styles.Black}>
                Além disso, ele contribuiu no desenvolvimento da API e no Banco
                de Dados dos nossos projetos.
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div /* Footer */ className={styles.FooterContainer}>
        <footer className={styles.Footer}>
          <div className={styles.LogoBContainer}>
            <img src={LogoB} />
          </div>
          <div className={styles.Informacoes}>
            <li>Brasil</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
            <li>© 2022 My Service.</li>
          </div>
          <div className={styles.Entre}>
            <h6>Entre em contato conosco</h6>
          </div>
          <div className={styles.Redes}>
            <a
              href="https://chat.whatsapp.com/DrW7HV2xb7eJDH5WFhYQdK"
              target="_blank"
              className={styles.WhatsApp}
            >
              <span></span>
              <img src={WhatsApp} />
            </a>
            <a
              href="https://instagram.com/my.service_?igshid=ZWQyN2ExYTkwZQ=="
              target="_blank"
              className={styles.Instagram}
            >
              <span></span>
              <img src={Instagram} />
            </a>
            <a
              href="https://twitter.com/_myservice?s=11"
              target="_blank"
              className={styles.Twitter}
            >
              <span></span>
              <img src={Twitter} />
            </a>
          </div>
          
          <div className={styles.Service}>
            <img src={ServiceCo} />
          </div>
          <div className={styles.Contatos}>
            <div className={styles.EmailIcon}>
              <img src={EmailIconB} />
            </div>
            <div className={styles.Email}>
              <li>servicemy@outlook.com</li>
            </div>
          </div>
          <div className={styles.Direitos}>
            <li>© 2023 My Service.Todos os direitos reservados.</li>
          </div>
          <div className={styles.BackgrounFooter}></div>
          <div className={styles.BackgroundRodaPe}></div>
        </footer>
      </div>
    </div>
  );
}
export default Home;