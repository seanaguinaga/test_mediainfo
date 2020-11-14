import './App.css';

import MediaInfo from 'mediainfo.js';

const readChunk = (file) => (chunkSize, offset) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target.error) {
        reject(event.target.error)
      }
      resolve(new Uint8Array(event.target.result))
    }
    reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
  })

const handleChange = (event) => {
  const file = event.target.files[0];
  MediaInfo().then((mediainfo) => {
    mediainfo
    .analyzeData(() => file.size, readChunk(file))
    .then((result) => {
      console.log(result);
    })
  })
  console.log(event.target.files[0]);
}

function App() {
  return (
    <div className="App">
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default App;
