import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate'; 

const FeatureList = [
  {
    title: <Translate>Monitoramento com IA</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>Rapidez na execução e funcionalidades</Translate>
    ),
  },
  {
    title: <Translate>Gráficos em Tempo Real</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>Informações na palma da sua mão</Translate>
    ),
  },
  {
    title: <Translate>Facilidade com ChatBot</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>Interatividade nas aplicações</Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sobreNos}>
        <div className="container">
          <div className="row">
            <div>
              <h2>
                <Translate>Sobre Nós</Translate>
              </h2>
              <p>
                <Translate>
                  O HAPPDINE iniciou com uma ideia proposta em janeiro de 2024 na 6ª edição do HACKATHON, evento interno de sete dias realizado pela CaP/ETS (Engineering Technical School), onde recebeu a premiação de primeiro lugar. O projeto foi estruturado e, visando implementação na planta de Campinas, o HAPPDINE é desenvolvido como TCC para o terceiro semestre do curso de Desenvolvimento de Sistemas com SENAI e Bosch. Formados por integrantes de Digital Solutions das turmas 08, 09 e 10, o HAPPDINE é composto por 7 desenvolvedores: Adailton da Silva Filho, Ana Beatriz Nardy Torrecilas, Isabela Pereira Leite, Isabela Rocha dos Santos, João Vitor de Souza Goulart, Murilo Silva dos Santos e Sara de Oliveira Fernandes.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
