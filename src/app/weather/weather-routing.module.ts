import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherComponent } from "./weather.component";
import { WeatherItemComponent } from "./weather-item/weather-item.component";

const routes: Routes = [
    {
        path: '', component: WeatherComponent, children: [
            { path: '', component: WeatherItemComponent, pathMatch: 'full' },
            /* { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipeBookResolverService] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeBookResolverService] } */
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule { }