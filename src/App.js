import { useState } from "react";
import "./App.css";
import FormControl from "./components/FormControl";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([
    {
      duty: "İLK GÖREV",
      expression: "srosendtjkls emts 00",
      time: "time 2",
    },
  ]); 


  function buradakiFunction(gelenData) {
  setData([...data, gelenData])
  console.log(data);
  }
  

  return (
    <div className="App">
 
      <FormControl onClick = {buradakiFunction} />
      <Table datam={data} />
    </div>
  );
}

export default App;
