import Link from "next/link";
import { API_URL } from "../app/constans";
import styles from "../styles/movie-similar.module.css";

async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({id}: {id: string}) {
  const similar = await getSimilar(id);
  return (
    <>
      <h3 className={styles.title}>Similar</h3>
      <div className={styles.container}>
        {similar.map((s) => (
          <div key={s.id}>
            <Link href={`/movies/${s.id}`}>
              <img src={s.poster_path} alt={s.title} />
              <p>{s.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
