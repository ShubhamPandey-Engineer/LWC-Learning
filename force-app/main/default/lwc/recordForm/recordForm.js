import { LightningElement,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

//object api 
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

//object  fields
import NAME_FIELD from "@salesforce/schema/Account.Name"
import AccountNumber from '@salesforce/schema/Account.AccountNumber';


export default class CreateRecordApi extends LightningElement {

objectApiName=ACCOUNT_OBJECT;
objectFields=[NAME_FIELD,AccountNumber];


//handle success
handleSuccess(event)
{
if(event.detail.id != null)
{
    //show success toast
    this.dispatchEvent(new ShowToastEvent({
        title: 'success alert',
        message: 'Your account has been created !',
        variant: 'success'
    }));

}
}


}