import { Modal } from "../../components/Modal/Modal";
import { useState, useEffect } from "react";
import { useAppContext } from "../../store/AppContext";
import { closeModalAction, saveFoldersAction } from "../../store/Actions";
import { saveFoldersInitType, saveFoldersSuccessType } from "../../store/Types";

import Form from "react-bootstrap/Form";

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    if (state.type === saveFoldersSuccessType) {
      handleClose();
    }
  }, [state.type]);

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicou em criar e salvou com o nome:", folderName);
    saveFoldersAction(dispatch, folderName, state.activePinId);
  };

  const handleClose = (e) => {
    dispatch(closeModalAction());
  };

  return (
    <Modal
      open={open}
      title="Itens salvos e coleções"
      onHide={handleClose}
      controls={[
        {
          label: "Criar e salvar",
          loadingLabel: "Criando",
          variant: "secondary",
          type: "submit",
          form: "form-criar-pasta",
          loading: state.type === saveFoldersInitType,
        },
      ]}
    >
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da pasta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Exemplo: Praia"
            value={folderName}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Dê um nome para a sua pasta.
          </Form.Text>
        </Form.Group>
      </Form>
    </Modal>
  );
};
