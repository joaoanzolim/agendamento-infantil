import { CalendarDays, Baby, CreditCard } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <CalendarDays size={32} />,
      title: '1. Escolha o dia',
      description: 'Veja nossa disponibilidade de vagas e selecione o horário ideal para você.'
    },
    {
      icon: <Baby size={32} />,
      title: '2. Selecione a criança',
      description: 'Cadastre os dados, idades e observações importantes sobre seu filho(a).'
    },
    {
      icon: <CreditCard size={32} />,
      title: '3. Confirme e pague',
      description: 'Pagamento rápido, seguro e automático via PIX ou Cartão em instantes.'
    }
  ];

  return (
    <section className="how-it-works-section" id="agendamentos">
      <div className="section-header">
        <h2>Como funciona?</h2>
        <p>Um fluxo simples em 3 passos para garantir o melhor horário para você.</p>
      </div>
      
      <div className="steps-container">
        {steps.map((step, idx) => (
          <div key={idx} className="step-item">
            <div className="step-icon">
              {step.icon}
            </div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {idx < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
