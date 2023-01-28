import { LightningElement, wire } from "lwc";

//import our lms channel
import channelOne from "@salesforce/messageChannel/channelOne__c";



// import lms module
import { publish, MessageContext } from "lightning/messageService";


import getContact from '@salesforce/apex/ContactHelper.getContact';


export default class LmsPublisher extends LightningElement {



//search contact string
contactEmail=''
  
  //wire messageContext
  /* 
  Use @wire(MessageContext) to create a MessageContext object, which provides information 
  about the Lightning web component that is using the Lightning message service.
   When using the @wire(MessageContext) adapter, you don’t have to interact with any of
    the component’s lifecycle events. The Lightning message service features automatically
     unregister when the component is destroyed.
  */


  @wire(MessageContext)
  messageContext;


  //get contact
  
  @wire(getContact , {contactEmail:'$contactEmail'})
  wiredFunction({error ,data})
  {
    if(error)
    {
      console.log({error})
    }
    else {
      this.data=data
      (this.data == undefined)?console.log('no such contact'):console.log(this.data)
    }
  }


  //handle email input
  handleInput(event)
  {
    this.contactEmail=event.target.value;
  }


  //handle publish event
  publishLMSData() {
    const payload = 
    {
      searchedContact: this.data
    };  

    publish(this.messageContext, channelOne, payload);
  }
}
