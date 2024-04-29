const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjY5YzAwN2JjNTgwMWMzODVmNTllZWZjYmViZDNmOCIsInN1YiI6IjY2MmUzYTZlNWE3ODg0MDEyYWMxZDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcvBO4cYDY1ofcfr6pKzV0YumrdS-0s-thXFdlIO8yA"
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));