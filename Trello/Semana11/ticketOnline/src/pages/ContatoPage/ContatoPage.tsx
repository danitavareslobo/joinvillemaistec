import React from 'react';
import TemplateContatoPage from '../../components/templates/TemplateContatoPage/TemplateContatoPage';
import ContatoForm from '../../components/organisms/ContatoForm/ContatoForm';
import type { ContatoFormData } from '../../types';

interface ContatoPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const ContatoPage: React.FC<ContatoPageProps> = ({ currentPage, onNavigate }) => {
  const handleSubmit = (data: ContatoFormData) => {
    console.log('📧 Dados do formulário:', data);
    alert(`Mensagem enviada com sucesso!
    
📧 E-mail: ${data.email}
📋 Assunto: ${data.assunto}
💬 Mensagem: ${data.mensagem}
🚨 Urgente: ${data.urgencia ? 'Sim' : 'Não'}`);
  };

  return (
    <TemplateContatoPage currentPage={currentPage} onNavigate={onNavigate}>
      <ContatoForm onSubmit={handleSubmit} />
    </TemplateContatoPage>
  );
};

export default ContatoPage;