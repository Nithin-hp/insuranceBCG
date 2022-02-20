import asyncHandler from 'express-async-handler'
import insurance from '../models/insuranceModel.js'


const getAllIssurance = asyncHandler(async (req, res) => {
  const pageSize = 100
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword ? { "$or": [ { policyId: Number(req.query.keyword) }, {customerId:Number(req.query.keyword)} ]} : {}
  const count = await insurance.countDocuments({ ...keyword })
  const products = await insurance.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
   
  })

const editInsurance = asyncHandler(async (req, res) => {

  const {policyId, customerId, customerIncomeGroup, dateOfPurchase, premium}=req.body

  const queryResult= await insurance.findById(req.params.id)

 if (queryResult) {
  queryResult.policyId= Number(policyId)
  queryResult.customerId=Number(customerId)
  queryResult.customerIncomeGroup=customerIncomeGroup
  queryResult.dateOfPurchase=dateOfPurchase
  queryResult.premium=Number(premium)

  let insuranceObject = new insurance(queryResult)
  const UpdatedInsurance= await insuranceObject.save()
  res.status(201).json(UpdatedInsurance)

 }else{
  res.status(400)
  throw new Error('No record Found')
}

})


const chartView=asyncHandler(async (req, res) => 
{
   const {region } =req.body
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const countMonths=[0,0,0,0,0,0,0,0,0,0,0,0] //initial  count for each month to zero
  let filterQuery ={}
  if(region!=''){
  filterQuery.customerRegion=region
  }
  console.log(filterQuery)
  const insuranceList = await insurance.find(filterQuery)

  

  // Loop through the doucments the to get the day of purchase and get the month of it , increment the count of the month in the  array 
    insuranceList.forEach((x)=>{
      const d = new Date(x.dateofPurchase);
      let name = d.getMonth();
      let count=countMonths[name]+1
      countMonths[name]=count
    })
  res.json({ countMonths })
   
})

export {getAllIssurance,editInsurance,chartView}