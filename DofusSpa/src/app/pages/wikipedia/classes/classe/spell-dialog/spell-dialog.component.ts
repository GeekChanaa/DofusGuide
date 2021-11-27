import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spell-dialog',
  templateUrl: './spell-dialog.component.html',
  styleUrls: ['./spell-dialog.component.sass']
})
export class SpellDialogComponent implements OnInit {

  // Spell Variable
  spell : any= {};

  constructor(
    public dialogRef: MatDialogRef<SpellDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.spell = this.data.spell;
  }

}
