import { Ticket, PartyPopper } from 'lucide-react';

export default function EventsPreview() {
  const events = [
    {
      type: 'Especial',
      title: 'Vale Night - Sexta dos Pais',
      age: '2 a 5 anos',
      time: '19h às 23h',
      tagIcon: <Ticket size={16} />
    },
    {
      type: 'Oficina',
      title: 'Pintura Artística e Slime',
      age: 'Todas as idades',
      time: 'Sábados, 14h às 16h',
      tagIcon: <PartyPopper size={16} />
    }
  ];

  return (
    <section className="events-section" id="eventos">
      <div className="events-wrapper">
        <div className="events-text">
          <h2>Mais do que um espaço, criamos memórias especiais</h2>
          <p>Conheça nossos eventos super divertidos e oficinas criativas programadas para este mês.</p>
          <button className="btn-primary">Ver calendário completo</button>
        </div>
        
        <div className="events-list">
          {events.map((event, idx) => (
            <div key={idx} className="event-card">
              <div className="event-header">
                <span className="event-type">
                  {event.tagIcon} {event.type}
                </span>
              </div>
              <h3>{event.title}</h3>
              <div className="event-details">
                <span><strong>Idade:</strong> {event.age}</span>
                <span><strong>Horário:</strong> {event.time}</span>
              </div>
              <button className="btn-outline">Reservar vaga</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
