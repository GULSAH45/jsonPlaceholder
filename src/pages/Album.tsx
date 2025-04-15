import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";

interface AlbumParams {
  userId: number;
  id: number;
  title: string;
}

export const AlbumLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/albums`
  );
  const albums = await response.json();
  return albums.slice(0, 2); // Only return the first 2 albums
};

function Album() {
  const albums = useLoaderData() as AlbumParams[];
    useEffect(() => {
      document.body.style.backgroundColor = "#121212"; // Gizemli koyu arkaplan
      document.body.style.color = "#ddd"; // Açık renk metin
      return () => {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
      };
    }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center text-danger mb-4">Evidences</h1>
      <p className="text-center text-white mb-5">
        Gizemli albümleri keşfedin. Her albüm farklı bir hikayeyi anlatıyor!
      </p>
      <Row>
        {albums.map((album) => (
          <Col md={4} lg={3} className="mb-4" key={album.id}>
            <Card className="bg-dark text-white border-danger shadow-lg h-100">
              <Card.Img 
                variant="top" 
                src={`https://picsum.photos/seed/album${album.id}/200/150?blur`} 
                alt={album.title}
              />
              <Card.Body className="text-center">
                <Card.Title className="text-danger">{album.title}</Card.Title>
                <Link
                  to={`/users/${album.userId}/albums/${album.id}`}
                  className="btn btn-danger w-100 mt-3"
                >
                  Detayları Görüntüle
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Album;
