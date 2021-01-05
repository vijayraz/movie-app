import { FETCH_CAST_INFO_FAILURE, FETCH_CAST_INFO_REQUEST, FETCH_CAST_INFO_SUCCESS } from "./CastingActionType"

const initialCastingState = {
    loading: true,
    casting: {

    },
    error: ''
}
const castingReducer = (state = initialCastingState, action) => {
    switch (action.type) {
        case FETCH_CAST_INFO_REQUEST: return {
            ...state
        }
        case FETCH_CAST_INFO_SUCCESS: return {
            ...state,
            loading: false,
            casting: action.payload
        }
        case FETCH_CAST_INFO_FAILURE: return {
            ...state,
            loading: false,
            casting: {},
            error: action.error
        }
        default : return state
    }
}

export default castingReducer;