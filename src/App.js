// Dependencias
import React, { useEffect, useState } from "react";

// Componentes
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Select from "./components/Select/Select";
import AddUser from "./components/AddUser/AddUser";
import UserTable from "./components/UserTable/UserTable";
import Footer from "./components/Footer/Footer";

function App() {
  // Estado para todos los usuarios existentes en la API
  const [users, setUsers] = useState([]);

  // Estado para buscar el usuario
  const [searchUser, setSearchUser] = useState("");

  // Estado para ordenar los datos
  const [sorted, setSorted] = useState({ sorted: "name", reversed: false });

  // Se renderiza todo el componente una vez cargue completamente
  useEffect(() => {
    allUsers();
  }, []);

  // Petición API para obtener todos los usuarios
  const allUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(users)

  // Petición API para agregar un nuevo usuario
  const addUser = async (name, email, phone) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Petición API para eliminar un usuario
  const deleteUser = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Función para ordenar los datos por nombre A-Z / Z-A
  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });

    const usersCopy = [...users];

    usersCopy.sort((userA, userB) => {
      const nameA = userA.name;
      const nameB = userB.name;

      if (sorted.reversed) {
        return nameB.localeCompare(nameA);
      }

      return nameA.localeCompare(nameB);
    });
    setUsers(usersCopy);
  };

  // Función para ordenar los datos por email A-Z / Z-A
  const sortByEmail = () => {
    setSorted({ sorted: "email", reversed: !sorted.reversed });

    const usersCopy = [...users];

    usersCopy.sort((userA, userB) => {
      const emailA = userA.email;
      const emailB = userB.email;

      if (sorted.reversed) {
        return emailB.localeCompare(emailA);
      }

      return emailA.localeCompare(emailB);
    });
    setUsers(usersCopy);
  };

  return (
    <>
      <Header />

      <div className="mt-4 p-5 flex flex-col lg:grid lg:grid-cols-2 lg:items-end md:container lg:justify-items-center">
        {/* Buscar usuario */}
        <Search setSearchUser={setSearchUser} />

        {/* Nuevo usuario */}
        <AddUser addUser={addUser} />
      </div>

      <div className="p-5 md:container">
        {/* Ordenar datos */}
        <Select sortByName={sortByName} sortByEmail={sortByEmail} />

        {/* Tabla para listar todos los usuarios */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-white text-center uppercase bg-dark_primary font-Poppins font-medium">
              <tr>
                <th scope="col" className="px-6 py-3 cursor-pointer">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Correo
                </th>
                <th scope="col" className="px-6 py-3">
                  Teléfono
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Listar usuarios de acuerdo al parámetro de búsqueda */}
              {users
                .filter((user) => {
                  if (searchUser === "") {
                    return user;
                  } else if (
                    user.name.toLowerCase().includes(searchUser.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((user, index) => (
                  <UserTable key={index} {...user} deleteUser={deleteUser} />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
