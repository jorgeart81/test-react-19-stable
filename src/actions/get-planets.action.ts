import { planetsApi } from '../api/planetsApi';
import type { Planet } from '../interfaces/planet.interface';

export const getPlanetsAction = async (): Promise<Planet[]> => {
  const res = await planetsApi.get<Planet[]>('/');
  return res.data;
};
