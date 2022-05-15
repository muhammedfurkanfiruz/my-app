import React, { useState, useEffect } from "react";

function FormControl() {
  const [duty, setDuty] = useState("");
  const [expression, setExpression] = useState("");

  return (
    <div>
      <div>
        <label>Görev : </label>
        <input
          type="text"
          onChange={(event) => setDuty(event.target.value)}
        ></input>
      </div>

      <div>
        <label>Açıklama :</label>
        <input
          type="text"
          onChange={(event) => setExpression(event.target.value)}
        ></input>
      </div>
      <button onClick={() => console.log({
          duty: duty,
          expression: expression
      })}>Ekle</button>
    </div>
  );
}

export default FormControl;
