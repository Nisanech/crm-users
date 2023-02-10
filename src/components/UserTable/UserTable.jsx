// Dependencias
import React, { useState } from "react";

// Estilos
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const UserTable = ({ id, name, email, phone, deleteUser }) => {
  // Estado para la ventana modal
  const [modal, setModal] = useState(false);

  // Función para abrir o cerrar el modal
  const toggle = () => setModal(!modal);

  // Función para eliminar un usuario
  const handleDelete = () => {
    deleteUser(id);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Visualizar Usuario</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ingresar nombre"
                type="text"
                value={name}
                disabled={true}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Correo</Label>
              <Input
                id="email"
                name="email"
                placeholder="Ingresar correo"
                type="email"
                value={email}
                disabled={true}
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Ingresar teléfono"
                type="tel"
                value={phone}
                disabled={true}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Aceptar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Fila de la tabla */}
      <tr className="bg-white border-gray">
        <td className="px-6 py-4 font-Poppins">{name}</td>

        <td className="px-6 py-4 font-Poppins">{email}</td>

        <td className="px-6 py-4 font-Poppins">{phone}</td>

        <td className="px-6 py-4 font-Poppins flex justify-evenly">
          <button onClick={toggle}>
            <i className="ri-eye-fill text-bg_light_secondary text-[20px] cursor-pointer"></i>
          </button>

          <button onClick={handleDelete}>
            <i className="ri-delete-bin-fill text-bg_light_primary text-[20px]"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserTable;
