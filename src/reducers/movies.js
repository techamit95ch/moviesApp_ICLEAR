// import { FETCH_ALL} from '../constants/actionTypes';
// import { RECEIVE_API_DATA } from "../actions";

// export default (state = {}, {type,data} ) => {
//   switch (type) {
//     case RECEIVE_API_DATA:
//       return data;
//         default:
//       return state;
//   }
// };
import { RECEIVE_API_DATA } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      // console.log(data);
      return state;
  }
};