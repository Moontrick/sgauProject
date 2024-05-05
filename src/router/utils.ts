import { ReactNode } from "react";
import { AppRouteSection, AppRouteType } from "./routes";
import { appRoutes } from "./route";

export declare type INavigationItem = {
    id: string;
    title: string;
    icons?: string;
    items: INavigationItem[];
    href?: string;
    onClick?: () => void;
    render?: (item: INavigationItem) => void;
    isShow?: boolean;
    disabled?: boolean;
    external?: boolean;
    target?: '_blank' | '_self';
};

export type AppNavigationId = AppRouteType | AppRouteSection;



export type NavigationItem = Omit<INavigationItem, 'id' | 'items'> & {
    id: AppNavigationId;
    items?: NavigationItem[];
  };
  
export function generateRoutes(): NavigationItem[] {
    return appRoutes;
  }