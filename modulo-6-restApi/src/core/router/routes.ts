import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  characterDetail: '/characters/detail/:id',
  editCharacter: '/character/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

interface LinkRouteDetail extends Omit<SwitchRoutes, 'characterDetail'> {
  characterDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};

export const LinkRouteDetail: LinkRouteDetail = {
  ...switchRoutes,
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
};
