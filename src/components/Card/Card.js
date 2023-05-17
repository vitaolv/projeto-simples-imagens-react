import CardBS from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const Card = ({ id, image, title, total, onClick }) => {
  return (
    <CardBS className="bg-dark text-white">
      <CardBS.Img src={image} alt="CardBS image" />
      <CardBS.ImgOverlay>
        <Button variant="primary" onClick={() => onClick(id)}>
          Salvar <Badge bg="secondary">{total}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title> {title}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
};
