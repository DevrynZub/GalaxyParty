
import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";




export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGalaxies)
  }


  async getGalaxies(req, res, next) {
    try {
      const galaxy = await galaxiesService.getGalaxies()
      res.send(galaxy)
    } catch (error) {
      next(error)
    }

  }

  async createGalaxies(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxiesService.createGalaxies(galaxyData)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

}

