import express from 'express';
import { SEVER_PORT } from '../global/enviroment';



export default class Server{

   public app: express.Application;
   public port:number;


   constructor(){
       this.app= express();
       this.port= SEVER_PORT;
   }

   start( callback:VoidFunction ) {
       this.app.listen(this.port, callback);
   }

}