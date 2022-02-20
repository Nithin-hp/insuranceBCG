
import {
   INSURANCE_LIST_REQUEST,INSURANCE_LIST_SUCCESS,INSURANCE_LIST_FAIL,
   INSURANCE_EDIT_REQUEST,INSURANCE_EDIT_SUCCESS,INSURANCE_EDIT_FAIL,INSURANCE_EDIT_RESET,
  } from '../constants/insuranceConstants'



export const insuranceListReducer = (state = {products:[]} , action) => {
    switch (action.type) {
      case  INSURANCE_LIST_REQUEST:
        return { loading: true, products: [] }
      case INSURANCE_LIST_SUCCESS:
        return {
           ...state,
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
        }
      case INSURANCE_LIST_FAIL:
        return { loading: false,error: action.payload }
      default:
        return state
    }
  }


export const insuranceEditReducer=(  state = { product:  []  },
  action)=>{
  
  
    switch (action.type) {
      case INSURANCE_EDIT_REQUEST:
        return { loading: true }
      case INSURANCE_EDIT_SUCCESS:
        return { loading: false, success: true, prod: action.payload }
      case INSURANCE_EDIT_FAIL:
        return { loading: false, error: action.payload }
        case INSURANCE_EDIT_RESET:
          return {}
      default:
        return state
    }
  
  }

