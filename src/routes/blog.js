const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog');

//! [POST] : /v1/blog/post
router.post(
	'/post',
	[
		body('title')
			.isLength({ min: 5 })
			.withMessage('Input title yang anda masukan tidak sesuai'),
		body('body')
			.isLength({ min: 5 })
			.withMessage('Title title yang anda masukan tidak sesuai'),
	],
	blogController.createBlogPost
);

//! [GET] : /v1/blog/posts
router.get('/posts', blogController.getAllBlogPost);

//! [GET] : /v1/blog/posts/id
router.get('/post/:postId', blogController.getBlogPostById);

module.exports = router;
