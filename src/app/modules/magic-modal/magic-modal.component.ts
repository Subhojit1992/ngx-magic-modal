import {NgModule,Component,ElementRef,AfterViewInit,AfterViewChecked,OnDestroy,Input,Output,EventEmitter,Renderer2,
  ContentChildren,QueryList,ViewChild,NgZone, OnChanges} from '@angular/core';

let overly = document.createElement("div")

@Component({
  selector: 'magic-modal',
  templateUrl: './magic-modal.component.html',
  styleUrls: ['./magic-modal.component.css']
})
export class MagicModalComponent implements AfterViewInit,AfterViewChecked,OnChanges,OnDestroy {

  @ViewChild('container') containerViewChild: ElementRef;

    _visible: boolean;

    @Input() get visible(): boolean {
        return this._visible;
    }

    set visible(val:boolean) {
        this._visible = val;
    }


    constructor(
        public el: ElementRef,
        public renderer: Renderer2
    ) {}


    showModal(){
        if(document.body != null){
            let modal = this.containerViewChild.nativeElement;
            let overlyStyle = `content: ''; 
                               display: block; 
                               z-index: 99999; 
                               width: 100%; 
                               height: 100%; 
                               background: #00000059; 
                               position: absolute; 
                               top: 0; 
                               left: 0;`

            overly.classList.add('magic-modal-overly');
            overly.setAttribute("style", overlyStyle);
            document.body.appendChild(overly);

            document.body.appendChild(modal);
        }
    }

    hideModal(){
        if(document.body != null){
            let modal = this.containerViewChild.nativeElement;

            overly.remove();

            modal.remove();
        }
    }
    

    ngOnChanges() {
        // changes.prop contains the old and the new value...
        if(this.visible){
            this.showModal();
        } else {
            this.hideModal();
        }
    }


    ngAfterViewChecked() {

    }

    ngAfterViewInit() { 
        // console.log(this.containerViewChild.nativeElement)
        // document.body.appendChild('<span>Hello ooo</span>')
        // console.log(this.visible)
        let modal = this.containerViewChild.nativeElement;

        this.renderer.addClass(
            this.containerViewChild.nativeElement,
            'magic-modal'
        );

        
    }

    ngOnDestroy() {

    }

}
