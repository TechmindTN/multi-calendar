// routes/privilege.js
const express = require('express');
const privilegeController = require('../controllers/privilegeController');
const authenticateJWT = require('../middleware/authMiddleware'); // Protect routes

const router = express.Router();

// Routes for privilege
router.get('/', authenticateJWT, privilegeController.getPrivileges); // Get privilege profile (protected)
router.post('/', authenticateJWT, privilegeController.createPrivilege); // Get privilege profile (protected)

router.get('/:id', authenticateJWT, privilegeController.getPrivilege); // Get privilege profile (protected)

router.put('/:id', authenticateJWT, privilegeController.updatePrivilege); // Get privilege profile (protected)
router.delete('/:id', authenticateJWT, privilegeController.deletePrivilege); // Get privilege profile (protected)


module.exports = router;
