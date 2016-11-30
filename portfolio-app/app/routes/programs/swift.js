import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    console.log(controller.toString());
    controller.setupController();
  }
});
