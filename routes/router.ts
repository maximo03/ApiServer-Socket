import { Router, Request, Response} from 'express';

export const router = Router();

router.get('/mensajes',(req: Request, res: Response) => {
     res.json({
         estado:'200 OK',
         mensaje:'ESTE ES EL METODO GET'
     });
});

/*********************************************************/

router.post('/mensajes',(req: Request, res: Response) => {
    
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    
    res.json({
        estado:'200 OK',
        cuerpo,
        de
    });
});

/*********************************************************/

router.post('/mensajes/:id',(req: Request, res: Response) => {
    
    const id = req.params.id;
    
    res.json({
        estado:'200 OK',
        mensaje:'el numero es: '+id
    });
});

/*********************************************************/








/*********************************************************/
export default router;