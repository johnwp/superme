Ext.define("SuperMe.model.User", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {name: "id",            type: "auto"},
            {name: "first_name",    type: "auto"},
            {name: "last_name",     type: "auto"},
            {name: "avatar_loc",    type: "auto"},
            {name: "email",         type: "auto"},
            {name: "password",      type: "auto"},
            {name: "phone",         type: "auto"},
            {name: "location",      type: "auto"},
            {name: "child_dob",     type: "auto"},
            {name: "persona_id",    type: "auto"},
            {name: "group_id",      type: "auto"},
            {name: "group_owner_flag",  type: "auto"},
            {name: "points",         type: "auto"},
            {name: "name",           type: "auto"}
        ]
    }
});