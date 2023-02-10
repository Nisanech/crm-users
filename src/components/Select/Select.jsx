import React from "react";

const Select = ({ sortByName, sortByEmail }) => {
  return (
    <>
      <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 mb-5">
        <p className="font-Poppins text-gray m-0">Ordenar por:</p>

        <div
          className="flex items-center gap-3 cursor-pointer ml-5"
          onClick={sortByName}
        >
          <p className="m-0">Nombre</p>

          <i className="ri-arrow-up-down-fill text-dark_primary"></i>
        </div>

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={sortByEmail}
        >
          <p className="m-0">Correo</p>

          <i className="ri-arrow-up-down-fill text-dark_primary"></i>
        </div>
      </div>
    </>
  );
};

export default Select;
