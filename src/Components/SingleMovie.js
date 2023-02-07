import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../API/useFetch'

function SingleMovie() {

    const {id} = useParams()
    const {isLoading, error, data:movie} = useFetch(`&i=${id}`);
    if(isLoading){
        return (
            <div className="loading">Loading...</div>
        )
    }

    if(error.show){
        return (
            <div>
                <h1> {error.msg} </h1>
                <Link to='/' classname='btn'>
                    BackToMovies
                </Link>
            </div>
        )
    }

    const { Poster : poster, Title : title, Year : year, Plot : plot} = movie;

  return (
    <div>
      <section className='single-movie' >
        <img src={poster} alt={title} />
        <div className="single-movie-info">
            <h2>{title}</h2>
            <p> {plot} </p>
            <h4> {year} </h4>
            <Link to='/' classname='btn'>
                BackToMovies
            </Link>
        </div>
      </section>
    </div>
  )
}

export default SingleMovie
