import Ember from 'ember';

export default Ember.Controller.extend({
  basicTabsSelection: null,
  basicTabsContent: null,
  
  keyObserver: function() {
    console.log('in observer');
    var currentTab = this.get('basicTabsSelection');
    switch (currentTab) {
      case 'swift':
        this.transitionToRoute('programs.swift');
      break;
      case 'c':
        this.transitionToRoute('programs.c');
      break;
      case 'java':
        this.transitionToRoute('programs.java');
      break;
    }
  }.observes('basicTabsSelection'),
  
  setupController: function() {
    var dataArray = [ 
      {id: 'swift', title: 'Swift'},
      {id: 'c', title: 'C/C++'},
      {id: 'java', title: 'Java'}
    ];
    
    this.set('basicTabsContent', dataArray);
    this.set('basicTabsSelection', 'swift');
  }
}); 
