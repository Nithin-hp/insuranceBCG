import mongoose from 'mongoose'
const { Schema } = mongoose


const insuranceSchema = new Schema({
    policyId: {
        type: Number,
        
    },
    customerId: {
        type: Number,
        
    },
    dateofPurchase:{
        type:Date
    },
    customerIncomeGroup:{
         type: String,
      
    },
    premium:{
        type: Number,
        
    },
    fuel:{
         type: String
        
    },
    customerGender:{
         type: String
       
    },
    vechileSegment:{
        type: Boolean
    
    },
    bodilyInjuryLiability:{
        type: Boolean
        
    },
    personalInjuryProtection:{
        type: Boolean
        
    },
    propertyDamageLiability:{
        type: Boolean
        
    },
    collision:{
        type: Boolean
        
    },
    comprehensive:{
        type: Boolean
        
    },
    customerRegion:{
        type: String
        
    },
    customerMaritalStatus:{
        type: Boolean
    }
})

const insurance = mongoose.model('insurance', insuranceSchema ,'insurance')

export default insurance