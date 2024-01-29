const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');


 // find all categories(DONE)
  // be sure to include its associated Products(DONE)
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
        Product,
        through: ProductTag
        }
      ],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  });





 // find one category by its `id` value(DONE)
  // be sure to include its associated Products(DONE)
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


 // create a new category(DONE)
  router.post('/', async (req, res) => {
  const allCategories = await Category.create(req.body);

  return res.json(allCategories);
 
});




 // update a category by its `id` value(DONE)
router.put('/:id', async (req, res) => {
  const allCategories = await Category.findByPk(req.params.id);

  return res.json(allCategories);
 
});





// delete a category by its `id` value(DONE)
router.delete('/:id', async (req, res) => {

  const allCategories = await Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  });

  return res.json(allCategories);
});

module.exports = router;
