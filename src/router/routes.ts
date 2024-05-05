export interface AppRoute<T = unknown> {
    template: string;
    build: (arg?: T) => string;
  }
  
  const makeUrl = (url: string) => {
    return url;
  };
  
  const makeAppRoute = <T>(route: AppRoute<T>) => route;

  export enum AppRouteType {
    home = 'home',
    test = 'test',
  }
  export enum AppRouteSection {
    appMode = 'appMode',
    receiveRawMaterials = 'receiveRawMaterials',
  }
  
  export const routes: Record<AppRouteType, AppRoute<unknown & string>> = {
    [AppRouteType.home]: makeAppRoute({
      template: makeUrl('/'),
      build: () => makeUrl('/'),
    }),
    [AppRouteType.test]: makeAppRoute({
      template: makeUrl('/test'),
      build: () => makeUrl('/test'),
    }),
  };
  
  export const appRoutesArray = Object.keys(routes) as Array<AppRouteType>;
  