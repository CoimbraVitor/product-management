import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <Link to="/"><h1 className="text-2xl font-bold">Produtos Vitor Coimbra</h1></Link>
        <Link to="/adicionar" className="text-blue-300 hover:text-blue-100">
          Adicionar Produto
        </Link>
      </header>
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
}
