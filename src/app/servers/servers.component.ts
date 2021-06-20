import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
ToggleButtonserver=false;
ServercreateStatus='Server is not been created';
 ServerNameUpdate='Test Server';
  constructor() { 
    setTimeout(()=>{this.ToggleButtonserver=true;},2000);
  }


  ngOnInit(): void {
  }

  onServerclick()
  {
    this.ServercreateStatus='Server is created on click';
  }

  OnUpdateName(event:any)
  {
  this.ServerNameUpdate = (<HTMLInputElement>event.target).value; // Cast event.target to the appropriate HTML element to ensure it is
  }
}
