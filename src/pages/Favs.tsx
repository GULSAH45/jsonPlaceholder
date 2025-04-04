import { useStore } from "../store/storefavs";
import { PhotoParams } from "./AlbumDetail";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

function Favs() {
  const { favorites, removeFav } = useStore();

  return (
    <Container className="py-5">
      <h2 className="text-center text-danger mb-4">❤️ Favoriler</h2>
      {favorites.length === 0 ? (
        <p className="text-center">Henüz favori fotoğrafınız yok.</p>
      ) : (
        <Row>
          {favorites.map((photo: PhotoParams) => (
            <Col md={4} lg={3} className="mb-4" key={photo.id}>
              <Card className="bg-dark text-white border-danger shadow-lg">
                <Card.Img variant="top" src={photo.url} />
                <Card.Body>
                  <Card.Title className="text-danger">{photo.title}</Card.Title>
                  <Button
                    variant="danger"
                    onClick={() => removeFav(photo.id)}
                    className="w-100 mt-2"
                  >
                    🗑️ Favorilerden Kaldır
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Favs;
