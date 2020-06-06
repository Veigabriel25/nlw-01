import knex from '../database/connection';
import {Request, Response} from 'express'


class ItemsController {

  async index(request:Request, response:Response){
    const items = await knex('items').select('*');
    const serializedItem = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: "http://192.168.100.4:3333/uploads/" + item.image,
      }
    });


  
    return response.json(serializedItem);
  }

}


export default ItemsController;