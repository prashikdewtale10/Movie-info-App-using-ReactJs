
import React,{useEffect,useState} from 'react'
import './App.css';
import Movie from './Components/Movie'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

function App() {
  const [movies , setMovies] = useState([]);
  const [searchterm , setSearchterm] = useState('');

  useEffect(()=>{
   fetch(API_URL)
   .then((res) => res.json())
   .then(data =>{
     if(data){
      console.log(data);
      setMovies(data.results)
     }else{
       console.log("false")
     }

   }
);
  },[])
  const submitHandler=(e) =>{
    e.preventDefault();
    if(searchterm){
      fetch(SEARCH_API+searchterm)
      .then((res)=>
          res.json())
      .then((data)=>{
          setMovies(data.results)

      });
      // setSearchterm(" ");
    }
 


  }
  const inputHandler=(e)=>{
    setSearchterm(e.target.value)
  }
  return <div>
  
      <header>
      <h1 className="title">Movie Info App</h1>
        <form onSubmit={submitHandler}>
        <input type="search" 
        className="search"
         placeholder="search ..."
         value ={searchterm}
         onChange={inputHandler} />
        </form>
      
  </header>
  <div className="mov_cont">
       {movies.map(movie =>{
        return <Movie key={movie.id} movie={movie}/>
       })}
       
    </div>
    <footer className="footer">
      &copy; Prashik Dewtale
    </footer>
  </div>

  
}

export default App;
