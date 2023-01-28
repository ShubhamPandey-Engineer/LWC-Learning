import { LightningElement, track } from 'lwc';

export default class ReactivityInLWC extends LightningElement {
    str = 'gg'
    noTrackObj = { fname: 'Shubham' }// track decorator  is not used . Only if the whole object is modified then only the component re-renders.
    @track trackObj = { fname: 'Shubham' }  // track decorator is used . Object properties are also tracked. 

    //When manipulating complex types like objects and arrays we must create a new object and assign it to the field for the change to be detected.


    // called upon clicking a button
    clickHandler() {
        this.noTrackObj.fname = 'name Changed'  // does not re-render the component. Since the object properties are not tracked.
        this.noTrackObj = { fname: 'name changed again' }  // re-render the component . Since new object is created here and then assigned to trackObj.
        this.trackObj.fname = 'name Changed in track property'  // re-render the component
        this.trackObj.newprop = 'new property added' // does not re-render the component since the existing object is not modified.
        //To rerender your component when adding a new property, assign the object to a new object with both values(new & old).
        this.trackObj = { ...this.trackObj, newprop: 'new prop added along with existing properties' }  // re-render the component
        this.str = 'gggg'

    }


}