import React, { useState } from 'react';
import './PaymentScreen.css'; // Importa os estilos CSS para este componente

const PaymentScreen: React.FC = () => {
  // Estados para armazenar os valores dos inputs do formulário
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    // Aqui você pode adicionar a lógica para processar o pagamento
    // Por enquanto, vamos apenas logar os valores
    console.log('Dados do Cartão:', {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
    });
    alert('Pagamento Finalizado! (Verifique o console para os dados)');
    // Você pode redefinir os campos aqui se desejar
    // setCardNumber('');
    // setCardHolderName('');
    // setExpiryDate('');
    // setCvv('');
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Finalizar Pagamento</h2>

        <div className="input-group">
          <label htmlFor="cardNumber">Número do Cartão</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="XXXX XXXX XXXX XXXX"
            required
            maxLength={19} // Inclui espaços para formatação
          />
        </div>

        <div className="input-group">
          <label htmlFor="cardHolderName">Nome no Cartão</label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="NOME COMPLETO"
            required
          />
        </div>

        <div className="input-row">
          <div className="input-group half-width">
            <label htmlFor="expiryDate">Validade</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/AA"
              required
              maxLength={5}
            />
          </div>

          <div className="input-group half-width">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="XXX"
              required
              maxLength={4}
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Finalizar Pagamento
        </button>
      </form>
    </div>
  );
};

export default PaymentScreen;