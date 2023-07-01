import "./App.css";

import { useState } from "react";

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("File", file);

    const res = await fetch(
      "https://jablueo323.execute-api.us-east-1.amazonaws.com/file-upload-system-lambda",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(res);
  };

  return (
    <div className="App">
      <h3>File Upload System using API Gateway, Lambda and S3</h3>
      <div>
        <input type="file" name="file" onChange={handleChange} />
        <br/>
        <br/>
        <button className="button-29" onClick={handleSubmit}>Submit File</button>
      </div>
      {isSelected && (
        <div>
          <p>Filename : {file.name}</p>
          <p>Filetype : {file.type}</p>
          <p>Filesize (bytes) : {file.size}</p>
        </div>
      )}
    </div>
  );
}

export default App;