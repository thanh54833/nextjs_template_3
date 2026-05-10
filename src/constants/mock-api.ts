////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { faker } from '@faker-js/faker';
import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Product data
export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

// Mock product data store
export const fakeProducts = {
  records: [] as Product[], // Holds the list of product objects

  // Initialize with sample data
  initialize() {
    const sampleProducts: Product[] = [];

    const realProductImages: Record<number, { name: string; photo_url: string; category: string; price: number }> = {
      1: {
        name: 'Apple AirPods Pro 2nd',
        photo_url: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 230.00
      },
      2: {
        name: 'Apple AirPods Pro 2nd',
        photo_url: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 230.00
      },
      3: {
        name: 'MacBook Pro 14"',
        photo_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 1999.00
      },
      4: {
        name: 'Samsung Galaxy S24',
        photo_url: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 899.00
      },
      5: {
        name: 'Sony WH-1000XM5',
        photo_url: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 348.00
      },
      6: {
        name: 'Apple HomePod Mini',
        photo_url: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 99.00
      },
      7: {
        name: 'Bose QuietComfort 45',
        photo_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 329.00
      },
      8: {
        name: 'Apple AirPods 3rd Gen',
        photo_url: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 179.00
      },
      9: {
        name: 'iPad Pro 12.9"',
        photo_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 1099.00
      },
      10: {
        name: 'MacBook Air M2',
        photo_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 1199.00
      },
      11: {
        name: 'iMac 24"',
        photo_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 1299.00
      },
      12: {
        name: 'Apple Watch Ultra',
        photo_url: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop',
        category: 'Electronics',
        price: 799.00
      }
    };

    function generateRandomProductData(id: number): Product {
      const categories = [
        'Electronics',
        'Furniture',
        'Clothing',
        'Toys',
        'Groceries',
        'Books',
        'Jewelry',
        'Beauty Products'
      ];

      const realProduct = realProductImages[id];

      return {
        id,
        name: realProduct?.name || faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        created_at: faker.date.between({ from: '2022-01-01', to: '2023-12-31' }).toISOString(),
        price: realProduct?.price || parseFloat(faker.commerce.price({ min: 5, max: 500, dec: 2 })),
        photo_url: realProduct?.photo_url || `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop`,
        category: realProduct?.category || faker.helpers.arrayElement(categories),
        updated_at: faker.date.recent().toISOString()
      };
    }

    // Generate remaining records
    for (let i = 1; i <= 20; i++) {
      sampleProducts.push(generateRandomProductData(i));
    }

    this.records = sampleProducts;
  },

  // Get all products with optional category filtering and search
  async getAll({ categories = [], search }: { categories?: string[]; search?: string }) {
    let products = [...this.records];

    // Filter products based on selected categories
    if (categories.length > 0) {
      products = products.filter((product) => categories.includes(product.category));
    }

    // Search functionality across multiple fields
    if (search) {
      products = matchSorter(products, search, {
        keys: ['name', 'description', 'category']
      });
    }

    return products;
  },

  // Get paginated results with optional category filtering, search, and sorting
  async getProducts({
    page = 1,
    limit = 10,
    categories,
    search,
    sort
  }: {
    page?: number;
    limit?: number;
    categories?: string | string[];
    search?: string;
    sort?: string;
  }) {
    await delay(1000);
    const categoriesArray = categories
      ? Array.isArray(categories)
        ? categories
        : String(categories).split(/[.,]/)
      : [];
    const allProducts = await this.getAll({
      categories: categoriesArray,
      search
    });

    // Sorting
    if (sort) {
      try {
        const sortItems = JSON.parse(sort) as {
          id: string;
          desc: boolean;
        }[];
        if (sortItems.length > 0) {
          const { id, desc } = sortItems[0];
          allProducts.sort((a, b) => {
            const aVal = (a as Record<string, unknown>)[id];
            const bVal = (b as Record<string, unknown>)[id];
            if (typeof aVal === 'number' && typeof bVal === 'number') {
              return desc ? bVal - aVal : aVal - bVal;
            }
            const aStr = String(aVal ?? '').toLowerCase();
            const bStr = String(bVal ?? '').toLowerCase();
            return desc ? bStr.localeCompare(aStr) : aStr.localeCompare(bStr);
          });
        }
      } catch {
        // Invalid sort param — ignore
      }
    }

    const totalProducts = allProducts.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedProducts = allProducts.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_products: totalProducts,
      offset,
      limit,
      products: paginatedProducts
    };
  },

  // Get a specific product by its ID
  async getProductById(id: number) {
    await delay(3000); // Simulate a slow API call

    // Find the product by its ID
    const product = this.records.find((product) => product.id === id);

    if (!product) {
      return {
        success: false,
        message: `Product with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Product with ID ${id} found`,
      product
    };
  },

  // Create a new product
  async createProduct(data: Omit<Product, 'id' | 'created_at' | 'updated_at' | 'photo_url'>) {
    await delay(1000);

    const newProduct: Product = {
      ...data,
      id: this.records.length + 1,
      photo_url: `https://api.slingacademy.com/public/sample-products/${this.records.length + 1}.png`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.records.push(newProduct);

    return {
      success: true,
      message: 'Product created successfully',
      product: newProduct
    };
  },

  // Update an existing product
  async updateProduct(
    id: number,
    data: Omit<Product, 'id' | 'created_at' | 'updated_at' | 'photo_url'>
  ) {
    await delay(1000);

    const index = this.records.findIndex((product) => product.id === id);

    if (index === -1) {
      return {
        success: false,
        message: `Product with ID ${id} not found`
      };
    }

    this.records[index] = {
      ...this.records[index],
      ...data,
      updated_at: new Date().toISOString()
    };

    return {
      success: true,
      message: 'Product updated successfully',
      product: this.records[index]
    };
  },

  // Delete a product
  async deleteProduct(id: number) {
    await delay(1000);

    const index = this.records.findIndex((product) => product.id === id);

    if (index === -1) {
      return { success: false, message: `Product with ID ${id} not found` };
    }

    this.records.splice(index, 1);

    return {
      success: true,
      message: 'Product deleted successfully'
    };
  }
};

// Initialize sample products
fakeProducts.initialize();
