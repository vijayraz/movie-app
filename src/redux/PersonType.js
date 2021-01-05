import {
    FETCH_PERSON_INFO_FAILURE, FETCH_PERSON_INFO_REQUEST, FETCH_PERSON_INFO_SUCCESS,
    FETCH_PERSON_EXT_FAILURE, FETCH_PERSON_EXT_REQUEST, FETCH_PERSON_EXT_SUCCESS, FETCH_PERSON_MOVIE_CREDIT_REQUEST, FETCH_PERSON_MOVIE_CREDIT_SUCCESS, FETCH_PERSON_MOVIE_CREDIT_FAILURE
} from "./PersonActionType"

const fetchPersonRequest = (personId) => {
    return {
        type: FETCH_PERSON_INFO_REQUEST,
        personId
    }
}
const fetchPersonSuccess = (persons) => {
    return {
        type: FETCH_PERSON_INFO_SUCCESS,
        payload: persons
    }
}
const fetchPersonFailure = (error) => {
    return {
        type: FETCH_PERSON_INFO_FAILURE,
        payload: error
    }
}
const fetchPersonMovieCreditRequest = (personId) => {
    return {
        type: FETCH_PERSON_MOVIE_CREDIT_REQUEST,
        personId
    }
}
const fetchPersonMovieCreditSuccess = (persons) => {
    return {
        type: FETCH_PERSON_MOVIE_CREDIT_SUCCESS,
        payload: persons
    }
}
const fetchPersonMovieCreditFailure = (error) => {
    return {
        type: FETCH_PERSON_MOVIE_CREDIT_FAILURE,
        payload: error
    }
}
const fetchExternalLinkRequest = (personId) => {
    return {
        type: FETCH_PERSON_EXT_REQUEST,
        personId
    }
}
const fetchExternalLinkSuccess = (externalLinks) => {
    return {
        type: FETCH_PERSON_EXT_SUCCESS,
        payload: externalLinks
    }
}
const fetchExternalLinkFailure = (error) => {
    return {
        type: FETCH_PERSON_EXT_FAILURE,
        payload: error
    }
}

export {
    fetchPersonFailure,
    fetchPersonSuccess,
    fetchPersonRequest,
    fetchExternalLinkFailure,
    fetchExternalLinkSuccess,
    fetchExternalLinkRequest,
    fetchPersonMovieCreditRequest,
    fetchPersonMovieCreditSuccess,
    fetchPersonMovieCreditFailure
}