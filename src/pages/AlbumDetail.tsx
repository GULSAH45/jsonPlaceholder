
import { Button } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData, useParams,  } from "react-router-dom";
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
  const  {userId} = useParams();
const {favorites, addFav, removeFav} = useStore() 

const handleLike = (photo: PhotoParams) => {
  if (favorites.some((fav) => fav.id === photo.id)) {
    removeFav(photo.id);
  } else {
    addFav({ ...photo, userId: Number(userId) });
  }
};

  return (
    <div>
      <h2>Album Detail</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            
             <img src={photo.thumbnailUrl}/>
             <p>{photo.title}</p>
             <Button onClick={() => handleLike(photo)}>
              {favorites.some((fav) => fav.id === photo.id) ? "❤️" : "❤️"}
             </Button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumDetail;
