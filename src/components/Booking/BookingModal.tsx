import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, Package, Moon, Star, ArrowRight, ArrowLeft, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

interface BookingData {
  serviceId: string | null;
  date: string | null;
  endDate: string | null;
  timeSlot: string | null;
  startTime: string;
  duration: number;
  childName: string;
  childAgeProfile: string;
  foodRestrictions: string;
  emergencyContact: string;
  emergencyPhone: string;
  photoUploaded: boolean;
}

const SERVICES = [
  {
    id: 'pacote_mensal',
    title: 'Pacote Mensal',
    desc: 'Dias flexíveis na semana para uso recorrente',
    icon: <Package size={24} />,
    color: 'var(--color-green)'
  },
  {
    id: 'bloco_horas',
    title: 'Bloco de Horas',
    desc: 'Ex: 4 horas no período que precisar',
    icon: <Clock size={24} />,
    color: 'var(--color-blue)'
  },
  {
    id: 'oficina_sabado',
    title: 'Oficinas de Sábado',
    desc: 'Eventos temáticos limitados a 10 vagas',
    icon: <Star size={24} />,
    color: 'var(--color-yellow)'
  },
  {
    id: 'vale_night',
    title: 'Vale Night (Sextas/Sábados)',
    desc: 'Das 19h às 23h, mínimo 2 horas',
    icon: <Moon size={24} />,
    color: 'var(--color-pink)'
  }
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<BookingData>({
    serviceId: null,
    date: null,
    endDate: null,
    timeSlot: null,
    startTime: '09:00',
    duration: 2,
    childName: '',
    childAgeProfile: '',
    foodRestrictions: '',
    emergencyContact: '',
    emergencyPhone: '',
    photoUploaded: false
  });

  if (!isOpen) return null;

  const handleNext = () => setStep((s) => Math.min(s + 1, 5) as Step);
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const updateData = (updates: Partial<BookingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="step-title">Escolha a modalidade</h3>
            <p className="step-desc">Selecione o serviço ideal para sua rotina ou necessidade pontual.</p>
            <div className="services-grid">
              {SERVICES.map(srv => (
                <div
                  key={srv.id}
                  className={`service-card ${data.serviceId === srv.id ? 'selected' : ''}`}
                  onClick={() => updateData({ serviceId: srv.id })}
                >
                  <div className="service-icon" style={{ backgroundColor: srv.color }}>
                    {srv.icon}
                  </div>
                  <div>
                    <h4>{srv.title}</h4>
                    <p>{srv.desc}</p>
                  </div>
                  <div className="selection-indicator">
                    <ChevronRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        const isPacoteMensal = data.serviceId === 'pacote_mensal';
        const isBlocoHoras = data.serviceId === 'bloco_horas';
        const isFlexible = isPacoteMensal || isBlocoHoras;

        const formatTime = (time: string, hours: number) => {
          if (!time) return '';
          const [h] = time.split(':').map(Number);
          return `${String(h + hours).padStart(2, '0')}:00`;
        };

        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="step-title">Data e Horário</h3>
            <p className="step-desc">A administração trabalha com antecedência mínima de 2 dias.</p>

            <div className="datetime-selection">
              {isFlexible ? (
                <div className="form-grid">
                  <div className="input-group">
                    <label>Data de Início</label>
                    <div className="input-with-icon">
                      <CalendarIcon size={18} />
                      <input
                        type="date"
                        value={data.date || ''}
                        onChange={e => updateData({ date: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Data de Término</label>
                    <div className="input-with-icon">
                      <CalendarIcon size={18} />
                      <input
                        type="date"
                        value={data.endDate || ''}
                        onChange={e => updateData({ endDate: e.target.value })}
                        min={data.date || ''}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="input-group">
                  <label>Data Desejada</label>
                  <div className="input-with-icon">
                    <CalendarIcon size={18} />
                    <input
                      type="date"
                      value={data.date || ''}
                      onChange={e => updateData({ date: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {isFlexible ? (
                <>
                  <div className="form-grid">
                    <div className="input-group">
                      <label>Horário de Entrada</label>
                      <select
                        value={data.startTime}
                        onChange={e => updateData({ startTime: e.target.value })}
                      >
                        {Array.from({ length: 11 }, (_, i) => i + 8).map(h => {
                          const time = `${String(h).padStart(2, '0')}:00`;
                          return <option key={time} value={time}>{time}</option>;
                        })}
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Duração (Horas)</label>
                      <select
                        value={data.duration}
                        onChange={e => updateData({ duration: Number(e.target.value) })}
                      >
                        {[2, 3, 4, 5, 6].map(dur => (
                          <option key={dur} value={dur}>{dur} horas</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="time-slots">
                    <button className="time-slot-btn selected" style={{ cursor: 'default' }}>
                      Resumo do período: <strong>{data.startTime} até {formatTime(data.startTime, data.duration)}</strong>
                      <span className="availability" style={{ color: 'var(--color-green-dark)' }}>● Flexível</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="input-group">
                  <label>Vagas no Horário (Inteligência de Limite)</label>
                  <div className="time-slots">
                    {['19:00 - 23:00 (Vale Night)', '14:00 - 18:00 (Oficina)'].map(slot => (
                      <button
                        key={slot}
                        className={`time-slot-btn ${data.timeSlot === slot ? 'selected' : ''}`}
                        onClick={() => updateData({ timeSlot: slot })}
                      >
                        {slot} <span className="availability">● Vagas limitadas</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="info-alert">
              <strong>Atenção:</strong> Tolerância de atraso é de 15 min. Após isso, 1h adicional é cobrada automaticamente.
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="step-title">Perfil da Criança</h3>
            <p className="step-desc">Como o agendamento avalia o perfil, precisamos garantir um mix seguro para as idades.</p>

            <div className="form-grid">
              <div className="input-group">
                <label>Nome da criança</label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={data.childName}
                  onChange={e => updateData({ childName: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Idade / Perfil</label>
                <select
                  value={data.childAgeProfile}
                  onChange={e => updateData({ childAgeProfile: e.target.value })}
                >
                  <option value="">Selecione...</option>
                  <option value="bebe">Bebê (0-2 anos)</option>
                  <option value="crianca">Criança (3-5 anos)</option>
                  <option value="maior">Maior (6-11 anos) </option>
                </select>
              </div>
              <div className="input-group full-width">
                <label>Restrições Alimentares / Observações</label>
                <textarea
                  rows={3}
                  placeholder="Alguma alergia ou cuidado especial?"
                  value={data.foodRestrictions}
                  onChange={e => updateData({ foodRestrictions: e.target.value })}
                />
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="step-title">Dados de Segurança <ShieldCheck className="title-icon" color="var(--color-green-dark)" /></h3>
            <p className="step-desc">Para identificação e emergências no local.</p>

            <div className="form-grid">
              <div className="input-group">
                <label>Nome do 2º Contato</label>
                <input
                  type="text"
                  placeholder="Mãe, Pai, Avó..."
                  value={data.emergencyContact}
                  onChange={e => updateData({ emergencyContact: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Telefone do Contato</label>
                <input
                  type="text"
                  placeholder="(00) 00000-0000"
                  value={data.emergencyPhone}
                  onChange={e => updateData({ emergencyPhone: e.target.value })}
                />
              </div>

              <div className="input-group full-width photo-upload-box">
                <div className="upload-placeholder">
                  <span>📸 Câmera ou Arquivo</span>
                  <p>Tire uma foto sua com a criança agora (obrigatório para retirada)</p>
                  <button className="btn-outline btn-sm" onClick={() => updateData({ photoUploaded: true })}>
                    {data.photoUploaded ? 'Foto Anexada ✓' : 'Anexar Foto'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="step-title">Confirmação & Pagamento</h3>

            <div className="summary-box">
              <div className="summary-row"><span>Serviço:</span> <strong>{SERVICES.find(s => s.id === data.serviceId)?.title}</strong></div>
              <div className="summary-row"><span>Criança:</span> <strong>{data.childName} ({data.childAgeProfile})</strong></div>
              <div className="summary-row">
                <span>Período/Hora:</span>
                <strong style={{ textAlign: 'right' }}>
                  {data.serviceId === 'pacote_mensal' || data.serviceId === 'bloco_horas'
                    ? <>{data.date?.split('-').reverse().join('/')} até {data.endDate?.split('-').reverse().join('/')}<br />{data.startTime} às {String(Number(data.startTime.split(':')[0]) + data.duration).padStart(2, '0')}:00 ({data.duration}h)</>
                    : <>{data.date?.split('-').reverse().join('/')} | {data.timeSlot}</>}
                </strong>
              </div>
              <div className="summary-row total"><span>Total a Pagar:</span> <strong>R$ 150,00</strong></div>
            </div>

            <div className="payment-options">
              <button className="payment-btn pix">Pagamento via Pix</button>
              <button className="payment-btn card"><CreditCard size={18} /> Cartão de Crédito</button>
            </div>
          </motion.div>
        );
    }
  };

  const isNextDisabled = () => {
    if (step === 1 && !data.serviceId) return true;
    if (step === 2) {
      if (!data.date) return true;
      const isFlexible = data.serviceId === 'pacote_mensal' || data.serviceId === 'bloco_horas';
      if (isFlexible) {
        if (!data.endDate || !data.startTime || !data.duration) return true;
      } else {
        if (!data.timeSlot) return true;
      }
    }
    if (step === 3 && (!data.childName || !data.childAgeProfile)) return true;
    if (step === 4 && (!data.emergencyContact || !data.emergencyPhone || !data.photoUploaded)) return true;
    return false;
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay">
        <motion.div
          className="modal-content booking-modal"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        >
          <div className="modal-header">
            <div className="step-indicator">
              Passo {step} de 5
            </div>
            <button className="close-btn" onClick={onClose}><X size={24} /></button>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 5) * 100}%` }}></div>
          </div>

          <div className="modal-body">
            {renderStepContent()}
          </div>

          <div className="modal-footer">
            {step > 1 && (
              <button className="btn-ghost" onClick={handlePrev}>
                <ArrowLeft size={18} /> Voltar
              </button>
            )}
            <div style={{ flex: 1 }}></div>
            {step < 5 ? (
              <button
                className="btn-primary"
                onClick={handleNext}
                disabled={isNextDisabled()}
              >
                Continuar <ArrowRight size={18} />
              </button>
            ) : (
              <button className="btn-primary">Finalizar Reserva</button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
