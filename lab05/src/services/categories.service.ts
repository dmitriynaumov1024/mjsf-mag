import type {AxiosInstance} from "axios"
import type {Category} from "@/types"
import type {Readable, Createable, Updateable, Deleteable} from "@/services/types"
import {CategoryModel} from "@/models/category.model"

export class CategoriesService 
implements Readable<Category>, Createable<Category>,
           Updateable<Category>, Deleteable<Category> 
{
    baseURL: string = "/categories"

    constructor(public httpClient: AxiosInstance) { }

    /**
     * Get categories
     * @param params
     */
    async get(params: any): Promise<Category[]> {
        const response = await this.httpClient.get<Category[]>(this.baseURL, {params});
        return response.data.map((category) => new CategoryModel(category));
    }

    /**
     * Get category by id
     * @param id
     */
    async getById(id: number): Promise<Category> {
        const response = await this.httpClient.get<Category>(this.baseURL, {params: {id}});
        return new CategoryModel(response.data);
    }

    // create new category
    async create(data: Category): Promise<Category> {
        const response = await this.httpClient.post<Category>(this.baseURL, data)
        return new CategoryModel(response.data)
    }  

    // update category by id
    async update(id: number, data: Category): Promise<Category> {
        const response = await this.httpClient.put<Category>(`${this.baseURL}/${id}`, data)
        return new CategoryModel(response.data)
    }

    // delete category by id
    async delete(id: number): Promise<boolean> {
        const response = await this.httpClient.delete<boolean>(`${this.baseURL}/${id}`)
        return response.data
    }
}
