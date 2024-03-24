import express from "express"
import { checkout } from "../controllers/payment.js"

const router = express.Router()

router.route('/checkout').post(checkout)

export default router