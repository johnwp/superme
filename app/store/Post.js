Ext.define("SuperMe.store.Post", {
    extend: "Ext.data.Store",
    require: [
        "SuperMe.model.Post"
    ],
    model: "SuperMe.model.Post",
    proxy: {
        type: "ajax",
        url : "/service/post",
        noCache: false,
        enablePagingParams: false,
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