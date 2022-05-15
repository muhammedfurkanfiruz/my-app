import React, { useState, useEffect } from "react";

const Table = ({ datam }) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Görev</th>
            <th>Açıklama</th>
            <th>Zaman</th>
          </tr>
        </thead>
        <tbody>
          {datam.map((item, index) => (
            <tr key={item.duty}>
              <td>{item.duty}</td>
              <td> {item.expression}</td>
              <td> {item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
