import { API_URL } from "../app/constans";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
  const movie = await getMovie(id);
  return <div className={styles.container}>
    <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
    <div className={styles.info}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div>
        ⭐ <span>{movie.vote_average.toFixed(1)}</span><span className={styles.dot}>ㆍ</span>
        <span>{movie.genres.map((g) => g.name).slice(0, 1)}</span><span className={styles.dot}>ㆍ</span>
        <span>{movie.release_date.slice(0, 4)}</span>
      </div>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target={"_blank"} className={styles.btn}>
        view more
      </a>
    </div>
  </div>
}