const creteProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  res.json({
    message: "Create Product Success",
    data: {
      id: 1,
      name: name,
      price: price,
    },
  });
  next();
};

const getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Product Success",
    data: [
      {
        id: 1,
        name: "Sari Gandum",
        price: 8000,
      },
    ],
  });
  next();
};

module.exports = {
  createProduct: creteProduct,
  getAllProducts: getAllProducts,
};
