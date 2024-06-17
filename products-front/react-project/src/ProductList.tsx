import { useEffect, useState } from "react";
import { deleteProduct, listProducts } from "./components/productAPI";

export default function ProductList() {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await listProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Ocorreu um erro: ", error);
      }
    }
    fetchProducts();
  }, []);

  const handleDelete = async (id:string) => {
    try{
      await deleteProduct(id);
      setProducts(products.filter((product)=> product.id !== id))
    }catch (error){
      console.error("Ocorreu um erro: ", error);
    }

  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Produtos</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border rounded-md p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-green-600 font-semibold">
              Preço: R$ {product.price.toFixed(2)}
            </p>
            <img
              src={product.image}
              alt={product.name}
              className="mt-2 mx-auto max-w-full h-auto"
            />
            <button onClick={()=> handleDelete(product.id)}> Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
