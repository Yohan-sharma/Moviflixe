import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjhiN2U5MWU2NjkwN2M0NDk4ZDY1NWE5ODc5ZGE0NiIsInN1YiI6IjY1OTUzMjY0YTY5OGNmMjU3MzQzOWZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keXy5xqUPxPH1lEyIk86uBmjmSJwEU9C9y6p93xpjCQ"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};