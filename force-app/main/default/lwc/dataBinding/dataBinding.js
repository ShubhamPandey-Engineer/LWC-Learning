import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    data;

    //dataBinding method
    performDataBinding(event)
    {
  this.data=event.target.value;
    }
}