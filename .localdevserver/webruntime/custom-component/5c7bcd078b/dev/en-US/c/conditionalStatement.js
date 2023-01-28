Webruntime.define('lwc/conditionalStatement', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("h4", {
        key: 0
      }, [api_text("If else")]), $cmp.isTrue ? api_element("div", {
        classMap: {},
        key: 1
      }, []) : null];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-conditionalStatement_conditionalStatement-host",
      shadowAttribute: "lwc-conditionalStatement_conditionalStatement"
    };

    class ConditionalStatement extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.isTrue = false;
      }

    }

    lwc.registerDecorators(ConditionalStatement, {
      fields: ["isTrue"]
    });

    var conditionalStatement = lwc.registerComponent(ConditionalStatement, {
      tmpl: _tmpl
    });

    return conditionalStatement;

});
