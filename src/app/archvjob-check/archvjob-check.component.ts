import { Component, OnInit } from '@angular/core';
import {Archv} from '../archv';
import { ArchvService } from '../archv.service';


@Component({
  selector: 'app-archvjob-check',
  templateUrl: './archvjob-check.component.html',
  styleUrls: ['./archvjob-check.component.css']
})
export class ArchvjobCheckComponent implements OnInit {

  impArchvs : Archv[];
  xpArchvs : Archv[];

  constructor(private archvService : ArchvService) { 
  }

  ngOnInit() {
    this.getArchvsImp();
    this.getArchvsXp();
  }
  
  getArchvsImp(): void {
    this.archvService.getArchvsImp()
        .subscribe(archvs => this.impArchvs = archvs);
  }
  getArchvsXp(): void {
    this.archvService.getArchvsXp()
        .subscribe(archvs => this.xpArchvs = archvs);
  }

}
