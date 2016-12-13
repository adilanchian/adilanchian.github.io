import Ember from 'ember';

export default Ember.Controller.extend({
  cardArray: null,
  
  setupController: function() {
    var cardArrayInfo = [
      {
        title: 'NerdBrander',
        image: '../assets/images/nerdbrander.png',
        id: 'nerdbrander',
        linkTitle: 'View NerdBrander',
        link: 'http://nerdbrander.com/',
        content: 'NerdBrander provides a community that encourages tech enthusiasts and established professionals alike to come together for local events, and to help one another reach the next level.'
      }
    ];
    this.set('cardArray', cardArrayInfo);  
  }
});
