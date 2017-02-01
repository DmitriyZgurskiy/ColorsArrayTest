import { Component, OnInit } from '@angular/core';

import { Color } from './color.model';
import { ColorsService } from './colors.service';

@Component({
  selector: 'colors',
  templateUrl: 'colors.component.html',
  styleUrls: ['colors.component.css']
})

export class ColorsComponent implements OnInit {
  colors: Color[] = [];

  constructor(private colorsService: ColorsService) {}

  ngOnInit(): void {
    this.colorsService.getColors()
      .subscribe(colors =>
        this.colors = colors
      );
  }
}
