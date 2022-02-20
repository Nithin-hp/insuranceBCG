import express from 'express'
const router = express.Router()
import {getAllIssurance,editInsurance,chartView} from '../controllers/insuranceController.js'


router.get('/',getAllIssurance)
router.route("/edit-insurance/:id").put(editInsurance)
router.post('/chart-screen', chartView)

export default router