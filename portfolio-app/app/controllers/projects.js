import Ember from 'ember';

export default Ember.Controller.extend({
  basicTabsSelection: null,
  basicTabsContent: null,
  
  keyObserver: function() {
    var currentTab = this.get('basicTabsSelection');
    switch (currentTab) {
      case 'swift':
        this.transitionToRoute('projects.swift');
      break;
      case 'html':
        this.transitionToRoute('projects.html');
      break;
      case 'hardware':
        this.transitionToRoute('projects.hardware');
      break;
    }
  }.observes('basicTabsSelection'),
  
  setupController: function() {
    var dataArray = [ 
      {id: 'swift', title: 'Swift'},
      {id: 'html', title: 'HTML/CSS/JS'},
      {id: 'hardware', title: 'Hardware'}
    ];
    
    this.set('basicTabsContent', dataArray);
    this.set('basicTabsSelection', 'swift');
  }
});
