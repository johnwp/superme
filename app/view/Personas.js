Ext.define('SuperMe.view.Personas', {
    extend: 'Ext.List',
    xtype: 'personas',
    config: {
        cls: 'persona-list',
        itemTpl: '<span class="persona-type">{persona}</span><br/>' +
                 '{description}',
        data: [{
            persona: 'Belle Esprit',
            description: 'Intellectual, reserved, academic'
        }, {
            persona: 'Urban Sophisticate',
            description: 'Ambitious, stylish, connoisseur'
        }, {
            persona: 'Adventure Seeker',
            description: 'Eco- & health-conscious, progressive'
        }, {
            persona: 'Artsy-Craftsy Hipster',
            description: 'Creative, upbeat, musical'
        }, {
            persona: 'Wine & Whine',
            description: 'Chatty, relaxed, dependable'
        }, {
            persona: 'Girl’s Gone Child',
            description: 'Extroverted, enthusiastic, energetic'
        }, {
            persona: 'Domestic Diva',
            description: 'Family-focused, organized, practical'
        }, {
            persona: 'Attachment Confidante',
            description: 'Attentive, self-assured, outspoken'
        }]
//        items: [{
//            xtype: 'button',
//            scrollDock: 'bottom',
//            docked: 'bottom',
//            text: 'Load More...'
//        }]
    }
});