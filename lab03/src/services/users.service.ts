import type {AxiosInstance} from "axios"
import type {User} from "@/types"
import type {Readable, Createable, Updateable, Deleteable} from "@/services/types"
import {UserModel} from "@/models/user.model"

export class UsersService 
implements Readable<User>, Createable<User>,
           Updateable<User>, Deleteable<User> 
{
    baseURL: string = "/users"

    constructor(public httpClient: AxiosInstance) { }

    /**
     * Get users
     * @param params
     */
    async get(params: any): Promise<User[]> {
        const response = await this.httpClient.get<User[]>(this.baseURL, {params});
        return response.data.map((user) => new UserModel(user));
    }

    /**
     * Get user by id
     * @param id
     */
    async getById(id: number): Promise<User> {
        const response = await this.httpClient.get<User>(this.baseURL, {params: {id}});
        return new UserModel(response.data);
    }

    // create new user
    async create(data: User): Promise<User> {
        const response = await this.httpClient.post<User>(this.baseURL, data)
        return new UserModel(response.data)
    }  

    // update user by id
    async update(id: number, data: User): Promise<User> {
        const response = await this.httpClient.put<User>(`${this.baseURL}/${id}`, data)
        return new UserModel(response.data)
    }

    // delete user by id
    async delete(id: number): Promise<boolean> {
        const response = await this.httpClient.delete<boolean>(`${this.baseURL}/${id}`)
        return response.data
    }
}
