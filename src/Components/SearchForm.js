import React from 'react';
import {useGlobalContext} from "../Context/context"

function SearchForm() {
    const {query, setQuery, error} = useGlobalContext();
    console.log(query);


  return (
    <form action="" className="search_form" onSubmit={(e) => e.preventDefault()} >
        <h2 className="search_movies">
            Search Movies
        </h2>
        <input type="text" className='form-input' value={query} onChange={(e) => setQuery(e.target.value)} />
        {error.show && <div className="error">
            {error.msg}
        </div> }
    </form>
  )
}

export default SearchForm
