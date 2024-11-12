import type {AxiosInstance} from "axios"
import type {Product} from "@/types"
import type {Readable, Createable, Updateable, Deleteable} from "@/services/types"
import {ProductModel} from "@/models/product.model"

export class ProductsService 
implements Readable<Product>, Createable<Product>,
           Updateable<Product>, Deleteable<Product> 
{
    baseURL: string = "/products"

    constructor(public httpClient: AxiosInstance) { }

    /**
     * Get products
     * @param params
     */
    async get(params: any): Promise<Product[]> {
        const response = await this.httpClient.get<Product[]>(this.baseURL, {params});
        return response.data.map((product) => new ProductModel(product));
    }

    /**
     * Get product by id
     * @param id
     */
    async getById(id: number): Promise<Product> {
        const response = await this.httpClient.get<Product>(this.baseURL, {params: {id}});
        return new ProductModel(response.data);
    }

    // create new product
    async create(data: Product): Promise<Product> {
        const response = await this.httpClient.post<Product>(this.baseURL, data)
        return new ProductModel(response.data)
    }  

    // update product by id
    async update(id: number, data: Product): Promise<Product> {
        const response = await this.httpClient.put<Product>(`${this.baseURL}/${id}`, data)
        return new ProductModel(response.data)
    }

    // delete product by id
    async delete(id: number): Promise<boolean> {
        const response = await this.httpClient.delete<boolean>(`${this.baseURL}/${id}`)
        return response.data
    }
}
