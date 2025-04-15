import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../store/storefavs";

export interface PhotoParams {

  albumId?: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  userId: number;
}

export const albumDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
  );
  const photos = await response.json();
  return photos.slice(0, 5); // Only return the first 5 photos
};


function AlbumDetail() {
  const photos = useLoaderData() as PhotoParams[];
  const { userId } = useParams();
  
  const { favorites, addFav, removeFav } = useStore();


  const handleLike = (photo: PhotoParams) => {
    if (favorites.some((fav: { id: number }) => fav.id === photo.id)) {
      removeFav(photo.id);
    } else {
      addFav({ ...photo, userId: Number(userId) },
       "https://picsum.photos/id/" + photo.id + "/200/200" + "?blur");
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#121212"; // Koyu tema
    document.body.style.color = "#ddd"; // Açık renk metin
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center text-danger mb-4">🖼️ Albüm Detayı</h2>
      <Row>
        {photos.map((photo) => (
          <Col md={4} lg={3} className="mb-4" key={photo.id}>
            <Card className="bg-dark text-white border-danger shadow-lg">
              <Card.Img
                variant="top"
                src={"https://picsum.photos/id/" + photo.id + "/200/200" + "?blur"}
              />
              <Card.Body>
                <Card.Title className="text-danger">{photo.title}</Card.Title>
                <Button
                  variant="danger"
                  onClick={() => handleLike(photo)}
                  className="w-100 mt-2"
                >
                  {favorites.some((fav) => fav.id === photo.id) ? "❤️" : "🤍"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AlbumDetail;
