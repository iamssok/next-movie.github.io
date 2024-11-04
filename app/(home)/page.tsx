import { API_URL } from "../layout";
import MovieList from "../../components/movie-list";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 50000)); 
  const response = await fetch(API_URL);
  return response.json();
}

export default async function Home() { 
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => 
        (<MovieList key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />)
      )}
    </div>
  )  
}

/*
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div>
      {isLoading ? "Loading..." : JSON.stringify(movies)}
    </div>
  )  
}
*/