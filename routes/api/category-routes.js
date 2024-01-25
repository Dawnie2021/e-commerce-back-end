const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', async (req, res) => {
  const allCategories = await Category.findAll();
  const allProducts = await Category.findAll();

  return res.json(allCategories);
  return res.json(allProducts);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const allCategories = await Category.create(req.body);

  return res.json(allCategories);
  // create a new category
});

router.put('/:id', async (req, res) => {
  const allCategories = await Category.findByPk(req.params.id);

  return res.json(allCategories);
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const allCategories = await Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  });

  return res.json(allCategories);
});

module.exports = router;
