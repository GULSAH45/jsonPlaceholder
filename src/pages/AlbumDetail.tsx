import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
  console.log(photos);
  return photos;
};

function AlbumDetail() {
  const photos = useLoaderData() as PhotoParams[];
  const { userId } = useParams();
  const { favorites, addFav, removeFav } = useStore();

  const [pixabayImages, setPixabayImages] = useState<any[]>([]);

  // API anahtarınızı buraya koyun
  const API_KEY = "49291635-18a83f2b0d68deb32e8d2875a";

  // Kullanıcıya göre dinamik resim sorgulama
  useEffect(() => {
    const fetchPixabayImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=morocco&image_type=photo&per_page=6&page=1`
        );
        const data = await response.json();
        setPixabayImages(data.hits); // Pixabay'dan gelen resimleri state'e kaydediyoruz
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    };

    fetchPixabayImages();
  }, [userId]); // userId'ye göre resimler güncellenir

  const handleLike = (photo: PhotoParams) => {
    if (favorites.some((fav: { id: number }) => fav.id === photo.id)) {
      removeFav(photo.id);
    } else {
      addFav({ ...photo, userId: Number(userId) });
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
                src={pixabayImages.length > 0 ? pixabayImages[photo.id % pixabayImages.length].webformatURL : photo.thumbnailUrl}
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
