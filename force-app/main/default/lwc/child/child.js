import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {
@api childProperty;

//create custom event in child
childToParent(event)
{
    //create e event
    const messfromChild=new CustomEvent('childevent',{detail:'Message  from child component'});
 console.log(event);
    //dispatch the event
    this.dispatchEvent(messfromChild);
}

}