import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import {REQUEST_API_DATA, receiveApiData  } from '../actions';
import { REQUEST_API_DATA, receiveApiData ,requestApiData} from "../actions";
import {fetchData } from '../api'
// const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
// const url =
//   "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1";
/* 
function* fetchNews() {
  const json = yield fetch(`https://newsapi.org/v1/articles? 
        source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc`)
        .then(response => response.json(), );    
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
} */
// function* fetchMovies(page) {
    // function* fetchNews() {
    //     const json = yield fetch(`https://newsapi.org/v1/articles? 
    //           source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc`)
    //           .then(response => response.json(), );    
    //     yield put({ type: "NEWS_RECEIVED", json: json.articles, });
    //   }
/* function* fetchMovies() {  
    const data = yield fetch(url).then((response) => response.json());    
    yield put({ type: "FETCH", payload: data });    
} */
/* function* actionWatchMovie(page) {
       yield takeLatest('FETCH_ALL', fetchMovies(page))
  } */
  function* getApiData(action) {
    try {
      // do api call
      const data = yield call(fetchData);
      yield put(receiveApiData(data));
    //   console.log(requestApiData);
    //   console.log(data);
      

    } catch (e) {
      console.log(e);
    }
  }
/* function* actionWatchMovie() {
  yield takeLatest("FETCH_ALL", fetchMovies());
}
function* actionApiData() {
    // console.log (fetchNews())
  yield takeLatest(REQUEST_API_DATA, getApiData());
} */
/* export default function* rootSaga() {
  yield all([
    //    actionWatcher(),
    // actionWatchMovie(),
    actionApiData(),
  ]);
}
 */
/* export default function* rootSaga() {
    console.log(getApiData);
    yield takeLatest(REQUEST_API_DATA, getApiData);
  } */
  export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
  }