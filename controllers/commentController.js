import Comment from '../models/comment';
exports.createComment = async (req, res) => {
  try {
    const { content, articleId } = req.body;
    const comment = await Comment.create({ content, ArticleId: articleId });
    res.status(201).json({ comment });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getCommentsForArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const comments = await Comment.findAll({
      where: { ArticleId: articleId },
    });
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
