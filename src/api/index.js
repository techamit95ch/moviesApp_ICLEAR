import axios from "axios";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1";
// const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

// export const fetchPosts = (page) => axios.get(`${url}&page=${page}`);

// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const fetchData = async () => {
  try {
    const data = await fetch(url);
    // console.log(data.json());
    return data.json();
  } catch (err) {
    console.log(err);
  }
};
