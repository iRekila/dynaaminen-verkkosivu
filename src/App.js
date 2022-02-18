
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState(0);
  const [result, setResult] = useState(0);
  
  function Submit(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    let answer = 0;
    

    if (gender === 'Male') {
      answer = gramsLeft / (weight * 0.7);
    } else {
      answer = gramsLeft / (weight * 0.6);
    }
    setResult(answer)
  }
    return (
      <form onSubmit={Submit}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} step="1"
        onChange={e => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" value={bottles} step="1" 
        onChange={e => setBottles(e.target.value)}
        />
      </div>
      <div>
        <label>Time</label>
        <input type="number" value={time} step="1"
        onChange={e => setTime(e.target.value)}
        />
      </div>
      <div onChange={e => setGender(e.target.value)}>
        <input type="radio" value="Male" name="gender"  /> Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>
      <div>
        <label></label>
        <output>{result.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
    )
}

export default App;
