const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middleware/authMiddleware');

// Require authentication middleware
router.use(authMiddleware);

router.post('/create', articleController.createArticle);
router.get('/all', articleController.getAllArticles);
router.get('/:articleId', articleController.getArticleById);

module.exports = router;
