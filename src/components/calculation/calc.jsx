import "./calc.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";

function Calc() {

  const [allproduct, setAllProduct] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cards")) || [];
    setAllProduct(data);
  }, []);

  const deleteitem = (index) => {
    let updated = [...allproduct];
    updated.splice(index, 1);
    setAllProduct(updated);
    localStorage.setItem("cards", JSON.stringify(updated));
    
  };

  return (
    <div className="calc">
      <Table striped bordered hover align-middle className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name Product</th>
            <th>Title Product</th>
            <th>Img Product</th>
            <th>Price Product</th>
            <th>Tools</th>
          </tr>
        </thead>

        <tbody>
          {allproduct.map((e, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{e.name}</td>
              <td>{e.title}</td>
              <td>
                <img src={e.src} width="50" />
              </td>
              <td>{e.price}$</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteitem(index)}
                >
                  Remove Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
    </div>
  );
}

export default Calc;