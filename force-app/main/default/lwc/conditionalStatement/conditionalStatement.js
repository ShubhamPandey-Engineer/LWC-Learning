import { LightningElement } from 'lwc';

export default class ConditionalStatement extends LightningElement {
    isTrue=false;
    data="sync not enable";
    //for checkbox
    onChange(event)
    {
        //on tick
        this.isTrue=event.target.checked;
  

        
    }
}