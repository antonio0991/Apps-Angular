import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { APP_BASE_HREF } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { Bin2DecComponent } from "./bin2-dec/bin2-dec.component";
import { BorderRadiusPreviewerComponent } from "./border-radius-previewer/border-radius-previewer.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { TrueOrFalseComponent } from "./true-or-false/true-or-false.component";
import { LuzesNatalComponent } from "./luzes-natal/luzes-natal.component";
import { StopwatchComponent } from "./stopwatch/stopwatch.component";
import { WeatherAppComponent } from "./weather-app/weather-app.component";
import { CauseEffectComponent } from "./cause-effect/cause-effect.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "bin2dec", component: Bin2DecComponent },
	{ path: "border-radius", component: BorderRadiusPreviewerComponent },
	{ path: "calculadora", component: CalculadoraComponent },
	{ path: "true-or-false", component: TrueOrFalseComponent },
	{ path: "luzes-natal", component: LuzesNatalComponent },
	{ path: "stopwatch", component: StopwatchComponent },
	{ path: "weather-app", component: WeatherAppComponent },
	{ path: "cause-effect", component: CauseEffectComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [{ provide: APP_BASE_HREF, useValue: "" }],
})
export class AppRoutingModule {}
