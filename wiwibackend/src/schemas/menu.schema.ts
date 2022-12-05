import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   
   @Prop()
   fooditem: string; 
   
   @Prop()
   description: string; 
   
   @Prop()
   toppings: string; 
   
   @Prop()
   price: int; 
   
}

export const menuSchema = SchemaFactory.createForClass(menu);