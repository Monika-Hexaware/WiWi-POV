import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { menuDto } from '../dto/menu-dto.dto';
import { menuService } from '../services/menu.service';


@Controller('menu')
export class menuController {
    constructor(private readonly menuService: menuService) { }

    @Post()
    async create(@Body() menuDto: menuDto) {
        const res = this.menuService.create(menuDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.menuService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() menuDto: menuDto) {
        return this.menuService.update(id, menuDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.menuService.delete(id);
    }
}