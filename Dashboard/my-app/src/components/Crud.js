import React, { useEffect, useState } from "react";
import "../assets/css/Styles.css";
import Axios from "axios";

function Crud() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [idCategoryFK, setIdCategoryFK] = useState("");
  //   const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const selectHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const submitCreate = () => {
    if (!name || !description || !price || !idCategoryFK) {
      alert("Completa todos los campos con *");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("idCategoryFK", idCategoryFK);

    fetch("http://localhost:3042/products/dashboard/create", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <React.Fragment>
      <div>
        {/* CREAR PRODUCTO */}
        <div className="crudCrear">
          <h1>Crear Producto</h1>
          <div className="inputsCrud">
            <input
              type="text"
              name="name"
              className=""
              placeholder="Nombre *"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              name="description"
              className=""
              placeholder="Descripción *"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              type="number"
              name="price"
              className=""
              placeholder="Precio *"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <select
              type="text"
              name="idCategoryFK"
              className=""
              placeholder="Categoria *"
              required
              onChange={(e) => {
                setIdCategoryFK(e.target.value);
              }}
            >
              <option value="" disabled selected>
                - Seleccione Categoría -{" "}
              </option>
              <option value="1"> Center Pompidou </option>
              <option value="2"> Jaquet Droze </option>
              <option value="3"> Tinker </option>
              <option value="4"> Colors of Nature </option>
            </select>

            <input
              type="file"
              name="image"
              className=""
              placeholder="image"
              onChange={selectHandler}
            />
          </div>
          <button type="button" onClick={submitCreate}>
            Cargar
          </button>
        </div>

        {/* EDITAR PRODUCTO
        <div className="crudEditar">
          <h1>Editar Producto</h1>
          <div className="inputsCrud">
            <input
              type="number"
              name="id"
              className=""
              placeholder="Id del Producto"
            />
            <input type="text" name="name" className="" placeholder="Nombre" />
            <input
              type="text"
              name="description"
              className=""
              placeholder="Descripción"
            />
            <input type="price" name="name" className="" placeholder="Price" />
            <select
              type="text"
              name="category"
              className=""
              placeholder="Categoria"
              required
            >
              <option value="" disabled selected>
                - Seleccione Categoría -{" "}
              </option>
              <option value="1"> Center Pompidou </option>
              <option value="2"> Jaquet Droze </option>
              <option value="3"> Tinker </option>
              <option value="4"> Colors of Nature </option>
            </select>
          </div>
        </div>

        ELIMINAR PRODUCTO
        <div className="crudEliminar">
          <h1>Eliminar Producto</h1>
          <div className="inputsCrud">
            <input
              type="number"
              name="id"
              className=""
              placeholder="Id del Producto"
            />
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
}
export default Crud;
