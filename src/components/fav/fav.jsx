import "./fav.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";

function Fav() {

  const [allproduct, setAllProduct] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("favcards")) || [];
    setAllProduct(data);
  }, []);

  const deleteitem = (index) => {
    let updated = [...allproduct];
    updated.splice(index, 1);
    setAllProduct(updated);
    localStorage.setItem("favcards", JSON.stringify(updated));
  };

  return (
    <div className="fav">
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
                  Remove Favourite
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
    </div>
  );
}

export default Fav;