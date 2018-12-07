import { Language } from 'angular-l10n';
import { TerraAlertComponent } from '@plentymarkets/terra-components';
import { isNullOrUndefined } from 'util';

export class AlertHelper
{
    @Language()
    public lang:string;

    private alert:TerraAlertComponent = TerraAlertComponent.getInstance();

    constructor()
    {}

    protected handleMessage(message:string, identifier?:string):void
    {
        if(!isNullOrUndefined(identifier))
        {
            this.alert.closeAlertByIdentifier(identifier);
        }

        // TODO types: info, warning, error, debug, success, reload, reloadError
        this.alert.addAlert({
            msg:              message,
            type:             'success',
            dismissOnTimeout: null,
            identifier:       identifier
        });
    }

    protected handleError(message:string, identifier?:string):void
    {
        if(!isNullOrUndefined(identifier))
        {
            this.alert.closeAlertByIdentifier(identifier);
        }

        this.alert.addAlert({
            msg:              message,
            type:             'danger',
            dismissOnTimeout: 0,
            identifier:       identifier
        });
    }

    protected handleInfo(message:string, identifier?:string):void
    {
        if(!isNullOrUndefined(identifier))
        {
            this.alert.closeAlertByIdentifier(identifier);
        }

        this.alert.addAlert({
            msg:              message,
            type:             'info',
            dismissOnTimeout: null,
            identifier:       identifier
        });
    }

    protected handleWarning(message:string, identifier?:string):void
    {
        if(!isNullOrUndefined(identifier))
        {
            this.alert.closeAlertByIdentifier(identifier);
        }

        this.alert.addAlert({
            msg:              message,
            type:             'warning',
            dismissOnTimeout: null,
            identifier:       identifier
        });
    }
}
