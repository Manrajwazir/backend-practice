import express from 'express'
import db from '../db.js'

const router = express.Router()

// Get all todos for the logged in user
router.get('/', (req, res) => {})

// create a new todo
router.post('/', (req, res) => {}

)

// update a todo
router.put('/:id', (req, res) => {})

// delete a todo
router.delete('/:id', (req, res) => {})

export default router