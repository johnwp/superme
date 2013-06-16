Ext.define("SuperMe.store.User", {
    extend: "Ext.data.Store",
    require: [
        "SuperMe.model.User"
    ],
    model: "SuperMe.model.User",
    proxy: {
        type: "ajax",
        noCache: false,
        enablePagingParams: false,
        url : "/service/user",
        reader: {
            type: "json"
//            rootProperty: "users"
        }
    },
    autoLoad: false
});

//Ext.create("Ext.List", {
//    fullscreen: true,
//    store: myStore,
//    itemTpl: "{lastName}, {firstName} ({age})"
//});