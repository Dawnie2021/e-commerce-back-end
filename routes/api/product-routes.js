const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        Category,


      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { moodel: Tag }],
    })
    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }

});


router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    if (req.body.tagIds) {
      await product.setTags(req.body.tagIds);
      await product.save();
      return res.status(200).json(await product.getTags());
    }

    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Tag],
    });
    product.update(req.body);
    if (req.body.tagIds) {
      await product.setTags(req.body.tagIds);
    }
    await product.save();
    await product.reload();
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
}

);

module.exports = router;
