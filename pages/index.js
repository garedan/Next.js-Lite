import { useState, useEffect } from 'react';
import { Navbar } from '../components/navbar'
import Movie from "../components/Movie";

const FEATURED_API = 
"https://imdb-api.com/API/AdvancedSearch/k_k8zws5y8?user_rating=1.0,10&groups=top_250&count=100&sort=alpha,asc";  

const SEARCH_API = "https://imdb-api.com/API/AdvancedSearch/k_k8zws5y8/?title=";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
		getMovies(FEATURED_API);
	}, []);

	const getMovies = async (API) => {
		await fetch(API)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			setMovies(data.results)
		})
         
	}

    const handleOnSubmit = (e) => {
		e.preventDefault();

		if(search) {
			getMovies(SEARCH_API + search)
			setSearch("");
		}
	}

	const handleOnChange = (e) => {
		setSearch(e.target.value);
	}


    return (
        <>
            <header className="flex justify-between p-4 bg-black">
                    <h3 className=" text-amber-300 font-bold p-2">Movie IMDB Search</h3>
                    <form onSubmit={handleOnSubmit} className="justify-end">
                        <input className="bg-transparent p-2 text-base text-amber-300
                            focus:outline outline-offset-2 outline-amber-300 placeholder:text-amber-300" 
                                type="text" 
                                placeholder="Search..."
                                value={search}
                                onChange={handleOnChange}
                        />
                    </form>
                </header>
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 justify-between bg-amber-400">  
                    { movies?.map(movie => (
                        <Movie 
                            key = {movie.id} 
                            title = {movie.title}
                            description = {movie.description}
                            image = {movie.image} 
                            plot = {movie.plot} 
                            contentRating = {movie.contentRating} 
                            imDbRating = {movie.imDbRating} 
                        />
                    ))}
            </div>
        </>
    )
}

export default Home