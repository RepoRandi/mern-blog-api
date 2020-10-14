const { validationResult } = require('express-validator');
const BlogPost = require('../models/blog');

exports.createBlogPost = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const err = new Error('Input value tidak sesuai');
		err.errorStatus = 400;
		err.data = errors.array();
		throw err;
	}

	if (!req.file) {
		const err = new Error('Image Harus Di Upload');
		err.errorStatus = 422;
		throw err;
	}

	const title = req.body.title;
	const image = req.file.path;
	const body = req.body.body;

	const Posting = new BlogPost({
		title: title,
		body: body,
		image: image,
		author: { uid: 1, name: 'Randi Maulana Akbar' },
	});

	Posting.save()
		.then((result) => {
			res.status(201).json({
				message: 'Create Blog Post Success',
				data: result,
			});
		})
		.catch((error) => {
			console.log('error:', error);
		});
};

exports.getAllBlogPost = (req, res, next) => {
	BlogPost.find()
		.then((result) => {
			res.status(200).json({
				message: 'Data blog post berhasil di panggil',
				data: result,
			});
		})
		.catch((error) => {
			next(error);
		});
};

exports.getBlogPostById = (req, res, next) => {
	const postId = req.params.postId;

	BlogPost.findById(postId)
		.then((result) => {
			if (!result) {
				const error = new Error('Blog post tidak ditemukan');
				error.errorStatus = 404;
				throw error;
			}
			res.status(200).json({
				message: 'Data blog post berhasil di panggil',
				data: result,
			});
		})
		.catch((error) => {
			next(error);
		});
};
