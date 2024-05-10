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
    orderList = 'orderList',
  }
  export enum AppRouteSection {
    appMode = 'appMode',
    user = 'user',
    receiveRawMaterials = 'receiveRawMaterials',
    receiveRawSclad = 'receiveRawSclad',
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
    [AppRouteType.orderList]: makeAppRoute({
      template: makeUrl('/orderList'),
      build: () => makeUrl('/orderList'),
    }),
  };
  
  export const appRoutesArray = Object.keys(routes) as Array<AppRouteType>;
  