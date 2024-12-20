import { ApiService } from './api.services';

class ApiClient {
   constructor() {
      this.apiService = new ApiService();
   }
}

export { ApiClient };