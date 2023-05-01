import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRouter from './routes/UserRoutes'
import testRouter from './routes/TestRoutes'
import coursesRouter from './routes/CourseRoutes'
import ProfileRouter from './routes/ProfileRoutes'
require('dotenv').config()
mongoose.connect
(`${process.env.MONGO_URL}`)
    .then(() => console.log('DB ok'))
    .catch((e) => console.log('DB err', e))

const router = express()

router.use(express.json())
router.use(cors())

router.listen(4000, () => {
    console.log('Server OK')
})

router.use('/auth', authRouter)
router.use('/tests', testRouter)
router.use('/courses', coursesRouter)
router.use('/profile', ProfileRouter)


