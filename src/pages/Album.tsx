
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

interface AlbumParams {
    userId: number
    id: number
    title: string
}

export const AlbumLoader = async ({params}: LoaderFunctionArgs) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
    const albums = await response.json()
    return albums;
}
function Album() {
    const albums = useLoaderData() as AlbumParams[]

  return (
    <>
        <h1>Albums</h1>
        <ul>
            {albums.map((album) => (
                <li key={album.id}>
                    <p>{album.title}</p>
                </li>
            ))}
        </ul>

    </>
  )
}

export default Album