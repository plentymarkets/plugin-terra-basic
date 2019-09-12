import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector:      'ptb-app',
    templateUrl:   './plugin-terra-basic.component.html',
    styleUrls:     ['./plugin-terra-basic.component.scss'],
})
export class PluginTerraBasicComponent implements OnInit
{
    public readonly nuts:Array<string> = ['Hazel', 'Almond'];
    public readonly fruits:Array<string> = ['Banana', 'Orange','Cherry'];
    public readonly strings:Array<string> = this.fruits.concat(this.nuts);
    public readonly numbers:Array<number> = [22, 8, 19, 44, 35, 2];

    private readonly banana:Object = {
        color: 'Yellow',
        name: 'Banana',
        howToEat: 'No one knows'
    };

    public ngOnInit():void
    {
        this.allIndices(this.fruits);
        console.log('-----');
        this.objectKeys(this.banana);
        console.log('-----');
        this.objectValues(this.banana);
        console.log('-----');
        this.objectEntries(this.banana);
    }

    public allIndices(array:Array<string>):void
    {
        array.forEach((entry:string) => console.log(array.indexOf(entry)));
    }

    public allFruits(array:Array<string>):Array<string>
    {
        return array.filter((entry:string) => this.fruits.includes(entry));
    }

    public fruitWith(array:Array<string>, letter:string):string
    {
        return array.find((entry:string) => entry.includes(letter));
    }

    public sortArray(array:Array<number>):Array<number>
    {
        return array.sort((a:number,b:number) => a - b);
    }

    public mapArray(array:Array<number>):Array<number>
    {
        return array.map((entry:number) => entry * entry);
    }

    public mapAndFilterArray(array:Array<number>):Array<number>
    {
        return array.map((entry:number) => entry * entry).filter((entry:number) => entry % 2);
    }

    private objectKeys(object:Object):void
    {
        Object.keys(object).forEach((key:string) => console.log(key));
    }

    private objectValues(object:Object):void
    {
        Object.values(object).forEach((value:string) => console.log(value));
    }

    private objectEntries(object:Object):void
    {
        Object.entries(object).forEach(([key, value]) =>
        {
            console.log(key);
            console.log(value);
        })
    }
}
