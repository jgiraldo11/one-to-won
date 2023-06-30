import { useState } from "react"
import './styles/App.css';


function App() {
  const [convertU, setConvertU] = useState("")
  const [won, setWon] = useState()
  const handleConversion = (e) => {
    e.preventDefault()
  
  const usd = Number (e.target.usd.value);
  const won = Number (e.target.won.value);

  if (convertU !== "") {
    const convertedWon = usd / 0.00078;
    setWon(convertedWon);
    } else {
      const convertedUsd = won * 0.0078;
      setConvertU(convertedUsd);
    }
  }

  return (
    <main>
      <h1>Currency Converter</h1>
      <form onSubmit={handleConversion} >
      
      <p className="currency-name">USD</p>
        
        <input type="text" name="usd" placeholder="Enter USD Amount"
          value={convertU} onChange={e => {
            setConvertU(e.target.value)
            setWon("")
          }}
        />

        <p className="currency-name">WON</p>

        <input type="text" name="won" placeholder="Enter Won Amount" 
          value={won} onChange={e => {
            setWon(e.target.value)
            setConvertU("")
          }}
        />
          <button type="submit" value="usd" >Convert</button>
      </form>
    </main>
  );
}
 
export default App;
