import PaymentScreen from './components/PaymentScreen';
// Nota: Se você não for mais usar o App.css padrão (que tem o logo e contagem), 
// você pode remover a linha abaixo ou limpá-lo. Vou mantê-lo por segurança.
import './App.css';

function App() {
  return (
    // <main> ou <div> é onde seu componente de tela de pagamento será exibido.
    // O container CSS do PaymentScreen já gerencia o layout centralizado.
    <PaymentScreen />
  );
}

export default App;