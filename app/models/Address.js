System.register(['./ModelBase', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ModelBase_1, common_1;
    var Address;
    return {
        setters:[
            function (ModelBase_1_1) {
                ModelBase_1 = ModelBase_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Address = (function (_super) {
                __extends(Address, _super);
                function Address() {
                    _super.call(this);
                    this.AddressType = new common_1.Control('');
                    this.StreetNumber = new common_1.Control('');
                    this.StreetName = new common_1.Control('');
                    this.BuildingName = new common_1.Control('');
                    this.Suburb = new common_1.Control('');
                    this.City = new common_1.Control('');
                    this.State = new common_1.Control('');
                    this.Country = new common_1.Control('');
                }
                return Address;
            }(ModelBase_1.ModelBase));
            exports_1("Address", Address);
        }
    }
});
//# sourceMappingURL=Address.js.map