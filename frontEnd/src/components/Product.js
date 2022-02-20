import React ,{useState}from 'react'
import {  Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Product = ({ product }) => {
  return (

        <>
          <tbody>
              <tr>
                <td>{product.policyId}</td>
                <td>{product.customerId}</td>
                <td>{product.premium}</td>
                <td>{product.customerGender}</td>
                <td>{product.dateofPurchase.split("T")[0]}</td>
                <td>{product.customerIncomeGroup}</td>
                <td>
                  <LinkContainer to={`/edit-isnurance/${product._id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                </td>   
              </tr> 
          </tbody>
        </>
        
  )
}

export default Product
