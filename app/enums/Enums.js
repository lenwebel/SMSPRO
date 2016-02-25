System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Gender, PersonType, ContactNumberType, AddressType;
    return {
        setters:[],
        execute: function() {
            (function (Gender) {
                Gender[Gender["Male"] = 0] = "Male";
                Gender[Gender["Female"] = 1] = "Female";
                Gender[Gender["Other"] = 2] = "Other";
            })(Gender || (Gender = {}));
            exports_1("Gender", Gender);
            (function (PersonType) {
                PersonType[PersonType["Student"] = 0] = "Student";
                PersonType[PersonType["Employee"] = 1] = "Employee";
                PersonType[PersonType["Guardian"] = 2] = "Guardian";
            })(PersonType || (PersonType = {}));
            exports_1("PersonType", PersonType);
            (function (ContactNumberType) {
                ContactNumberType[ContactNumberType["Mobile"] = 0] = "Mobile";
                ContactNumberType[ContactNumberType["Work"] = 1] = "Work";
                ContactNumberType[ContactNumberType["Home"] = 2] = "Home";
                ContactNumberType[ContactNumberType["Other"] = 3] = "Other";
            })(ContactNumberType || (ContactNumberType = {}));
            exports_1("ContactNumberType", ContactNumberType);
            (function (AddressType) {
                AddressType[AddressType["StreetAddress"] = 0] = "StreetAddress";
                AddressType[AddressType["PostalAddress"] = 1] = "PostalAddress";
            })(AddressType || (AddressType = {}));
            exports_1("AddressType", AddressType);
        }
    }
});
//# sourceMappingURL=Enums.js.map