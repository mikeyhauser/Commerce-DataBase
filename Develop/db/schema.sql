DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;
-- make a category and view by id, update
{
	"category_name": "sports equipment"
}
-- make a product with id in that new category and view by id
{
	"product_name": "Basketball",
	"price": 200.00,
	"stock": 3,
	"tagIds": [1, 2, 3, 4],
	"category_id": 
}
-- update that category to id 2
-- post a tag, view the new tag, update the tag, delete the tag
{
"tag_name": "gray"
}
-- delete basketball
-- delete sports equipment