import Container from "react-bootstrap/Container";
import { ListGroup } from "../../components/ListGroup/ListGroup";
import { useAppContext } from "../../store/AppContext";

const adapterItems = (items) => {
  return items.map((item) => ({
    ...item,
    title: item.name,
    total: item.pins.length,
  }));
};

export const MinhasPastasPage = () => {
  const { state } = useAppContext();
  return (
    <Container>
      {" "}
      <br />
      <h1>Minhas pastas</h1>
      <br />
      <ListGroup items={adapterItems(state.folders)} />
    </Container>
  );
};
