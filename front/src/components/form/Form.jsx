import style from "./Form.module.css";
import { useEffect, useState } from "react";
import validation from "./validation";

export default function Form({ login }) {
  //* Este estado recibe lo que escribe el usuario
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //* Este estado errors se llena en base a las validaciones
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h1>LOGIN</h1>
      <p>Ingresa a esta maravillosa app</p>
      <label className={style.label}>
        Email
        <input
          type="email"
          placeholder="mail@mail.com"
          name="email"
          key="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      {errors.email && <p>{errors.email}</p>}
      <label className={style.label}>
        Password
        <input
          type="password"
          placeholder="hola123"
          name="password"
          key="password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      {errors.password && <p>{errors.password}</p>}
      <br />
      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
}
