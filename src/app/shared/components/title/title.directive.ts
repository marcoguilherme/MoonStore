import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: 'app-title-content, [app-title-content], [appTitleContent]'
})

export class TitleDirective {
    @HostBinding('class') baseClass = 'app-title__content';
}

@Directive({
    selector: '[appTitleDirective]'
})

export class TitleContentDirective {
    @HostBinding('class.app-title__content--primary') primary;
    @HostBinding('class.app-title__content--secondary') secondary;

    @Input() set appTitleDirective(value){
        if(value === 'primary'){
            this.primary = true;
            this.secondary = false;
        } else {
            this.primary = false;
            this.secondary = true;
        }
    }
}
