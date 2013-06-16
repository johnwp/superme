Ext.define('SuperMe.model.Post', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id',        type: 'auto'},
            {name: 'timestamp', type: 'auto'},
            {name: 'type',      type: 'auto'},
            {name: 'message',   type: 'auto'},
            {name: 'user_id',   type: 'auto'},
            {name: 'high_fives',   type: 'auto'}
        ]
    },
    each: function(record) {
        console.log('EACH!', record);
    }
});