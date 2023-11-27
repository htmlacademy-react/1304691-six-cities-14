import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const getAutorisationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
