import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path: '', component: WelcomeComponent, pathMatch: 'full' },
    { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }