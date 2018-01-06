import { Component, ElementRef, Input, NgModule, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

let overly = document.createElement("div");
class MagicModalComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set visible(val) {
        this._visible = val;
    }
    /**
     * @return {?}
     */
    showModal() {
        if (document.body != null) {
            let /** @type {?} */ modal = this.containerViewChild.nativeElement;
            overly.classList.add('magic-modal-overly');
            document.body.appendChild(overly);
            document.body.appendChild(modal);
        }
    }
    /**
     * @return {?}
     */
    hideModal() {
        if (document.body != null) {
            let /** @type {?} */ modal = this.containerViewChild.nativeElement;
            overly.remove();
            modal.remove();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // changes.prop contains the old and the new value...
        if (this.visible) {
            this.showModal();
        }
        else {
            this.hideModal();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // console.log(this.containerViewChild.nativeElement)
        // document.body.appendChild('<span>Hello ooo</span>')
        // console.log(this.visible)
        let /** @type {?} */ modal = this.containerViewChild.nativeElement;
        this.renderer.addClass(this.containerViewChild.nativeElement, 'magic-modal');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
MagicModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'magic-modal',
                template: `
    <div #container [hidden]="!visible" class="magic-modal-base">
      <ng-content></ng-content>
    </div>
  `,
                styles: [`
    .magic-modal-base{
        min-width: 500px;
        padding: 40px 30px;
        background: #fff;
        border: 1px solid #000;
        z-index: 999999;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
MagicModalComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
MagicModalComponent.propDecorators = {
    'containerViewChild': [{ type: ViewChild, args: ['container',] },],
    'visible': [{ type: Input },],
};

class MagicModalModule {
}
MagicModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [MagicModalComponent],
                exports: [
                    MagicModalComponent // <-- this!
                ]
            },] },
];
/**
 * @nocollapse
 */
MagicModalModule.ctorParameters = () => [];

// export * from './src/app/modules/header/header.module'

/**
 * Generated bundle index. Do not edit.
 */

export { MagicModalModule, MagicModalComponent as ɵa };
//# sourceMappingURL=magic-modal.js.map
