import { Component } from '@angular/core';



@Component({
   // selector: 'app-server',
  // selector: '[app-server]', //div component
   selector:'.app-server', //selectorapp-server is class
    templateUrl:'./server.component.html',
    /*template: `<app-server></app-server>
    <p> hello within app-server</p>
    <app-server></app-server>` */
    styles:[`
    .online{
        color:yellow
    }`]
})
export class ServerComponent{
 ServerID: number =10;
 status: string='offline';

constructor()
{
    this.status = Math.random() < 0.5 ? 'online':'offline';
}

getcolor()
{
    return this.status==='online'?'green':'red';
}

 getstatus()
 {
     return this.status;
 }
}