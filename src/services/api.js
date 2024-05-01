import axios from "axios"; 

export const fetchMovie = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: {language: "en-US"},
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjY5YzAwN2JjNTgwMWMzODVmNTllZWZjYmViZDNmOCIsInN1YiI6IjY2MmUzYTZlNWE3ODg0MDEyYWMxZDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcvBO4cYDY1ofcfr6pKzV0YumrdS-0s-thXFdlIO8yA"
    },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;    
    }
};

export const fetchMoviebyId = async(movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjY5YzAwN2JjNTgwMWMzODVmNTllZWZjYmViZDNmOCIsInN1YiI6IjY2MmUzYTZlNWE3ODg0MDEyYWMxZDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcvBO4cYDY1ofcfr6pKzV0YumrdS-0s-thXFdlIO8yA"

  },
};
try {
  const response = await axios.request(options);
  return response.data;
} catch (error) {
  console.error(error);
  return null;
}
};

export const fetchMovieCredits = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchMovieReviews = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchMovieByQuery = async (query) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: query,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


// axios.get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));