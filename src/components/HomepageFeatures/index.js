import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate'; 
import { useColorMode } from '@docusaurus/theme-common';
import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


const FeatureList = [
  {
    title: <Translate>Monitoramento com IA</Translate>,
    imgSrc: 'img/iconIA.png',
    description: (
      <Translate>Rapidez na execução e funcionalidades</Translate>
    ),
  },
  {
    title: <Translate>Gráficos em Tempo Real</Translate>,
    imgSrc: 'img/iconGrafico.png',
    description: (
      <Translate>Informações na palma da sua mão</Translate>
    ),
  },
  {
    title: <Translate>Facilidade com ChatBot</Translate>,
    imgSrc: 'img/iconChatbot.png',
    description: (
      <Translate>Interatividade nas aplicações</Translate>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.beneficios}>
        <div className="text--center">
          <img src={imgSrc} className={styles.featureImg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

const abrirOutlook = (destinatario) => {
  if (ExecutionEnvironment.canUseDOM) {
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(destinatario)}`;
    window.open(outlookUrl);
  }
};

function LineContatoIcon() {
  const [iconSrc, setIconSrc] = useState('');
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const isEnglish = window.location.pathname.includes('/en/');
      const src = `${isEnglish ? '/en' : ''}${
        colorMode === 'dark' ? '/img/LineContato.svg' : '/img/LineContato_dark.svg'
      }`;
      setIconSrc(src);
    }
  }, [colorMode]);

  return <img src={iconSrc} className="line-contato" alt="Ícone Line Contato" />;
}

function LinkedinIcon() {
  const [iconSrc, setIconSrc] = useState('');
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const isEnglish = window.location.pathname.includes('/en/');
      const src = `${isEnglish ? '/en' : ''}${
        colorMode === 'dark' ? '/img/linkedin.svg' : '/img/linkedin_dark.svg'
      }`;
      setIconSrc(src);
    }
  }, [colorMode]);

  return <img src={iconSrc} className="line-contato" alt="Ícone LinkedIn" />;
}

function ContatoIcon({ onClick }) {
  const [iconSrc, setIconSrc] = useState('');
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const isEnglish = window.location.pathname.includes('/en/');
      const src = `${isEnglish ? '/en' : ''}${
        colorMode === 'dark' ? '/img/email.svg' : '/img/email_dark.svg'
      }`;
      setIconSrc(src);
    }
  }, [colorMode]);

  return (
    <img
      src={iconSrc}
      alt="Ícone de Contato"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  );
}


export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.project}>
        <div className={styles.box}>
          <div className={styles.imagens}>
            <img src="img/selo.svg" className={styles.selo}></img>
            <img src="img/imagem1.svg" alt="Imagem" className={styles.imagem1} />
            <img src="img/imagem1.svg" alt="Imagem" className={styles.imagem2} />
          </div>
          <div className={styles.tecnologia}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2 className={styles.titulo}><Translate>Tecnologia</Translate></h2>
              <p className={styles.subtitulo}><Translate>otimiza!</Translate></p>
            </div>
            <p className={styles.conteudoTexto}>
              <Translate>
              O HAPPDINE iniciou com uma ideia proposta em janeiro de 2024 na 6ª edição do HACKATHON, evento interno de sete dias realizado pela CaP/ETS, Engineering Technical School, onde recebeu a premiação de primeiro lugar. O projeto foi estruturado e construído como uma solução inovadora desenvolvida através da colaboração entre o programa Digital Talent Academy (DTA) e o curso Técnico em Desenvolvimento de Sistemas do SENAI “Roberto Mange”. A plataforma foi construída para otimizar e modernizar os processos operacionais do restaurante corporativo da Bosch de Campinas, oferecendo uma abordagem integrada para os diversos desafios de gestão do estabelecimento.
              </Translate>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className={styles.container}>
            <img src="img/linhaPequena.svg" alt="linha" className={styles.linhaPequena} />
            <h2 className={styles.titulo}>
              <Translate>Benefícios</Translate>
            </h2>
            <img src="img/linhaPequena.svg" alt="linha" className={styles.linhaPequena} />
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sobreNos} id="sobre-nos">
        <div className="container">
          <div className="row">
            <img src="img/linhaGrande.svg" alt="linha" className={styles.linhaGrande}/>
            <div className={styles.sobreNos}>
              <h2 className={styles.titulo}><Translate>SOBRE</Translate></h2>
              <h2 className={styles.titulo}><Translate>NÓS</Translate></h2>
              <img src="img/linhaPequena.svg" alt="linha" className={styles.linhaPequena}/> 
            </div>
        
              <div className={styles.integrante}>
                <img src="img/Adam.png" className={styles.imagemIntegrante}/>
                <p style={{ marginBottom: '10px' }}>Adailton Filho</p>
                <div className={styles.contato}>
                  <a href="https://www.linkedin.com/in/adailton-filho-85804428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                  </a>
                    
                  <LineContatoIcon />
                
                  <ContatoIcon  
                    onClick={() => abrirOutlook("adailton.silvafilho@br.bosch.com")} 
                  />
                </div>
              </div>
              <div className={styles.integrante}>
                <img src="img/Bia.png" className={styles.imagemIntegrante}/>
                <p style={{ marginBottom: '10px' }}>Ana Beatriz Torrecilas</p>
                <div className={styles.contato}>
                  <a href="https://www.linkedin.com/in/ana-beatriz-n-torrecilas-a32160291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                  </a>
                  <LineContatoIcon />
                  <ContatoIcon 
                    onClick={() => abrirOutlook("campinas.ets@br.bosch.com")} 
                  />
                </div>
              </div>
              <div className={styles.integrante}>
                <img src="img/IsaP.png" className={styles.imagemIntegrante}/>
                <p style={{ marginBottom: '10px' }}>Isabela Pereira</p>
                <div className={styles.contato}>
                  <a href="https://www.linkedin.com/in/isabela-leite-80236a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                  </a>
                  <LineContatoIcon />
                  <ContatoIcon 
                    onClick={() => abrirOutlook("isabela.leite@br.bosch.com")} 
                  />
                </div>
              </div>
              <div className={styles.integrante}>
                <img src="img/IsaR.png" className={styles.imagemIntegrante}/>
                <p style={{ marginBottom: '10px' }}>Isabela Rocha</p>
                <div className={styles.contato}>
                  <a href="https://www.linkedin.com/in/isabela-rocha-ba0a49216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                  </a>
                  <LineContatoIcon />
                  <ContatoIcon 
                    onClick={() => abrirOutlook("campinas.ets@br.bosch.com")} 
                  />
                </div>
              </div>
              <div className={styles.integrante}>
                <img src="img/Joao.png" className={styles.imagemIntegrante}/>
                <p style={{ marginBottom: '10px' }}>João Goulart</p>
                <div className={styles.contato}>
                  <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-de-souza-goulart-4517432b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                  </a>
                  <LineContatoIcon />
                  <ContatoIcon 
                    onClick={() => abrirOutlook("joao.goulart@br.bosch.com")} 
                  />
                </div>
              </div>
              <div className={styles.integrante}>
                <img src="img/Murilo.png" className={styles.imagemIntegrante}/>
                <p style={{ marginBottom: '10px' }}>Murilo Santos</p>
                <div className={styles.contato}>
                  <a href="https://www.linkedin.com/in/murilo-silva-dos-santos-149a02212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                  </a>
                  <LineContatoIcon />
                  <ContatoIcon
                    onClick={() => abrirOutlook("murilo.santos2@br.bosch.com")} 
                  />
                </div>
              </div>
              <div className={styles.integrante}>
                <img src="img/Sara.png" className={styles.imagemIntegrante}/>
                <p style={{ marginBottom: '10px' }}>Sara de Oliveira</p>
                <div className={styles.contato}>
                  <a href="https://www.linkedin.com/in/sara-oliveira-fernandes-1689a3260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                  </a>
                  <LineContatoIcon />
                  <ContatoIcon
                    onClick={() => abrirOutlook("sara.fernandes@br.bosch.com")} 
                  />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
