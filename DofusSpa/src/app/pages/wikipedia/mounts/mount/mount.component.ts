import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mount } from 'src/app/_models/mount';
import { MountService } from 'src/app/_services/mount.service';

@Component({
  selector: 'app-mount',
  templateUrl: './mount.component.html',
  styleUrls: ['./mount.component.sass']
})
export class MountComponent implements OnInit {

  // Id of the mount
  id : number;
  // The mount
  mount : Mount;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _mountService : MountService
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getMount(this.id);
  }

  // Getting the mounts
  getMount(id : number){
    this._mountService.getById(id).subscribe((data) => {
      this.mount = data;
    })
  }

}
