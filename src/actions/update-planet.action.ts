import { planetsApi } from '../api/planetsApi';
import type { Planet } from '../interfaces/planet.interface';

const sleep = async () => new Promise((r) => setTimeout(r, 2000));

export const upadatePlanetAction = async (planet: Planet) => {
  try {
    await sleep();
    throw new Error('Error test');

    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
    console.log('Updated planet');

    return response.data;
  } catch (error) {
    console.log('Error updating', error);
    throw new Error('Error updating planet');
  }
};
