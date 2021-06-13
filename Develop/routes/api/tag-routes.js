const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


  // find all tags
router.get('/', async (req, res) =>
{
  try {
    const tagData = await Tag.findAll({
      include: [Product],
    })
    res.json(tagData)
  }
  catch (err) {
  }
});


  // find a single tag by its `id`
router.get('/:id', async (req, res) =>
{
  try {
    const tagData = await Tag.findByPk(req.params.id, 
      {
      include: [Product],
    })
    res.json(tagData)
  }
  catch (err) {
  }
});






  // create a new tag

router.post('/', async (req, res) =>{
  try {
    const tagData = await Tag.create(req.body)
    res.json(tagData)
  }
  catch (err) {
  }
});



router.put('/:id', async (req, res) => {
  //************************************************
  // update a tag by its `id` value
  try {
    const [updatedTag] = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedTag > 0) {
      
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
// delete a tag by its `id` value
try {
  const [deletedTag] = Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (deletedTag > 0) {
    res.status(200).end();
  } else {
    res.status(404).end();
  }
} catch (err) {
  res.status(500).json(err);
}

});

module.exports = router;
