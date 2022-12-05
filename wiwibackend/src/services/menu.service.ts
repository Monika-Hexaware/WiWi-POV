import { Injectable } from '@nestjs/common';
import { menuRepo } from '../repository/menu.repo';
import { menu } from '../schemas/menu.schema';

@Injectable()
export class menuService {
    constructor(
        private readonly menuRepo: menuRepo
    ) { }

    async findAll(): Promise<menu[]> {
        return this.menuRepo.findAll();
    }

    async create(data): Promise<menu> {
        data.createddate = new Date();
        return this.menuRepo.create(data);
    }

    async update(menuId, data): Promise<menu> {
        return this.menuRepo.update(menuId, data);
    }

    async delete(menuId): Promise<menu> {
        return this.menuRepo.delete(menuId);
    }
}