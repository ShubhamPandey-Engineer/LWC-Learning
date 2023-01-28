import { LightningElement, wire } from "lwc";

//import our lms channel
import channelOne from "@salesforce/messageChannel/channelOne__c";

// import lms module
import {
  subscribe,
  unsubscribe,
  MessageContext,
} from "lightning/messageService";

export default class LmsSubscriber extends LightningElement {
  @wire(MessageContext)
  messageContext;


  data=''

  
  unsubscribeToMessageChannel() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  @wire(MessageContext)
  messageContext;

  // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
  subscribeToMessageChannel() {
    if (!this.subscription) {
      this.subscription = subscribe(
        this.messageContext,
        channelOne,
        (message) => this.handleMessage(message)
      );
    }
  }

  handleMessage(message) {
    this.data=message;

    console.log('message received')

  }

  

  //display contact 
  get toJSON()
  {
    return JSON.stringify(this.data)
  }






  // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
  connectedCallback() {
    this.subscribeToMessageChannel();
  }

  disconnectedCallback() {
    this.unsubscribeToMessageChannel();
  }
}
