import { ElementRef, AfterViewInit, AfterViewChecked, OnDestroy, Renderer2, OnChanges } from '@angular/core';
export declare class MagicModalComponent implements AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    containerViewChild: ElementRef;
    _visible: boolean;
    visible: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    showModal(): void;
    hideModal(): void;
    ngOnChanges(): void;
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
