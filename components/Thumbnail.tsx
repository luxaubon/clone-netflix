
import Image from 'next/image'
import { Movie } from '@/interfaces/move'

interface Props {
    movie: Movie
  }

function Thumbnail({movie} : Props) {
    // console.log(movie);
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    > 
      
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        alt='Movie Poster'
        fill
      />
       <h1>
            {movie?.title || movie?.original_name}
        </h1>
    </div>
  )
}

export default Thumbnail