import { LightningElement ,wire } from 'lwc';

import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class GetObjectInfo extends LightningElement {
objectName;

@wire(getObjectInfo,{objectApiName: '$objectName'})
objectInfo;

getInfo()
{
    this.objectName=this.template.querySelector("lightning-input").value;

}

//return the data
get getData()
{
    return this.objectInfo.data !={} ? JSON.stringify(this.objectInfo,null,10) : "Not a valid object";
}

}