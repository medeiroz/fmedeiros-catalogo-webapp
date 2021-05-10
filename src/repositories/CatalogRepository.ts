import { IProduct } from './../entities/IProduct';
import { Repository } from "./Repository";

class CatalogRepository extends Repository {
  async list() {
    await this.delay(2000);
    return this.instance.get<IProduct[]>('catalog');
  }

  async getById(id: string) {
    await this.delay(2000);
    return this.instance.get<IProduct>(`catalog/product/${id}`);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}

export { CatalogRepository };
