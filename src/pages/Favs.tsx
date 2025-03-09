

function Favs() {
  const {favorites, removeFav} = useStore();
  return 
(  <>
<h1> Favorites </h1>
<ul> {favorites.map((photo)=><li key={photo.id}>
  <img src={photo.thumbnailUrl} onClick={() => removeFav(photo.id)}/>
</li>)}</ul>
</>)
}

export default Favs;
