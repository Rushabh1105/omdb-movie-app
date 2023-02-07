import  { useState, useEffect } from 'react';
import { API_KEY } from './key';

const API_ENDPOINT = `http://www.omdbapi.com/?&apikey=${API_KEY}`;

const useFetch = (urlParams) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({show:false, msg:""});
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);

    const fetchMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json();
        if(data.Response === "True"){
        setData(data.Search || data);
        setError({show: false, msg:""});
        }else{
        setError({show: true, msg : data.error});
        }

        setIsLoading(false);
    };

    return {isLoading, error, data};

}


export default useFetch;