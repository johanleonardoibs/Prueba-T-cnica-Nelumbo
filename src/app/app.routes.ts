import { Routes } from '@angular/router';
import {cellPhonesRoutes} from "./pages";

export const routes: Routes = [
  {
    path: "cellphones",
    children: cellPhonesRoutes,
  },
  {
    path: "**",
    redirectTo: "cellphones",
    pathMatch: "full",
  }
];
