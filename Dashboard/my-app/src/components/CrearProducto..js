import React, { useState } from "react";
import "../assets/css/Styles.css";
import { useForm } from "react-hook-form";

function CrearProducto() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [idCategoryFK, setIdCategoryFK] = useState("");
  const [file, setFile] = useState(null);

  const selectHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const submitCreate = (e) => {
    if (errors.length == null) {
      const formdata = new FormData();
      formdata.append("image", file);
      formdata.append("name", name);
      formdata.append("description", description);
      formdata.append("price", price);
      formdata.append("idCategoryFK", idCategoryFK);

      fetch("http://localhost:3043/products/dashboard/create", {
        method: "POST",
        body: formdata,
      })
        .then((res) => res.text())
        .then((res) => console.log(res))
        .catch((err) => {
          console.error(err);
        });
      alert("Producto creado");
    }
    
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);

  // CONST PARA HACER PRUEBAS
  // const onSubmit = (e) => {
  //   console.log(e);
  // };

  return (
    <React.Fragment>
      {/* CREAR PRODUCTO */}
      <div className="crudCrear">
        <h1>Crear Producto</h1>
        <form
          onSubmit={handleSubmit(submitCreate)}
          className="inputsCrud"
          id="form-crud"
        >
          <input
            type="text"
            name="name"
            className=""
            placeholder="Nombre *"
            {...register("name", {
              required: { value: true },
              minLength: { value: 5 },
            })}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {errors.name && (
            <span>El campo nombre debe tener al menos 5 caracteres.</span>
          )}
          <input
            type="text"
            name="description"
            className=""
            placeholder="Descripción *"
            {...register("description", {
              required: { value: true },
              minLength: { value: 20 },
            })}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {errors.description && (
            <span>El campo descripción debe tener al menos 20 caracteres.</span>
          )}
          <input
            type="number"
            step=".01"
            name="price"
            className=""
            placeholder="Precio *"
            {...register("price", {
              required: { value: true },
            })}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          {errors.price && <span>El campo precio es obligatorio.</span>}
          <select
            type="text"
            name="idCategoryFK"
            className=""
            placeholder="Categoria *"
            {...register("idCategoryFK", {
              required: { value: true },
            })}
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
          {errors.price && <span>El campo categoría es obligatorio.</span>}

          <input
            type="file"
            name="image"
            className=""
            placeholder="image"
            onChange={selectHandler}
          />
          <button placeholder="Crear" className="btn-crud">
            {" "}
            Crear{" "}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default CrearProducto;
