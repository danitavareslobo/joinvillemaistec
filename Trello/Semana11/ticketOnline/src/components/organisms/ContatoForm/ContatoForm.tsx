import React from 'react';
import { useForm } from 'react-hook-form';
import type { ContatoFormData } from '../../../types';
import './ContatoForm.css';

interface ContatoFormProps {
  onSubmit: (data: ContatoFormData) => void;
}

const ContatoForm: React.FC<ContatoFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContatoFormData>();

  const onSubmitForm = (data: ContatoFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="contato-form-container">
      <div className="contato-form-header">
        <h2>Entre em Contato</h2>
        <p>Envie-nos uma mensagem e retornaremos o mais breve possível</p>
      </div>

      <form onSubmit={handleSubmit(onSubmitForm)} className="contato-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="seu@email.com"
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="assunto" className="form-label">
            Assunto *
          </label>
          <input
            id="assunto"
            type="text"
            className={`form-input ${errors.assunto ? 'error' : ''}`}
            placeholder="Qual o assunto da sua mensagem?"
            {...register('assunto', {
              required: 'Assunto é obrigatório',
              minLength: {
                value: 3,
                message: 'Assunto deve ter pelo menos 3 caracteres'
              }
            })}
          />
          {errors.assunto && (
            <span className="error-message">{errors.assunto.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensagem" className="form-label">
            Mensagem *
          </label>
          <textarea
            id="mensagem"
            className={`form-textarea ${errors.mensagem ? 'error' : ''}`}
            placeholder="Digite sua mensagem aqui..."
            rows={6}
            {...register('mensagem', {
              required: 'Mensagem é obrigatória',
              minLength: {
                value: 10,
                message: 'Mensagem deve ter pelo menos 10 caracteres'
              }
            })}
          />
          {errors.mensagem && (
            <span className="error-message">{errors.mensagem.message}</span>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="form-checkbox"
              {...register('urgencia')}
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-text">
              Esta mensagem é urgente
            </span>
          </label>
          <span className="optional-text">(opcional)</span>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContatoForm;