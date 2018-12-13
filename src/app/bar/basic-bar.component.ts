import { BasicBeerService } from '../beer/basic-beer.service';
import { BasicBeerInterface } from '../beer/basic-beer.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'basic-bar',
    template: require('./basic-bar.component.html'),
    styles:   [require('./basic-bar.component.scss')]
})
export class BasicBarComponent implements OnInit
{
    constructor(private basicBeerService:BasicBeerService)
    {

    }

    public ngOnInit():void
    {
    }
}
