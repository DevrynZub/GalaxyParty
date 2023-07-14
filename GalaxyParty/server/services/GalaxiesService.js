import { dbContext } from "../db/DbContext.js"



class GalaxiesService {

  async getGalaxies() {
    const galaxy = await dbContext.Galaxies.find()

    return galaxy
  }

  async createGalaxies(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)

    return galaxy
  }













}


export const galaxiesService = new GalaxiesService()