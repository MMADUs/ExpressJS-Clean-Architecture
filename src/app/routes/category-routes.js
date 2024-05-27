import express from 'express'
import { CreateCategory } from '../controller/category-controller.js'

const router = express.Router()

router.post('/', CreateCategory)

export default router