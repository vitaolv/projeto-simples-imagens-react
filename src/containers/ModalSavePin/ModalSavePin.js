import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { useAppContext } from "../../store/AppContext";
import { useEffect, useState } from "react";
import {
  closeModalAction,
  fetchFoldersAction,
  openModalCreateFolderAction,
  savePinInFolderAction,
} from "../../store/Actions";

import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [itensLoading, setItensLoading] = useState({});

  const handleCLose = () => {
    console.log("Fechou o modal!");
    dispatch(closeModalAction());
  };

  const foldersNormalized = state.folders.map((folder) => {
    return {
      ...folder,
      saved: folder.pins.includes(state.activePinId),
    };
  });

  const handleClickCreateFolders = () => {
    console.log("Clicou em criar pasta.");
    dispatch(openModalCreateFolderAction());
  };

  const handleClick = async (folderId) => {
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: true,
      };
    });

    await savePinInFolderAction(dispatch, state.activePinId, folderId);

    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: false,
      };
    });
  };

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, []);

  return (
    <Modal
      title="Itens salvos e coleções "
      onHide={handleCLose}
      open={open}
      controls={[
        {
          label: "Criar pasta",
          variant: "primary",
          loading: false,
          loadingLabel: "Criando...",
          onClick: handleClickCreateFolders,
        },
      ]}
    >
      <ListGroup variant="flush">
        {foldersNormalized.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <Button
                  label={folder.saved ? "Salvo" : "Salvar"}
                  loadingLabel="Salvando"
                  onClick={() => handleClick(folder.id)}
                  variant={folder.saved ? "secondary" : "primary"}
                  disabled={folder.saved}
                  loading={itensLoading[folder.id]}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  );
};
