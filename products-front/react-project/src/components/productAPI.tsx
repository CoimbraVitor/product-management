import axios, { AxiosResponse } from "axios";

const apiUrl = "http://localhost:8080/products";


export const listProducts = (): Promise<AxiosResponse<ProductData[]>> => {
    return axios.get<ProductData[]>(apiUrl);
  };

export const getProductsById = (id: string) => {
  const url = `${apiUrl}/${id}`;
  return axios.get(url);
};

export const createProduct = (
  name: string,
  image: string,
  description: string,
  price: number
): Promise<AxiosResponse<ProductData>> => {
  const newProduct = {
    name: name,
    image: image,
    description: description,
    price: price
  };

  return axios.post(apiUrl, newProduct);
};


  export const deleteProduct = (id:string):Promise<AxiosResponse<void>> => {
        const url = `${apiUrl}/${id}`;
        return axios.delete(url)
  }
