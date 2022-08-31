import React, { useEffect, useState } from "react";
import "../assets/css/Styles.css";
import { useForm } from "react-hook-form";

function EditarProducto() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      });
  }, []);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [idCategoryFK, setIdCategoryFK] = useState("");
  const [file, setFile] = useState(null);

  const selectHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formdata = new FormData();

  formdata.append("image", file);
  formdata.append("name", name);
  formdata.append("description", description);
  formdata.append("price", price);
  formdata.append("idCategoryFK", idCategoryFK);

  const submitEdit = () => {
    if (errors.length == null) {
      fetch("http://localhost:3042/products/dashboard/edit/" + id, {
        method: "PUT",
        body: formdata,
      })
        .then((res) => res.text())
        .catch((err) => {
          console.error(err);
        });
    }
    alert("Cambios realizados");
  };

  const submitDelete = () => {
    fetch("http://localhost:3042/products/dashboard/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .catch((err) => {
        console.error(err);
      });
    alert("Producto eliminado");
  };

  return (
    <React.Fragment>
      {/* CREAR PRODUCTO */}
      <div className="crudCrear">
        <h1>Editar Producto</h1>
        <form
          onSubmit={handleSubmit(submitEdit)}
          className="inputsCrud"
          id="form-crud"
        >
          {/* SELECCIONAR PROD */}
          <p>Seleccione el producto a Editar o Eliminar</p>
          <select
            type="text"
            name="productos"
            className=""
            placeholder="Productos"
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
          >
            <option value="" disabled selected>
              - Seleccione Producto -{" "}
            </option>
            {productos.map((prod, i) => {
              return (
                <option value={prod.idProduct} key={i}>
                  {prod.name}
                </option>
              );
            })}
          </select>
          {/* MODIFICAR PROD */}
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
          <button type="submit" className="btn-crud">
            Editar
          </button>
          <button type="button" onClick={submitDelete} className="btn-crud">
            Borrar
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default EditarProducto;
