import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { menuController } from '../controllers/menu.controller';
import { menuService } from '../services/menu.service';
import { menuRepo } from '../repository/menu.repo';
import { menu, menuSchema } from '../schemas/menu.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: menu.name, schema: menuSchema }])
    ],
    controllers: [menuController],
    providers: [menuService, menuRepo],
    exports: [menuService, menuRepo]
  })
  export class menuModule { }