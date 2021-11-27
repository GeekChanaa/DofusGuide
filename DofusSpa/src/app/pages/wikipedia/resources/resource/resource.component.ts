import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/_models/resource';
import { ResourceService } from 'src/app/_services/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.sass']
})
export class ResourceComponent implements OnInit {

  // Id of the resource
  id : number;
  // The resource
  resource : Resource;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _resourceService : ResourceService,
    private _dialog : MatDialog
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getResource(this.id);
  }

  // Getting the resources
  getResource(id : number){
    this._resourceService.getById(id).subscribe((data) => {
      this.resource = data;
    })
  }

}
