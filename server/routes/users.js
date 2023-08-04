const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getUserById);
router.post('/api/users/new', createUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);

module.exports = router;
