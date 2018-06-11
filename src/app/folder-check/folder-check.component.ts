import { Component, OnInit } from '@angular/core';
import { Folder } from '../folder';
import { FolderService } from '../folder.service';

@Component({
  selector: 'app-folder-check',
  templateUrl: './folder-check.component.html',
  styleUrls: ['./folder-check.component.css']
})
export class FolderCheckComponent implements OnInit {

  folders : Folder[];
  constructor(private folderService : FolderService) { }

  ngOnInit() {
    this.getFolders();
  }
  
  getFolders(): void {
    this.folderService.getFolders()
        .subscribe(folders => this.folders = folders);
  }

}
