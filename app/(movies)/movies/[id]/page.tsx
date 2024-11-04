import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilar from "../../../../components/movie-similar";
import { Metadata } from "next";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<p style={{padding:"130px 0", textAlign:"center"}}>Loading movie info</p>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<p style={{padding:"130px 0", textAlign:"center"}}>Loading movie videos</p>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<p style={{padding:"130px 0", textAlign:"center"}}>Loading similar movie</p>}>
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  )
}