Webruntime.define('lwc/forEachLoop', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        k: api_key,
        h: api_element,
        i: api_iterator
      } = $api;
      return api_iterator($cmp.formattedParts, function (part) {
        return [part.isLink ? api_element("a", {
          attrs: {
            "target": "_blank",
            "href": part.href,
            "rel": "noopener"
          },
          key: api_key(0, part.key)
        }, [api_dynamic(part.value)]) : null, part.isText ? api_dynamic(part.value) : null, part.isNewline ? api_element("br", {
          key: api_key(1, part.key)
        }, []) : null];
      });
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lightning-formattedText_formattedText-host",
      shadowAttribute: "lightning-formattedText_formattedText"
    };

    const urlRegexString = "((?:(?:https?|ftp):\\/\\/(?:[\\w\\-\\|=%~#\\/+*@\\.,;:\\?!']|&){0,2047}(?:[\\(\\)\\.\\w=\\/+#-]*)[^\\s()\\.<>,;\\[\\]`'\"])|(?:\\b(?:[a-z0-9](?:[-a-z0-9]{0,62}[a-z0-9])?\\.)+(?:AC|AD|AE|AERO|AF|AG|AI|AL|AM|AN|AO|AQ|AR|ARPA|AS|ASIA|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BIZ|BJ|BM|BN|BO|BR|BS|BT|BV|BW|BY|BZ|CA|CAT|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|COM|COOP|CR|CU|CV|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EDU|EE|EG|ER|ES|ET|EU|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GOV|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|INFO|INT|IO|IQ|IR|IS|IT|JE|JM|JO|JOBS|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MG|MH|MIL|MK|ML|MM|MN|MO|MOBI|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAME|NC|NE|NET|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|ORG|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PRO|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|ST|SU|SV|SY|SZ|TC|TD|TEL|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TP|TR|TRAVEL|TT|TV|TW|TZ|UA|UG|UK|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|XN--0ZWM56D|XN--11B5BS3A9AJ6G|XN--80AKHBYKNJ4F|XN--9T4B11YI5A|XN--DEBA0AD|XN--FIQS8S|XN--FIQZ9S|XN--G6W251D|XN--HGBK6AJ7F53BBA|XN--HLCJ6AYA9ESC7A|XN--J6W193G|XN--JXALPDLP|XN--KGBECHTV|XN--KPRW13D|XN--KPRY57D|XN--MGBAAM7A8H|XN--MGBERP4A5D4AR|XN--P1AI|XN--WGBH1C|XN--ZCKZAH|YE|YT|ZA|ZM|ZW)(?!@(?:[a-z0-9](?:[-a-z0-9]{0,62}[a-z0-9])?\\.)+(?:AC|AD|AE|AERO|AF|AG|AI|AL|AM|AN|AO|AQ|AR|ARPA|AS|ASIA|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BIZ|BJ|BM|BN|BO|BR|BS|BT|BV|BW|BY|BZ|CA|CAT|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|COM|COOP|CR|CU|CV|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EDU|EE|EG|ER|ES|ET|EU|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GOV|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|INFO|INT|IO|IQ|IR|IS|IT|JE|JM|JO|JOBS|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MG|MH|MIL|MK|ML|MM|MN|MO|MOBI|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAME|NC|NE|NET|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|ORG|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PRO|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|ST|SU|SV|SY|SZ|TC|TD|TEL|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TP|TR|TRAVEL|TT|TV|TW|TZ|UA|UG|UK|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|XN--0ZWM56D|XN--11B5BS3A9AJ6G|XN--80AKHBYKNJ4F|XN--9T4B11YI5A|XN--DEBA0AD|XN--FIQS8S|XN--FIQZ9S|XN--G6W251D|XN--HGBK6AJ7F53BBA|XN--HLCJ6AYA9ESC7A|XN--J6W193G|XN--JXALPDLP|XN--KGBECHTV|XN--KPRW13D|XN--KPRY57D|XN--MGBAAM7A8H|XN--MGBERP4A5D4AR|XN--P1AI|XN--WGBH1C|XN--ZCKZAH|YE|YT|ZA|ZM|ZW))(?:/[\\w\\-=?/.&;:%~,+@#*]{0,2048}(?:[\\w=/+#-]|\\([^\\s()]*\\)))?(?:$|(?=\\.$)|(?=\\.\\s)|(?=[^\\w\\.]))))";
    const emailRegexString = '([\\w-\\.\\+_]{1,64}@(?:[\\w-]){1,255}(?:\\.[\\w-]{1,255}){1,10})';
    const newLineRegexString = '(\r\n|\r|\n)';
    const createHttpHref = function (url) {
      let href = url;

      if (url.toLowerCase().lastIndexOf('http', 0) !== 0 && url.toLowerCase().lastIndexOf('ftp', 0) !== 0) {
        href = `http://${href}`;
      }

      return href;
    };
    const createEmailHref = function (email) {
      return `mailto:${email}`;
    };

    /**
    A string normalization utility for attributes.
    @param {String} value - The value to normalize.
    @param {Object} config - The optional configuration object.
    @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
    @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
    @return {String} - The normalized value.
    **/
    /**
    A boolean normalization utility for attributes.
    @param {Any} value - The value to normalize.
    @return {Boolean} - The normalized value.
    **/

    function normalizeBoolean(value) {
      return typeof value === 'string' || !!value;
    }

    const isIE11 = isIE11Test(navigator);
    const isChrome = isChromeTest(navigator);
    const isSafari = isSafariTest(navigator); // The following functions are for tests only

    function isIE11Test(navigator) {
      // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
      return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    function isChromeTest(navigator) {
      // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }
    function isSafariTest(navigator) {
      // via https://stackoverflow.com/questions/49872111/detect-safari-and-stop-script
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    /*
     * Regex was taken from aura lib and refactored
     */

    const linkRegex = new RegExp(`(${newLineRegexString})|${urlRegexString}|${emailRegexString}`, 'gi');
    const linkRegexNoNewLine = new RegExp(`${urlRegexString}|${emailRegexString}`, 'gi');
    const emailRegex = new RegExp(emailRegexString, 'gi');
    const newLineRegex = new RegExp(newLineRegexString, 'gi');

    function getTextPart(text) {
      return {
        isText: true,
        value: text
      };
    }

    function getUrlPart(url, index) {
      return {
        isLink: true,
        value: url,
        href: createHttpHref(url),
        key: `${url}-${index}`
      };
    }

    function getEmailPart(email, index) {
      return {
        isLink: true,
        value: email,
        href: createEmailHref(email),
        key: `${email}-${index}`
      };
    }

    function getNewlinePart(index) {
      return {
        isNewline: true,
        key: index
      };
    }

    function getLinkPart(link, index, ignoreNewLines) {
      if (!ignoreNewLines && link.match(newLineRegex)) {
        return getNewlinePart(index);
      } else if (link.match(emailRegex)) {
        return getEmailPart(link, index);
      }

      return getUrlPart(link, index);
    }
    /**
     * Parse text into parts of text, links, emails, new lines
     * @param text {string} Text to parse into linkified parts
     * @param ignoreNewLines {boolean} Boolean indicating whether to return new line parts or not
     * if true new lines are included in text/url/email parts otherwise they are returned in their
     * own parts by default
     * @returns {[]}
     */


    function parseToFormattedLinkifiedParts(text, ignoreNewLines = false) {
      const parts = [];
      const re = ignoreNewLines ? linkRegexNoNewLine : linkRegex;
      let match;
      let index = 0;

      while ((match = re.exec(text)) !== null) {
        let link = match[0];
        const endsWithQuote = link && link.endsWith('&quot'); // If we found an email or url match, then create a text part for everything
        // up to the match and then create the part for the email or url

        if (match.index > 0) {
          parts.push(getTextPart(text.slice(0, match.index)));
        }

        if (endsWithQuote) {
          link = link.slice(0, link.lastIndexOf('&quot'));
        }

        parts.push(getLinkPart(link, index, ignoreNewLines));

        if (endsWithQuote) {
          parts.push(getTextPart('&quot'));
        }

        text = text.substring(re.lastIndex);
        re.lastIndex = 0;
        index = index + 1;
      }

      if (text != null && text !== '') {
        parts.push(getTextPart(text));
      }

      return parts;
    }
    /**
     * Parse text into parts of text and new lines
     * @param text {string} Text to parse into parts
     * @returns {[]}
     */

    function parseToFormattedParts(text) {
      return text.split(newLineRegex).map((part, index) => {
        return index % 2 === 0 ? getTextPart(part) : getNewlinePart();
      });
    }

    /**
     * Displays text, replaces newlines with line breaks, and linkifies if requested.
     */

    class FormattedText extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.value = '';
        this._linkify = false;
      }

      /**
       * If present, URLs and email addresses are displayed in anchor tags.
       * They are displayed in plain text by default.
       * @type {boolean}
       * @default false
       */
      get linkify() {
        return this._linkify;
      }

      set linkify(value) {
        this._linkify = normalizeBoolean(value);
      }

      get formattedParts() {
        if (!this.value || typeof this.value !== 'string') {
          return [];
        }

        return this.linkify ? parseToFormattedLinkifiedParts(this.value) : parseToFormattedParts(this.value);
      }

    }

    lwc.registerDecorators(FormattedText, {
      publicProps: {
        value: {
          config: 0
        },
        linkify: {
          config: 3
        }
      },
      track: {
        _linkify: 1
      }
    });

    var _lightningFormattedText = lwc.registerComponent(FormattedText, {
      tmpl: _tmpl
    });

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element,
        t: api_text,
        h: api_element,
        d: api_dynamic,
        k: api_key,
        i: api_iterator,
        f: api_flatten
      } = $api;
      return [api_custom_element("lightning-formatted-text", _lightningFormattedText, {
        props: {
          "value": "For each loop"
        },
        key: 0
      }, []), api_element("table", {
        attrs: {
          "border": "1"
        },
        key: 10
      }, [api_element("tbody", {
        key: 9
      }, api_flatten([api_element("tr", {
        key: 4
      }, [api_element("th", {
        key: 1
      }, [api_text("Id")]), api_element("th", {
        key: 2
      }, [api_text("Name")]), api_element("th", {
        key: 3
      }, [api_text("Email")])]), api_iterator($cmp.students, function (student) {
        return api_element("tr", {
          key: api_key(8, student.id)
        }, [api_element("td", {
          key: 5
        }, [api_dynamic(student.id)]), api_element("td", {
          key: 6
        }, [api_text("student.name")]), api_element("td", {
          key: 7
        }, [api_dynamic(student.email)])]);
      })]))]), api_element("article", {
        classMap: {
          "slds-card": true
        },
        key: 28
      }, [api_element("div", {
        classMap: {
          "slds-card__header": true,
          "slds-grid": true
        },
        key: 23
      }, [api_element("header", {
        classMap: {
          "slds-media": true,
          "slds-media_center": true,
          "slds-has-flexi-truncate": true
        },
        key: 22
      }, [api_element("div", {
        classMap: {
          "slds-media__figure": true
        },
        key: 15
      }, [api_element("span", {
        classMap: {
          "slds-icon_container": true,
          "slds-icon-standard-account": true
        },
        attrs: {
          "title": "account"
        },
        key: 14
      }, [api_element("svg", {
        classMap: {
          "slds-icon": true,
          "slds-icon_small": true
        },
        attrs: {
          "aria-hidden": "true"
        },
        key: 12
      }, [api_element("use", {
        attrs: {
          "xlink:href": lwc.sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#account")
        },
        key: 11
      }, [])]), api_element("span", {
        classMap: {
          "slds-assistive-text": true
        },
        key: 13
      }, [api_text("account")])])]), api_element("div", {
        classMap: {
          "slds-media__body": true
        },
        key: 19
      }, [api_element("h2", {
        classMap: {
          "slds-card__header-title": true
        },
        key: 18
      }, [api_element("a", {
        classMap: {
          "slds-card__header-link": true,
          "slds-truncate": true
        },
        attrs: {
          "href": "#",
          "title": "Accounts"
        },
        key: 17
      }, [api_element("span", {
        key: 16
      }, [api_text("Accounts")])])])]), api_element("div", {
        classMap: {
          "slds-no-flex": true
        },
        key: 21
      }, [api_element("button", {
        classMap: {
          "slds-button": true,
          "slds-button_neutral": true
        },
        key: 20
      }, [api_text("New")])])])]), api_element("div", {
        classMap: {
          "slds-card__body": true,
          "slds-card__body_inner": true
        },
        key: 24
      }, [api_text("Anything can go into the card body")]), api_element("footer", {
        classMap: {
          "slds-card__footer": true
        },
        key: 27
      }, [api_element("a", {
        classMap: {
          "slds-card__footer-action": true
        },
        attrs: {
          "href": "#"
        },
        key: 26
      }, [api_text("View All"), api_element("span", {
        classMap: {
          "slds-assistive-text": true
        },
        key: 25
      }, [api_text("Accounts")])])])])];
    }

    var _tmpl$1 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];
    tmpl$1.stylesheetTokens = {
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
      tmpl: _tmpl$1
    });

    return forEachLoop;

});
