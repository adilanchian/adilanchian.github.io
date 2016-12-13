import Ember from 'ember';

export default Ember.Controller.extend({
  cardArray: null,
  
  setupController: function() {
    var cardArrayInfo = [
      {
        title: 'Mineral Oil Computer',
        image: '../assets/images/mineral-oil-mobo.jpg',
        id: 'mineraloil',
        linkTitle: 'View Mineral Computer',
        link: 'https://github.com/adilanchian/Projects/tree/master/submerged-mineral-oil-computer',
        content: 'This is a custom built computer that runs under mineral oil. It wasa built for fun and to see how I could make it work as a daily computer'
      }
    ];
    this.set('cardArray', cardArrayInfo);  
  }
});
