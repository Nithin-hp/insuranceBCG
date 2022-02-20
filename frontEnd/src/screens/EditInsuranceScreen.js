
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { INSURANCE_EDIT_RESET } from '../constants/insuranceConstants'
import {editInsurance} from '../actions/insuranceActions'
import Loader from '../components/Loader'
import { withRouter } from "react-router"

const EditAssignment = ({match,history}) => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.insuranceList)
    const edit=useSelector((state)=>state.insuranceEdit)
    const { products } = productList
    const { loading, error,success } = edit
    const product = products.find((p) => p._id == match.params.id)
   
 
  const [policyId, setpolicyId] = useState(0)
  const [customerId, setcustomerId] = useState(1)
  const [customerIncomeGroup, setcustomerIncomeGroup] = useState('')
  const [dateOfPurchase, setdateOfPurchase] = useState(' ')
  const [premium, setPremium] = useState(0)
  const [error1,seterror]=useState("")
    useEffect(()=>{
     if(products.length>0){
        dispatch({type:INSURANCE_EDIT_RESET})
        setpolicyId(product.policyId)
        setcustomerId(product.customerId)
        setdateOfPurchase(product.dateofPurchase.split("T")[0])
        setcustomerIncomeGroup(product.customerIncomeGroup)
        setPremium(product.premium)
     }
      else{
          history.push('/')
      }
    },[dispatch,product])

  
  const submitHandler = (e) => {
    e.preventDefault()
     if(premium > 1000000){
          seterror("Premium should not be more than 1 million")
     }else{
        dispatch(editInsurance(match.params.id, {policyId, customerId, customerIncomeGroup, dateOfPurchase, premium}))
     }       
      }
    
  

    return (
        <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
       {loading ? (
      <Loader />
    ) : success ? <Message variant='success'>Insurance edited Successfully</Message>:" "}
     
     { error1.length>0 ? (
      <Message variant='danger'>{error1}</Message>):""}
      <FormContainer>
      
      <Form onSubmit={submitHandler}>

       

            
            <Form.Group controlId='PolicyId'>
              <Form.Label>Policy Id</Form.Label>
              <Form.Control
                type='Number'
                placeholder='Enter Policy Id name'
                value={policyId}
                onChange={(e) => setpolicyId(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Customer Id</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Customer Id'
                value={customerId}
                onChange={(e) => setcustomerId(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Customer Income group</Form.Label>
              <Form.Control
                type='textarea'
                placeholder='Enter Customer Income group'
                value={customerIncomeGroup}
                onChange={(e) => setcustomerIncomeGroup(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='Subject'>
              <Form.Label>Date of Purchase</Form.Label>
              <Form.Control
                type='date'
                placeholder='Enter Date of Purchase'
                value={dateOfPurchase}
                onChange={(e) => setdateOfPurchase(e.target.value)}
                disabled
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='Faculty Name'>
              <Form.Label>Premium</Form.Label>
              <Form.Control
                type='Number'
                placeholder='Enter Premium'
                value={premium}
                onChange={(e) => setPremium(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
    
      </FormContainer>
      </>
    )
}


export default withRouter(EditAssignment)
