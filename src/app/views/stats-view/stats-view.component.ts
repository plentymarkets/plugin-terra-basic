import {
    Component,
    OnInit
} from '@angular/core';
import { StatsDataService } from './user-data.service';

interface pluginInterface
{
    name?:string;
    id?:number;
    created_at?:string;
}
interface userInterface
{
    username?:string;
    email?:string;
}

@Component({
    selector: 'stats-view',
    template: require('./stats-view.component.html'),
    styles:   [require('./stats-view.component.scss')]
})
export class StatsViewComponent implements OnInit
{
    public plugins:Array<pluginInterface>;
    public user:userInterface;
    constructor(private _statsDataService:StatsDataService)
    {
    }

    public ngOnInit():void
    {
       this.updateData();
    }
    public updateData():void
    {
        this.createPluginData();
        this.createUserData();
    }
    private createPluginData():void
    {
        this.plugins = [];
        this._statsDataService.getRestCallData('/rest/plugins').subscribe((response:Array<any>) =>
        {
            for(let plugin of response)
            {
                this.plugins.push(
                    {
                        name: plugin.name,
                        id: plugin.id,
                        created_at: plugin.created_at
                    });
            }
        });
    }
    private createUserData():void
    {
        this.user = {};
        this._statsDataService.getRestCallData('/rest/user').subscribe((response:any) =>
        {
            this.user =
                {
                    username: response.user,
                    email: response.user_email
                };
        });
    }
}
