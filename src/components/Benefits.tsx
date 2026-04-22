import { ShieldCheck, Clock, Users, HeartHandshake } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Segurança Máxima',
      description: 'Ambiente controlado, protocolos rigorosos e identificação de retidas seguras.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Tempo Flexível',
      description: 'Escolha pacotes mensais, semanais ou até mesmo diárias por hora conforme precisar.'
    },
    {
      icon: <Users size={32} />,
      title: 'Equipe Qualificada',
      description: 'Monitoras treinadas, pedagogas e profissionais apaixonados pelo que fazem.'
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Acolhimento Real',
      description: 'Respeito ao tempo e à individualidade de cada criança de forma afetuosa.'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="section-header">
        <h2>Por que as mães confiam na gente?</h2>
        <p>A tranquilidade que você precisa com o cuidado que eles merecem.</p>
      </div>
      
      <div className="benefits-grid">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="benefit-card">
            <div className="benefit-icon-wrapper">
              {benefit.icon}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
