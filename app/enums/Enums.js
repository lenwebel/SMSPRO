System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Gender, PersonType, ContactNumberType, AddressType, YearLevel;
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
            (function (YearLevel) {
                YearLevel[YearLevel["PrePrep"] = 9999] = "PrePrep";
                YearLevel[YearLevel["Prep"] = 0] = "Prep";
                YearLevel[YearLevel["YearLevel1"] = 2] = "YearLevel1";
                YearLevel[YearLevel["YearLevel2"] = 3] = "YearLevel2";
                YearLevel[YearLevel["YearLevel3"] = 4] = "YearLevel3";
                YearLevel[YearLevel["YearLevel4"] = 5] = "YearLevel4";
                YearLevel[YearLevel["YearLevel5"] = 6] = "YearLevel5";
                YearLevel[YearLevel["YearLevel6"] = 7] = "YearLevel6";
                YearLevel[YearLevel["YearLevel7"] = 8] = "YearLevel7";
                YearLevel[YearLevel["YearLevel8"] = 9] = "YearLevel8";
                YearLevel[YearLevel["YearLevel9"] = 10] = "YearLevel9";
                YearLevel[YearLevel["YearLevel10"] = 11] = "YearLevel10";
                YearLevel[YearLevel["YearLevel11"] = 12] = "YearLevel11";
                YearLevel[YearLevel["YearLevel12"] = 13] = "YearLevel12";
            })(YearLevel || (YearLevel = {}));
            exports_1("YearLevel", YearLevel);
        }
    }
});
//# sourceMappingURL=Enums.js.map