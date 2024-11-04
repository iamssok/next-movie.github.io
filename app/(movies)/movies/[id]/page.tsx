import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilar from "../../../../components/movie-similar";
import { Metadata } from "next";

interface Params {
  id: string;
}
interface MovieDetailProps {
  params: Params;
}

export async function generateMetadata({ params }: MovieDetailProps): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie videos</h1>}>
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  )
}