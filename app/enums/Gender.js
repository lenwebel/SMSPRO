System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var sms;
    return {
        setters:[],
        execute: function() {
            (function (sms) {
                var enums;
                (function (enums) {
                    var Gender;
                    (function (Gender) {
                        Gender[Gender["Male"] = 0] = "Male";
                        Gender[Gender["Female"] = 1] = "Female";
                        Gender[Gender["Other"] = 2] = "Other";
                    })(Gender || (Gender = {}));
                })(enums = sms.enums || (sms.enums = {}));
            })(sms = sms || (sms = {}));
            exports_1("sms", sms);
        }
    }
});
//# sourceMappingURL=Gender.js.map