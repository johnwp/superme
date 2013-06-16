Ext.define('SuperMe.view.Personas', {
    extend: 'Ext.List',
    xtype: 'personas',
    config: {
        cls: 'persona-list',
        itemTpl: '<span class="persona-type">{persona}</span><br/>' +
                 '{description}',
        data: [{
            persona: 'Belle Esprit',
            description: 'Intellectual, clever, academic'
        }, {
            persona: 'Urban Sophisticate',
            description: 'Ambitious, stylish, discerning'
        }, {
            persona: 'Earth Mama',
            description: ' Attentive, confident, child-focused'
        }, {
            persona: 'Adventure Seeker',
            description: 'Active, eco- & health-conscious'
        }, {
            persona: 'Domestic Diva',
            description: 'Family-focused, organized, practical'
        }, {
            persona: 'Artsy-Craftsy Hipster',
            description: 'Creative, upbeat, imaginative'
        }, {
            persona: 'Wine & Whine',
            description: 'Chatty, relaxed, dependable, imperfect'
        }, {
            persona: "Girl’s Gone Child",
            description: 'Extroverted, enthusiastic, energetic'
        }]
//        items: [{
//            xtype: 'button',
//            scrollDock: 'bottom',
//            docked: 'bottom',
//            text: 'Load More...'
//        }]
    }
});