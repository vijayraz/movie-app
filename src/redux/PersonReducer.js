import {
    FETCH_PERSON_INFO_FAILURE, FETCH_PERSON_INFO_REQUEST, FETCH_PERSON_INFO_SUCCESS,
    FETCH_PERSON_EXT_FAILURE, FETCH_PERSON_EXT_REQUEST, FETCH_PERSON_EXT_SUCCESS,
    FETCH_PERSON_MOVIE_CREDIT_FAILURE, FETCH_PERSON_MOVIE_CREDIT_SUCCESS, FETCH_PERSON_MOVIE_CREDIT_REQUEST
} from "./PersonActionType";

const initialPersonState = {
    person: {},
    loading: true,
    error: ''
}
const initialExtLinkState = {
    extLinks: {},
    loading: true,
    error: ''
}
const initialMovieCreditState = {
    loading: true,
    movieCredits:{},
    error: ''
}
const personReducer = (state = initialPersonState, action) => {
    switch (action.type) {
        case FETCH_PERSON_INFO_REQUEST: return {
            ...state
        }
        case FETCH_PERSON_INFO_SUCCESS: return {
            ...state,
            loading: false,
            person: action.payload,
        }
        case FETCH_PERSON_INFO_FAILURE: return {
            ...state,
            person: {},
            loading: false,
            error: action.payload
        }

        default: return state

    }

}
const extLinkReducer = (state = initialExtLinkState, action) => {
    switch (action.type) {
        case FETCH_PERSON_EXT_REQUEST: return {
            ...state
        }
        case FETCH_PERSON_EXT_SUCCESS: return {
            ...state,
            loading: false,
            extLinks: action.payload,
        }
        case FETCH_PERSON_EXT_FAILURE: return {
            ...state,
            extLinks: {},
            loading: false,
            error: action.payload
        }

        default: return state

    }
}
const personMovieCreditReducer = (state = initialMovieCreditState, action) => {
    switch (action.type) {
        case FETCH_PERSON_MOVIE_CREDIT_REQUEST: return {
            ...state
        }
        case FETCH_PERSON_MOVIE_CREDIT_SUCCESS: return {
            ...state,
            loading: false,
            movieCredits: action.payload,
        }
        case FETCH_PERSON_MOVIE_CREDIT_FAILURE: return {
            ...state,
            movieCredits: {},
            loading: false,
            error: action.payload
        }

        default: return state

    }
}
export {
    personReducer,
    extLinkReducer,
    personMovieCreditReducer
} 