import { ITheme } from './interfaces/itheme';
import { DeepPurpleAmber } from './classes/deep-purple-amber';
import { IndigoPink } from './classes/indigo-pink';
import { PinkBlueGrey } from './classes/pink-blue-grey';
import { PurpleGreen } from './classes/purple-green';

const themesArray: ITheme[] = [
  new IndigoPink(),
  new DeepPurpleAmber(),
  new PinkBlueGrey(),
  new PurpleGreen()
];

export default themesArray;
