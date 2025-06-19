import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { UserRoute } from './user.Route'
const router = express.Router()

router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({message: "APIs V1 are ready to use."})
})
router.use('/users',UserRoute)

export const APIs_V1 = router