import axios from 'axios'
//import products from '../products'
import {
    INSURANCE_LIST_REQUEST,INSURANCE_LIST_SUCCESS,INSURANCE_LIST_FAIL,
   INSURANCE_EDIT_REQUEST,INSURANCE_EDIT_SUCCESS,INSURANCE_EDIT_FAIL,INSURANCE_EDIT_RESET,
  } from '../constants/insuranceConstants'




export const getInsuranceList = (keyword = '', pageNumber = '') => async (
    dispatch,
 getstate) => {
  //const  {assignmentList:{products}}=getstate()
    try {
   
      dispatch({ type: INSURANCE_LIST_REQUEST })
      const { data } = await axios.get(
      `/api/insurance?keyword=${keyword}&pageNumber=${pageNumber}`
    )
    console.log(data)
   dispatch({
          
        type: INSURANCE_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type:INSURANCE_LIST_FAIL,
       payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      })
    }
  }

//   export const assignmentDetail = (id) => async (
//     dispatch,
//  getstate) => {
//   const {
//     userLogin: { userInfo }
//   } = getstate()
//   const {
//     facultyLogin: { facultyInfo }
//   } = getstate()



//     try {
//      dispatch({ type: ASSIGNMENT_DETAIL_REQUEST })
//      const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo?userInfo.token:facultyInfo.token}`,
//       },
//     }
//      const { data } = await axios.get(`/api/assignment/${id}`,config)
//    // console.log(data)
//    dispatch({
          
//         type: ASSIGNMENT_DETAIL_SUCCESS,
//         payload: data,
//       })
//     } catch (error) {
//       dispatch({
//         type:ASSIGNMENT_DETAIL_FAIL,
//         payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//       })
//     }
//   }




  export const editInsurance = (id,prods) => async (
    dispatch ,getstate) => 
    {
      try {
        dispatch({type: INSURANCE_EDIT_REQUEST})
        const config = {
          headers: {
            'Content-Type': 'application/json'},}
  
            const { data } = await axios.put(
              `/api/insurance/edit-insurance/${id}`,
              prods,
              config
            )
       
        dispatch({type:  INSURANCE_EDIT_SUCCESS, payload:data })
      } 
      catch (error) {
        dispatch({
          type: INSURANCE_EDIT_FAIL,
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
      }
  }

  