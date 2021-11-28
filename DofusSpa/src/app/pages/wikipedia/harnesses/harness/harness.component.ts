import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Harness } from 'src/app/_models/harness';
import { HarnessService } from 'src/app/_services/harness.service';

@Component({
  selector: 'app-harness',
  templateUrl: './harness.component.html',
  styleUrls: ['./harness.component.sass']
})
export class HarnessComponent implements OnInit {

  // Id of the harness
  id : number;
  // The harness
  harness : Harness;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _harnessService : HarnessService,
    private _dialog : MatDialog
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getHarness(this.id);
  }

  // Getting the harnesss
  getHarness(id : number){
    this._harnessService.getById(id).subscribe((data) => {
      this.harness = data;
    })
  }

}
