import React, { useState } from 'react';
import './App.css';

const About = () => (
  <div>
    <p>
    Empresa LAS Peñitas SAS es una reconocida empresa especializada en ofrecer soluciones empresariales integrales
     para diversas industrias. Nos destacamos por nuestra amplia experiencia y nuestro enfoque centrado en el cliente. 
     Nuestro objetivo principal es brindar resultados excepcionales a nuestros clientes, ayudándolos a alcanzar el éxito
    y el crecimiento sostenible.En Empresa LAS Peñitas SAS, nos esforzamos por ser líderes en el mercado, superando constantemente las expectativas 
    y construyendo relaciones sólidas y duraderas con nuestros clientes.</p>
  </div>
);

const Mission = () => (
  <div>
    <p>
    Misión: Nuestra misión en Empresa LAS Peñitas SAS es proporcionar soluciones empresariales innovadoras y de alta calidad
     que impulsen el desarrollo y el crecimiento de nuestros clientes. Nos comprometemos a brindar servicios confiables y 
     personalizados que mejoren la eficiencia operativa, impulsen la rentabilidad y generen ventajas competitivas para nuestros
      clientes.<br />
       Visión:En Empresa LAS Peñitas SAS, nuestra visión es ser reconocidos como el socio preferido de nuestros clientes, destacándonos
 por nuestra excelencia, nuestra capacidad de innovación y nuestra entrega constante de resultados superiores.</p>
  </div>
);

const Contact = () => (
  <div>
    <p>
    Estamos a tu disposición para responder cualquier consulta, ofrecer asesoramiento o discutir cómo podemos ayudarte a alcanzar tus objetivos empresariales. Puedes comunicarte con nosotros a través de los siguientes canales:

Teléfono: +XX XXX XXX XXXX
Correo electrónico: info@laspentitassas.com
Visita nuestras oficinas principales en la siguiente dirección:
Calle Principal, Ciudad, País

No dudes en contactarnos y explorar cómo podemos colaborar juntos para impulsar el éxito de tu empresa. En Empresa LAS Peñitas SAS, estamos comprometidos con tu crecimiento y estamos listos para ofrecerte soluciones empresariales sólidas y efectivas.    </p>
  </div>
);

const App = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  const toggleMission = () => {
    setMissionOpen(!missionOpen);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>LAS Peñitas SAS</h1>
          <h2>CLASE PROGRAMACIÓN WEB</h2>
        </div>
        <div className="content">
          <div className={`column ${aboutOpen ? 'open' : ''}`} onClick={toggleAbout}>
            <h3>Acerca de nosotros</h3>
            {aboutOpen && <About />}
          </div>
          <div className={`column ${missionOpen ? 'open' : ''}`} onClick={toggleMission}>
            <h3>Misión y visión de la compañía</h3>
            {missionOpen && <Mission />}
          </div>
          <div className={`column ${contactOpen ? 'open' : ''}`} onClick={toggleContact}>
            <h3>Contáctenos</h3>
            {contactOpen && <Contact />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
