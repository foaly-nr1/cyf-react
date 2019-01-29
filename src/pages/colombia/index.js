// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

import TopSection from '../../components/top-section';
import colombiaFlyer from '../../assets/images/cyf-colombia-flyer.jpg';
import colombiaLogo from '../../assets/images/cyf-colombia-logo.png';

const studentLink = 'https://airtable.com/shr8vflbZQkh5hAe4';
const volunteerLink = 'https://airtable.com/shroNkIefDJfFksXa';

const StyledLink = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-color: #2ba560;
`;

const Buttons = styled('div')`
  display: flex;
  justify-content: space-around;
`;

const InfoBox = ({ className, title, items }) => (
  <div className={className}>
    <p>
      <ul>
        <h3>{title}</h3>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </p>
  </div>
);

const FAQ = ({ question, answer }) => (
  <div>
    <div>
      <b>{question} </b>
    </div>
    <div> {answer} </div>
  </div>
);

const listFaq = [
  {
    question: '¿ Realizar el curso tiene algun costo?',
    answer:
      'NO, solo requieren que realices los pasos para postularte y esperar el proceso de selección',
  },
  {
    question: '¿Debo saber sobre programación de software para aplicar?',
    answer:
      'NO, los aplicantes hacen un proceso de 5 pasos y con estos pasos adquirirán conocimientos básicos con los que tendrán idea de que se trata el curso y que van a aprender.',
  },
  {
    question: '¿Soy menor de edad puedo aplicar?',
    answer:
      'NO, nos enfocamos en edades de 18 en adelante sin embargo existen fundaciones como coderise que trabajan con chicos de ……',
  },
  {
    question: '¿Que incluye la beca?',
    answer: (
      <ul>
        <li>
          6 meses GRATIS curso profesional por desarrollador web full-stack.
        </li>
        <li>Entrenamiento para ser desarrollador junior web.</li>
        <li>Tutoría de desarrolladores profesionales de la comunidad local.</li>
        <li>Clases en vivo en los fines de semanas.</li>
        <li>Clases por Internet durante la semana.</li>
        <li>Apoyo en conseguir tu primer trabajo como desarrollador.</li>
        <li>
          Una oportunidad de estudiar juntos con estudiantes por todo el mundo!
        </li>
      </ul>
    ),
  },
  {
    question: '¿ la fundación entregará un certificado por este curso?',
    answer:
      'La fundación entregará una certificación por asistir al curso es decir certificado de participación.',
  },
];

const ColombiaText = (
  <div className="section-container">
    <InfoBox
      className="text-left"
      title="¿Quienes somos?"
      items={[
        'La iniciativa surge de la fundación Code your Future Inglaterra la cual ya está creada hace varios años en londres y que se dedica a ayudar a refugiados para que aprendan desarrollo de software y luego esto se vuelva una fuente de trabajo para ellos.',
        'En colombia queremos llegar a las personas que más necesitan nuestro apoya brindándoles la oportunidad de aprender desarrollo de software y debido que en este país no existen las mismas problemáticas nos enfocamos en personas que por su propia cuenta no tienen la posibilidad de acceder a una carrera universitaria',
      ]}
    />

    <Buttons>
      <StyledLink
        href={studentLink}
        className="big-link-3 button btn green-text"
      >
        Quiero ser estudiante
      </StyledLink>

      <StyledLink
        href={volunteerLink}
        className="big-link-3 button btn green-text"
      >
        Quiero ser voluntario
      </StyledLink>
    </Buttons>

    <InfoBox
      className="text-left"
      title="Lenguajes de programación que se ensañarán"
      items={['JavaScript (React.js)', 'HTML', 'CSS']}
    />

    <InfoBox
      className="text-left"
      title="Preguntas frecuentes"
      items={listFaq.map(({ question, answer }, i) => (
        <FAQ question={question} answer={answer} key={i} />
      ))}
    />

    <InfoBox
      className="text-left"
      title="Tutores"
      items={[
        'Los tutores son personas profesionales en esta área desarrolladores de software que tienen años trabajando en empresas de este medio y que aportan su tiempo y conocimiento para esta buena causa.',
      ]}
    />

    <InfoBox
      className="text-left"
      title="Voluntarios"
      items={[
        'Tenemos voluntarios de todas partes de Colombia y el mundo que conocen el proyecto y saben que vale la pena apostar para contribuir un poco de lo que ellos han recibido, estos son algunos de ellos.',
      ]}
    />

    <InfoBox
      className="text-left"
      title="Patrocinadores"
      items={[
        'Yuxy global',
        'Endava',
        'Biblioteca pública de San Javier',
        'Banco de Alimentos',
        'EPM',
      ]}
    />
  </div>
);

const Colombia = () => (
  <main>
    <TopSection title="Code Your Future Colombia" content={ColombiaText} />
  </main>
);

export default Colombia;
