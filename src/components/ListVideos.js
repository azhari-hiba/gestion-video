import { useSelector, useDispatch } from "react-redux";
import { supprimer } from "../videosSlice";
export default function ListVideos() {
  const videos = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Liste des Videos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>titre</th>
            <th>url</th>
            <th>duree</th>
            <th>image</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.titre}</td>
              <td>{video.url}</td>
              <td>{video.duree}</td>
              <td>{video.image}</td>
              <td>
                <button
                  onClick={() => dispatch(supprimer({ id: video.id }))}
                >supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
