import { Component } from '@angular/core';



@Component({
   // selector: 'app-server',
  // selector: '[app-server]', //div component
   selector:'.app-server', //selectorapp-server is class
    templateUrl:'./server.component.html'
    /*template: `<app-server></app-server>
    <p> hello within app-server</p>
    <app-server></app-server>` */
    
})
export class ServerComponent{
 ServerID: number =10;
 status: string='online';


 getstatus()
 {
     return this.status;
 }
}