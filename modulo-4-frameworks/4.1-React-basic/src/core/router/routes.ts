import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  details: string;
  rickMorty: string;
  rickMortyDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  details: "/detail/:id",
  rickMorty: "/list_rick_and_morty",
  rickMortyDetail: "/list_rick_and_morty/:id"
};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string) => string;
}

interface Details extends Omit<SwitchRoutes, "rickMortyDetail">{
  rickMortyDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
};

export const routesDetail: Details = {
  ...switchRoutes,
  rickMortyDetail: (id) => generatePath(switchRoutes.rickMortyDetail, {id})
}
