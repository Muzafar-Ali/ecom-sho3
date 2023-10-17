export const filterProducts = (category: any, products: any, isOutOfStock?: boolean, showSortedValue?:string) => {
  let filteredProducts = products;

  // Filter by category if category filters are applied
  if (category?.length > 0) {
    filteredProducts = filteredProducts.filter((item: any) => {
      return category.includes(item.category);
    });
  }

  // Filter out-of-stock products if isOutOfStock is false
  if (isOutOfStock) {
    filteredProducts = filteredProducts.filter((item: any) => {
      return !item.outofstock; // Assuming there's a property called 'outofstock' in your product data
    });
  }

  // Sort products based on price if showSortedValue is provided
  if (showSortedValue === 'price high to low') {
    filteredProducts = filteredProducts.sort((a: any, b: any) => b.price - a.price);
  } else if (showSortedValue === 'price low to high') {
    filteredProducts = filteredProducts.sort((a: any, b: any) => a.price - b.price);
  }

  return filteredProducts;
};