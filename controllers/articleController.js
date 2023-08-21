
import Article from '../models/article';

exports.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.create({ title, content });
    res.status(201).json({ article });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ articles });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const { articleId } = req.params;
    const article = await Article.findByPk(articleId);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.status(200).json({ article });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
