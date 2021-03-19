import { NgModule } from "@angular/core";
import { TitleComponent } from "src/app/shared/components/title/title.component";
import { TitleModule } from "src/app/shared/components/title/title.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./pages/home.component";

@NgModule({
    imports: [HomeRoutingModule, TitleModule],
    declarations: [HomeComponent],
})

export class HomeModule {}