import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";
import { Notification } from "../../components/Notification/Notification";
import { CardContainer } from "../../containers/Card/CardContainer";
import { useAppContext } from "../../store/AppContext";
import { saveFoldersSuccessType } from "../../store/Types";
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { useState, useEffect } from "react";
import { fetchPinsAction } from "../../store/Actions";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  const [showFeedback, setShowFeedback] = useState(false);

  const pinsNormalized = state.pins.map((pin) => ({
    ...pin,
    total: state.folders.filter((folder) => {
      return folder.pins.includes(pin.id);
    }).length,
  }));

  useEffect(() => {
    fetchPinsAction(dispatch);
  }, []);

  useEffect(() => {
    if (state.type === saveFoldersSuccessType) {
      setShowFeedback(true);
    }
  }, [state.type]);

  return (
    <div>
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={state.mode === "createFolder"} />
      {showFeedback && (
        <Notification
          message="Pasta criada com sucesso!"
          onClose={() => setShowFeedback(false)}
        />
      )}
      <br />
      <Container fluid>
        <Row>
          {pinsNormalized.map((pin) => (
            <Col key={pin.id} xs={12} md={3}>
              <CardContainer {...pin} />
              <br />
            </Col>
          ))}
        </Row>
        <br />
      </Container>
    </div>
  );
};
