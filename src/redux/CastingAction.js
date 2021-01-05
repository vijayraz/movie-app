import { FETCH_CAST_INFO_FAILURE, FETCH_CAST_INFO_REQUEST, FETCH_CAST_INFO_SUCCESS } from "./CastingActionType"

const fetchCastingInfoRequest  = (movieId) =>{
    return {
       type:FETCH_CAST_INFO_REQUEST,
       movieId
    }
}
const fetchCastingInfoSuccess = (casting) =>{
    return{
       type:FETCH_CAST_INFO_SUCCESS,
        payload:casting
    }
}
const fetchCastingInfoFailure = (error)=>{
    return {
        type:FETCH_CAST_INFO_FAILURE,
        payload:error
    }
}

export {
    fetchCastingInfoFailure,
    fetchCastingInfoSuccess,
    fetchCastingInfoRequest
}