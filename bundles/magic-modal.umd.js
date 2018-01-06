(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['magic-modal'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var overly = document.createElement("div");
var MagicModalComponent = (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function MagicModalComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(MagicModalComponent.prototype, "visible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._visible;
        },
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            this._visible = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MagicModalComponent.prototype.showModal = function () {
        if (document.body != null) {
            var /** @type {?} */ modal = this.containerViewChild.nativeElement;
            overly.classList.add('magic-modal-overly');
            document.body.appendChild(overly);
            document.body.appendChild(modal);
        }
    };
    /**
     * @return {?}
     */
    MagicModalComponent.prototype.hideModal = function () {
        if (document.body != null) {
            var /** @type {?} */ modal = this.containerViewChild.nativeElement;
            overly.remove();
            modal.remove();
        }
    };
    /**
     * @return {?}
     */
    MagicModalComponent.prototype.ngOnChanges = function () {
        // changes.prop contains the old and the new value...
        if (this.visible) {
            this.showModal();
        }
        else {
            this.hideModal();
        }
    };
    /**
     * @return {?}
     */
    MagicModalComponent.prototype.ngAfterViewChecked = function () {
    };
    /**
     * @return {?}
     */
    MagicModalComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.containerViewChild.nativeElement)
        // document.body.appendChild('<span>Hello ooo</span>')
        // console.log(this.visible)
        var /** @type {?} */ modal = this.containerViewChild.nativeElement;
        this.renderer.addClass(this.containerViewChild.nativeElement, 'magic-modal');
    };
    /**
     * @return {?}
     */
    MagicModalComponent.prototype.ngOnDestroy = function () {
    };
    return MagicModalComponent;
}());
MagicModalComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'magic-modal',
                template: "\n    <div #container [hidden]=\"!visible\" class=\"magic-modal-base\">\n      <ng-content></ng-content>\n    </div>\n  ",
                styles: ["\n    .magic-modal-base{\n        min-width: 500px;\n        padding: 40px 30px;\n        background: #fff;\n        border: 1px solid #000;\n        z-index: 999999;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
MagicModalComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
MagicModalComponent.propDecorators = {
    'containerViewChild': [{ type: core.ViewChild, args: ['container',] },],
    'visible': [{ type: core.Input },],
};
var MagicModalModule = (function () {
    function MagicModalModule() {
    }
    return MagicModalModule;
}());
MagicModalModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
MagicModalModule.ctorParameters = function () { return []; };

exports.MagicModalModule = MagicModalModule;
exports.ɵa = MagicModalComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=magic-modal.umd.js.map
