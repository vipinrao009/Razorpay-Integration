import express from "express"
import { checkout , paymentverification } from "../controllers/payment.js"

const router = express.Router()

router.route('/checkout').post(checkout)
router.route('/paymentverification').post(paymentverification)

export default router