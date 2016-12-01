import Ember from 'ember';

export default Ember.Controller.extend({
  cardArray: null,
  
  setupController: function() {
    var cardArrayInfo = [
      {
        title: 'Boggle',
        image: '../assets/images/boggleScreenShot.png',
        id: 'boggle',
        linkTitle: 'View in Github',
        link: 'https://github.com/adilanchian/Projects/tree/master/programs-in-java/Boggle',
        content: 'This is an desktop app of the classic board game, Boggle. This was a semester long project.'
      },
      {
        title: 'Hillcipher',
        image: '../assets/images/hillcipherScreenShot.png',
        id: 'hillcipher',
        linkTitle: 'View in Github',
        link: 'https://github.com/adilanchian/Projects/tree/master/programs-in-java/Hillcipher',
        content: 'A program that encrypts the alphabetic letters in a file using the Hill cipher. The program must generate output to the console (terminal) in a specified format.'
      },
    ];
    this.set('cardArray', cardArrayInfo);  
  }
});
