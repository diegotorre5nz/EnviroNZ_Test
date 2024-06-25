'use client'

import { Location } from '../lib/definitions';
import { Button } from './button';
import { getSuburb } from '../lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ location }: { location: Location }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(getSuburb, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Longitude */}
        <div className="mb-4">
          <label htmlFor="longitude" className="mb-2 block text-sm font-medium">
            Enter the longitud
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="longitude"
                name="longitude"
                type="string"
                placeholder="Enter the longitude"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="latitude" className="mb-2 block text-sm font-medium">
            Enter the latitude
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="latitude"
                name="latitude"
                type="string"
                placeholder="Enter the latitude"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-error"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Get Suburb</Button>
      </div>
    </form>
  );
}