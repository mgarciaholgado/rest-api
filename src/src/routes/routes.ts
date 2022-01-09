import {Request, Response, Router } from 'express'
import { Bicis } from '../model/bicis'
import { db } from '../database/database'

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    private getBicis = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Bicis.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }

    misRutas(){
        this._router.get('/Bicis', this.getBicis)
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
