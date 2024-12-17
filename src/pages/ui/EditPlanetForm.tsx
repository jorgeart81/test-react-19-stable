import { useActionState } from 'react';

import type { Planet } from '../../interfaces/planet.interface';
import { createPlanetAction } from '../../actions/create-planet.action';
import { SubmitButton } from './SubmitButton';

interface Props {
  onAddPlanet: (planet: Planet) => void;
}

export const EditPlanetForm = ({ onAddPlanet }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(
    async (prevState: unknown, queryData: FormData) => {
      const formData: Partial<Planet> = Object.fromEntries(queryData);
      const planet = await createPlanetAction(formData);

      console.log({ prevState, queryData });
      onAddPlanet(planet);
    },
    null
  );

  return (
    <form className='mb-4 flex flex-col md:flex-row' action={formAction}>
      <input
        type='text'
        name='name'
        placeholder='Nombre del planeta'
        className='mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1'
        required
      />
      <input
        type='text'
        name='type'
        placeholder='Tipo de astro'
        className='mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1'
        required
      />
      <input
        type='text'
        name='distanceFromSun'
        placeholder='Distancia del sol'
        className='mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1'
        required
      />
      <SubmitButton />
    </form>
  );
};
