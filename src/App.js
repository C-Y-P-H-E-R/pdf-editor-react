import { useState } from 'react';
import './App.css';
import DisplayPDF from './DisplayPDF';

function App() {
   const [b64string, setB64string] = useState();
   const handleChange = (e) => {   
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(newEvent) {
      const binaryData = newEvent.target.result;
      console.log(binaryData)
      setB64string(binaryData)
    }
    reader.readAsDataURL(file);
  }
  return (
    <div className="App">
      <div className="wrapper">
        <div className="inp">
          <label htmlFor="file-upload" className="fu-label">
            Upload pdf
          </label>
          <input id="file-upload" type="file" onChange={handleChange}/>
          <DisplayPDF pdf={b64string} />
        </div>
      </div>
    </div>
  );
}

export default App;
