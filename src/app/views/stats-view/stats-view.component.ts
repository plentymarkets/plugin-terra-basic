import {
    Component,
    OnInit
} from '@angular/core';
import { StatsDataService } from './stats-view.service';
import { TerraAlertComponent } from '@plentymarkets/terra-components';

interface PluginInterface
{
    name?:string;
    id?:number;
    created_at?:string;
}
interface UserInterface
{
    username?:string;
    email?:string;
}
interface WebStoreInterface
{
    id?:number;
    name?:string;
    type?:string;
}

@Component({
    selector: 'stats-view',
    template: require('./stats-view.component.html'),
    styles:   [require('./stats-view.component.scss')]
})
export class StatsViewComponent implements OnInit
{
    public plugins:Array<PluginInterface>;
    public user:UserInterface;
    public webStores:Array<WebStoreInterface>;

    private _alert:TerraAlertComponent;

    constructor(private _statsDataService:StatsDataService)
    {
        this._alert = TerraAlertComponent.getInstance();
    }

    public ngOnInit():void
    {
       this.updateData();
    }

    public updateData():void
    {
        this.createPluginData();
        this.createUserData();
        this.createWebStoreData();
        this._alert.addAlert(
            {
                msg:'Fetching data',
                type:'info',
                dismissOnTimeout:3000,
                identifier: 'info'
            });
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

    private createWebStoreData():void
    {
        this.webStores = [];
        this._statsDataService.getRestCallData('/rest/webstores').subscribe((response:Array<any>) =>
        {
            for(let store of response)
            {
                this.webStores.push(
                    {
                        id: store.id,
                        name: store.name,
                        type: store.type
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
