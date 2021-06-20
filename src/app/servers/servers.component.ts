import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
ToggleButtonserver=false;
  constructor() { 
    setTimeout(()=>{this.ToggleButtonserver=true;},2000);
  }

  ngOnInit(): void {
  }

}
