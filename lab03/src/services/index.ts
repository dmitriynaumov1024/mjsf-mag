import {CategoriesService} from "@/services/categories.service";
import {ProductsService} from "@/services/products.service";
import {UsersService} from "@/services/users.service";

import httpClient from "@/utils/http-client";

class ServiceProvider {
    /**
     * Service instances
     */
    serviceInstances: Record<string, any> = {};

    /**
     * Get category service
     */
    getCategoriesService(): CategoriesService {
        if (!this.serviceInstances.cruiseService) {
            this.serviceInstances.cruiseService = new CategoriesService(httpClient);
        }
        return this.serviceInstances.cruiseService;
    }

    getProductsService(): ProductsService {
        if (!this.serviceInstances.productsService) {
            this.serviceInstances.productsService = new ProductsService(httpClient)
        }
        return this.serviceInstances.productsService
    }

    getUsersService(): UsersService {
        if (!this.serviceInstances.usersService) {
            this.serviceInstances.usersService = new UsersService(httpClient)
        }
        return this.serviceInstances.usersService
    }

    /**
     * Set service instance
     * @param serviceName
     * @param serviceInstance
     */
    setServiceInstance(serviceName: string, serviceInstance: any): void {
        this.serviceInstances[serviceName] = serviceInstance;
    }

    /**
     * Check if service instance exists
     * @param serviceName
     */
    hasServiceInstance(serviceName: string): boolean {
        return !!this.serviceInstances[serviceName];
    }
}

const serviceProvider: ServiceProvider = new ServiceProvider();
export default serviceProvider;
