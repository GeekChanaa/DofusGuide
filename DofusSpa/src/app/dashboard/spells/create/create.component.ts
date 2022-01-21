import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Spell } from 'src/app/_models/spell';
import { AuthService } from 'src/app/_services/auth.service';
import { SpellService } from 'src/app/_services/spell.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Spell> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    name: new FormControl(''),
    variant: new FormControl(''),
    classeID: new FormControl(''),
  });

  constructor(
    private _authService: AuthService,
    private _spellService : SpellService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Spell
  create() {
    this._spellService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
