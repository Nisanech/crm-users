import React from "react";

const Select = () => {
  return (
    <>
      <div className="mt-4 flex flex-col lg:flex-row lg:items-center w-full gap-2 lg:gap-5">
        <label htmlFor="users" className="font-Poppins text-gray w-2/5">
          Ordenar por:
        </label>
        <select
          id="users"
          className="bg-gray-50 border border-gray text-black text-sm rounded-lg w-full p-2.5 "
        >
          <option selected disabled>
            -- Selecciona --
          </option>
          <option value="name">Nombre</option>
          <option value="email">Correo</option>
        </select>
      </div>
    </>
  );
};

export default Select;
