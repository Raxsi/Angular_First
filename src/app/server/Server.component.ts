import { Component } from '@angular/core';



@Component({
    selector: 'app-server',
    //templateUrl:'./server.component.html'
    template: `<app-server></app-server>
    <p> hello within app-server</p>
    <app-server></app-server>`
})
export class ServerComponent{

}