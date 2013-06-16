Ext.define('SuperMe.view.Personas', {
    extend: 'Ext.dataview.List',
    xtype: 'personas',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        items: [{
            xtype: 'container',
            html: "Moms I'd Like to Meet"
        }, {
            xtype: 'list',
            fullscreen: true,
            itemTpl: '{persona}',
            data: [
                { persona: 'Frugalistic' },
                { persona: 'Social Butterfly' },
                { persona: 'Latte & Laptop' },
                { persona: 'Other' },
                { persona: 'Frugalistic' },
                { persona: 'Social Butterfly' },
                { persona: 'Latte & Laptop' },
                { persona: 'Other' }
            ]
        }]
    }
});