import Ember from 'ember';

export default Ember.Controller.extend({
  cardArray:  null,
  
  setupController: function() {
    var cardArrayInfo = [
      {
        title: 'TinyMachine',
        image: '../assets/images/tinyMachineScreenShot.png',
        id: 'tinymachine',
        linkTitle: 'View in Github',
        link: 'https://github.com/adilanchian/Projects/tree/master/programs-in-c/TinyMachine',
        content: 'This program is a "virtual machine" written in C to simulate a computer with a one core CPU.'
      },
      {
        title: 'AddAll',
        image: '../assets/images/addAllScreenShot.png',
        id: 'addall',
        linkTitle: 'View in Github',
        link: 'https://github.com/adilanchian/Projects/tree/master/programs-in-c/AddAll',
        content: 'Given a set of numbers your goal is to add them all, while minimizing the cost of the addition. At any point, you may choose to add any two of the integers. The cost of doing so is simply the sum of the two numbers.'
      },
      {
        title: 'ListyString',
        image: '../assets/images/listyStringScreenShot.png',
        id: 'listyString',
        linkTitle: 'View in Github',
        link: 'https://github.com/adilanchian/Projects/tree/master/programs-in-c/ListyString',
        content: 'This program uses linked lists to represent strings. Functions have been created to manipulate these linked lists.'
      },
      {
        title: 'LinkedList',
        image: '../assets/images/linkedListC++.png',
        id: 'linkedlist',
        linkTitle: 'View in Github',
        link: 'https://github.com/adilanchian/Projects/tree/master/programs-in-c%2B%2B/LinkedList',
        content: 'Choose your own adventure game, that takes you through multiple scenarios where you decide the outcome! Developed for Apple Watch using Swift' 
      },
    ];
    this.set('cardArray', cardArrayInfo);  
  }
});
