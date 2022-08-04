const express = require('express');
const faker = require('faker')
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      categorie: faker.commerce.productAdjetive(),
    },
    {
      categorie: faker.commerce.productAdjetive(),
    }
  ])
});

router.get('/:id', (req, res) =>{
  const { id } =req.params;
  res.json({
    id,
    categorie: faker.commerce.productAdjetive(),
  })
})
router.get('/:categorieId/products/:productId', (req, res) => {
  const { categorieId, productId } = req.params;
  res.json({
    categorieId,
    productId
  })
})

module.exports = router;
