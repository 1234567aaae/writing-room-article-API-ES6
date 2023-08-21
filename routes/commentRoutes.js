import express from 'express';
const router = express.Router();
import commentController from '../controllers/commentController';
import authMiddleware from '../middleware/authMiddleware';
// Require authentication middleware
router.use(authMiddleware);

router.post('/create', commentController.createComment);
router.get('/article/:articleId', commentController.getCommentsForArticle);
export default router;