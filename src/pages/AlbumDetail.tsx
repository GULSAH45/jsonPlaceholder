
import { LoaderFunctionArgs, useLoaderData,  } from "react-router-dom";

interface PhotoParams {
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


  return (
    <div>
      <h2>Album Detail</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            
             <img src={photo.thumbnailUrl}/>
             <p>{photo.title}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumDetail;
