import './App.css';
import worker from './mediainfo.worker';

const { wasm } = worker(); 

const handleChange = (event) => {
  const file = event.target.files[0];
  wasm(file)
  .then(result => {
    console.log(result)
  });
}

function App() {
  return (
    <div className="App">
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default App;
