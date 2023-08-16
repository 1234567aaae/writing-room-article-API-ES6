const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

// Require authentication middleware
router.use(authMiddleware);

router.post('/create', commentController.createComment);
router.get('/article/:articleId', commentController.getCommentsForArticle);

module.exports = router;
