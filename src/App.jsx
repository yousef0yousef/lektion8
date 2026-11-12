import { useState, useEffect } from 'react'
import ATM from './components/ATM';
import './App.css'

function App() {
  const [show, setShow] = useState(false);
  const [money, setMoney] = useState(0);
  const [balance, setBalance] = useState(1000)

  useEffect(() => {
    console.log(show ? "ATM is now ready to use" : "ATM shutting down")
  }, [show])


  const showAtm = () => {
    setShow(!show)
  }

  return (
    <>
      {show && <ATM money={money} setmoney={setMoney} balance={balance} setBalance={setBalance} />}
      <button onClick={showAtm}>{show ? "Dölj" : "Visa"}</button>
    </>
  )
}

export default App
