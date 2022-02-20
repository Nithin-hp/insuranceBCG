import React,  {useEffect} from 'react'
import { Row, Col ,Table} from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Pagiante'
import {getInsuranceList} from '../actions/insuranceActions'


const HomeScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.insuranceList)


   const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  useEffect(() => {
    dispatch(getInsuranceList(keyword, pageNumber))
  }, [dispatch,keyword, pageNumber])
  const {loading, error, products, page, pages} = productList

  return (
    <>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ):
    products.length>0 ? (
      <>
      <h1>List of Insurance</h1>
      
      <Row>
      <Table striped bordered hover  variant="dark" >
          <thead>
            <tr>
              <th>Policy Id</th>
              <th>Customer Id</th>
              <th>Premium</th>
              <th>Gender</th>
                      <th>Date of Purchase</th>
                      <th>Income group</th>
            </tr>
          </thead>
        {products.map((product) => (
           <Product product={product} />
        ))}
          </Table>
            </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={''}
          /></>) : 
          <h1>
            No Record Found
          </h1>
          
          }
    </>
  )
}

export default HomeScreen
