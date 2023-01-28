import { LightningElement ,track} from 'lwc';

export default class Parent extends LightningElement {
    @track message;
    @track dataFromChild;

    //send data to  child
parentToChild(event)
{
this.message="Data coming from parent";
}


//handling the child event
handleChildEvent(data)
{
this.dataFromChild=data.detail;
}

}