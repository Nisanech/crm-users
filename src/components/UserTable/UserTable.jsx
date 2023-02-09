import React from "react";

const UserTable = () => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-sm text-white text-center uppercase bg-dark_primary font-Poppins font-medium">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Nombre
            </th>
            <th scope="col" class="px-6 py-3">
              Correo
            </th>
            <th scope="col" class="px-6 py-3">
              Teléfono
            </th>
            <th scope="col" class="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-gray">
            <th
              scope="row"
              class="px-6 py-4 font-Poppins text-black whitespace-nowrap"
            >
              1
            </th>
            <td class="px-6 py-4 font-Poppins">Leanne Graham</td>
            <td class="px-6 py-4 font-Poppins">Sincere@april.biz</td>
            <td class="px-6 py-4 font-Poppins">1-770-736-8031 x56442</td>
            <td class="px-6 py-4 font-Poppins flex justify-evenly">
              <i class="ri-pencil-fill text-bg_light_primary text-[20px] cursor-pointer"></i>
              <i class="ri-eye-fill text-bg_light_secondary text-[20px] cursor-pointer"></i>
              <i class="ri-delete-bin-fill text-bg_light_primary text-[20px] cursor-pointer"></i>
            </td>
          </tr>

          <tr class="bg-white border-gray">
            <th
              scope="row"
              class="px-6 py-4 font-Poppins text-black whitespace-nowrap"
            >
              2
            </th>
            <td class="px-6 py-4 font-Poppins">Leanne Graham</td>
            <td class="px-6 py-4 font-Poppins">Sincere@april.biz</td>
            <td class="px-6 py-4 font-Poppins">1-770-736-8031 x56442</td>
            <td class="px-6 py-4 font-Poppins flex justify-evenly">
              <i class="ri-pencil-fill text-bg_light_primary text-[20px] cursor-pointer"></i>
              <i class="ri-eye-fill text-bg_light_secondary text-[20px] cursor-pointer"></i>
              <i class="ri-delete-bin-fill text-bg_light_primary text-[20px] cursor-pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
