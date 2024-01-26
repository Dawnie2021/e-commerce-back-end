const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  });

router.get('/:id', async (req, res) => {
  try {
   const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product}],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  });

router.post('/', async (req, res) => {
  const allCategories = await Category.create(req.body);

  return res.json(allCategories);
 
});

router.put('/:id', async (req, res) => {
  const allCategories = await Category.findByPk(req.params.id);

  return res.json(allCategories);
 
});

router.delete('/:id', async (req, res) => {

  const allCategories = await Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  });

  return res.json(allCategories);
});

module.exports = router;
