import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MovieListing from '../Movie/MovieListing/MovieListing';

import { APIKey } from '../../common/apis/movieApiKey';
import movieApi from '../../common/apis/movieApi';

import { addMovies } from '../../features/movies/movieSlice';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`movie?api_key=${APIKey}`);
            console.log(response.data.results, 'Home')
            dispatch(addMovies(response.data.results));
        }
        fetchMovies();
    }, [])

    return (
        <>
            <div className="banner-img"></div>
            <MovieListing />
        </>
    );
}
