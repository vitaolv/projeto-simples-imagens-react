import { Card } from "../../components/Card/Card.js";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/Actions";

export const CardContainer = (props) => {
  const { dispatch } = useAppContext();
  const handleClick = (pinId) => {
    console.log("ok!", pinId);
    dispatch(openModalSavePinAction(pinId));
  };
  return <Card {...props} onClick={handleClick} />;
};
