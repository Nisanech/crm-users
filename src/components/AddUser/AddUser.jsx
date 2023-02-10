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

const AddUser = ({ addUser }) => {
  // Estado para la ventana modal
  const [modal, setModal] = useState(false);

  // Función para abrir o cerrar el modal
  const toggle = () => setModal(!modal);

  // Función para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    addUser(e.target.name.value, e.target.email.value, e.target.phone.value);

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";

    toggle();
  };

  return (
    <>
      <button
        className="mt-4 border-none bg-[#a9d250] py-3 px-5 rounded-lg w-full lg:w-2/4 font-medium text-slate-900"
        onClick={toggle}
      >
        Agregar
      </button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Usuario</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ingresar nombre"
                type="text"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Correo</Label>
              <Input
                id="email"
                name="email"
                placeholder="Ingresar correo"
                type="email"
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Ingresar teléfono"
                type="tel"
              />
            </FormGroup>

            <Button color="primary" onSubmit={handleSubmit}>
              Agregar
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddUser;
