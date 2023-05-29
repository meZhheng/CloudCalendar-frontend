import { publicReducer } from "./publicSlice";
import { mdReducer } from "./mdSlice";

const AllReducer = {
  public: publicReducer,
  mdDocment: mdReducer,
};

export default AllReducer;