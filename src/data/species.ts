export interface Species {
  id: string;
  name: string;
  latin: string;
  rune: string;
  region: string;
  mark: string;
  size: string;
  tail: 'wedge' | 'fan' | 'short';
  neck: boolean;
  thick: boolean;
  brown: boolean;
  whiteEye: boolean;
  regionKey: string;
  num: string;
}

import speciesJson from './species.json';
export const SPECIES: Species[] = speciesJson.species as Species[];
