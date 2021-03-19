import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TitleComponent } from "./title.component";
import { TitleDirective, TitleContentDirective } from "./title.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [TitleComponent, TitleDirective, TitleContentDirective],
    exports: [TitleComponent, TitleDirective, TitleContentDirective]
})

export class TitleModule {}