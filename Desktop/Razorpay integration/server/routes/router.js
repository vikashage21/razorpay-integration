import express from 'express';
import { checkout,
    paymentVerifiction
 } from '../controllers/paymentController.js';

const router = express.Router();

router.route('/checkout').post(checkout)
router.route('/paymentVerifiction').post(paymentVerifiction)
export default router;