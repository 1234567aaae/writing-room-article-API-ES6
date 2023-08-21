import express from 'express';
const router = express.Router();
import articleController from '../controllers/articleController';
import authMiddleware from '../middleware/authMiddleware';

// Require authentication middleware
router.use(authMiddleware);

router.post('/create', articleController.createArticle);
router.get('/all', articleController.getAllArticles);
router.get('/:articleId', articleController.getArticleById);
export default router;
