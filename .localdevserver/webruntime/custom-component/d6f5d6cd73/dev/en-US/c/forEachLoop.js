Webruntime.define('lwc/forEachLoop', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       t: api_text,
       h: api_element,
       d: api_dynamic,
       k: api_key,
       i: api_iterator,
       f: api_flatten
     } = $api;
     return [api_element("table", {
       key: 8
     }, [api_element("tbody", {
       key: 7
     }, api_flatten([api_element("tr", {
       key: 3
     }, [api_element("th", {
       key: 0
     }, [api_text("Id")]), api_element("th", {
       key: 1
     }, [api_text("Name")]), api_element("th", {
       key: 2
     }, [api_text("Email")])]), api_iterator($cmp.students, function (student) {
       return api_element("tr", {
         key: api_key(6, student.id)
       }, [api_element("td", {
         key: 4
       }, [api_text("student.name")]), api_element("td", {
         key: 5
       }, [api_dynamic(student.email)])]);
     })]))])];
   }

   var _tmpl = lwc.registerTemplate(tmpl);
   tmpl.stylesheets = [];
   tmpl.stylesheetTokens = {
     hostAttribute: "lwc-forEachLoop_forEachLoop-host",
     shadowAttribute: "lwc-forEachLoop_forEachLoop"
   };

   class ForEachLoop extends lwc.LightningElement {
     constructor(...args) {
       super(...args);
       this.students = [{
         id: 1,
         name: "shubham",
         email: "sgh@nagarro.com"
       }, {
         id: 2,
         name: "pandey",
         email: "sgh@nagarro.com"
       }];
     }

   }

   lwc.registerDecorators(ForEachLoop, {
     fields: ["students"]
   });

   var forEachLoop = lwc.registerComponent(ForEachLoop, {
     tmpl: _tmpl
   });

   return forEachLoop;

});
