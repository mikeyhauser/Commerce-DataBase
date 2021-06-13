const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) =>
//************************************************** */
// finding all categories
// be sure to include its associated Products*********
{
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    })
    res.json(categoryData)
  }
  catch (err) {
  }
});




router.get('/:id', async (req, res) =>
//**************************************************
// find one category by its `id` value
// be sure to include its associated Products
{
  try {
    const categoryData = await Category.findByPk(req.params.id
      , {
        include: [Product],
      })
    res.json(categoryData)
  }
  catch (err) {
  }
});




router.post('/', async (req, res) => {
  //************************************************
  // create a new category
  const category = req.body;
  try {
    // ...body spread operator 
    const newCategory = await Category.create({ ...category });
    res.json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.put('/:id', async (req, res) => {
  //************************************************
  // update a category by its `id` value
  try {
    const [updatedCategory] = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedCategory > 0) {
      
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', (req, res) => {
    //************************************************
  // delete a category by its `id` value
  try {
    const [deletedCategory] = Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedCategory > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
