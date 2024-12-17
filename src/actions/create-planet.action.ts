import { planetsApi } from '../api/planetsApi';
import type { Planet } from '../interfaces/planet.interface';

export const createPlanetAction = async (planet: Partial<Planet>) => {
  try {
    const response = await planetsApi.post<Planet>('/', planet);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("The planet could not be created");
  }
};
