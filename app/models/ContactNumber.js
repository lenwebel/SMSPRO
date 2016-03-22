System.register(['./ModelBase', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ModelBase_1, common_1;
    var ContactNumber;
    return {
        setters:[
            function (ModelBase_1_1) {
                ModelBase_1 = ModelBase_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ContactNumber = (function (_super) {
                __extends(ContactNumber, _super);
                function ContactNumber() {
                    debugger;
                    _super.call(this);
                    this.NumberType = new common_1.Control('');
                    this.ContactNumber = new common_1.Control('');
                }
                return ContactNumber;
            }(ModelBase_1.ModelBase));
            exports_1("ContactNumber", ContactNumber);
        }
    }
});
//# sourceMappingURL=ContactNumber.js.map