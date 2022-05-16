import {
    RETRIEVE_DEFAULT_PRONUNCIATIONS
} from "../actions/types";

// const initialState = [{
//   pronunciation: "soumik"
// }, {
//   pronunciation: "satish"
// }];
const initialState = "";

const defaultpronunciationReducer = (defaultpronunciations = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_DEFAULT_PRONUNCIATIONS:
            return payload;

    

        default:
            return "";
    }
};

export default defaultpronunciationReducer;