import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getCredits(movieId);
        setCast(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCast();
  }, [movieId]);
  return (
    <>
    {cast.length > 0 ? (<ul>
        
        {cast.map(({ cast_id, character, name, profile_path }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="100px"
              height="150px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>) : (<p>We don't have any cast for this movie.</p>)}
      
    </>
  );
}
