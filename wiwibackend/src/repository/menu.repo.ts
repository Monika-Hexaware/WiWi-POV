import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { menu, menuDocument } from 'src/schemas/menu.schema';

@Injectable()
export class menuRepo {
    constructor(
        @InjectModel(menu.name)
        private readonly menuModel: Model<menuDocument>) {}

    async create(data): Promise<menu> {
        return new this.menuModel(data).save();
    }

    async findAll(): Promise<menu[]> {
        return this.menuModel.find({})
            .exec();
    }

    async update(menuId, data): Promise<menu> {
        const filter = { _id: menuId };
        return this.menuModel.findOneAndUpdate(filter, data);
    }

    async delete(menuId): Promise<menu> {
        const filter = { _id: menuId };
        return this.menuModel.findByIdAndDelete(menuId);
    }
}