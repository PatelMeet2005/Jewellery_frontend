import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    weight: '',
    image: null,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'productImage') {
      setProduct({
        ...product,
        image: files[0]
      });
    } else {
      setProduct({
        ...product,
        [name]: value
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', product.name);
formData.append('productPrice', product.price);
formData.append('productCategory', product.category);
formData.append('productWeight', product.weight);
formData.append('productImage', product.image);
formData.append('productDescription', product.description);

    try {
      const response = await fetch('http://localhost:8000/admin/addproduct', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Product added successfully!');
        // Optionally reset the form:
        setProduct({
          name: '',
          price: '',
          category: '',
          weight: '',
          image: null,
          description: ''
        });
      } else {
        console.error('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="ml-72 p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Ring, Chain, Gold)"
          value={product.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight (e.g. 10g, 20g)"
          value={product.weight}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
  type="file"
  name="productImage"
  accept="image/*"
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
