// import * from '../api';
// export const getNews = () => ({
//     type: 'FETCH_ALL',
// });
// export const getMovies = () => ({
//     type: 'FETCH_ALL',
// });

export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });