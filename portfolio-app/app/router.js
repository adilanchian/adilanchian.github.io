import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('programs', function() {
    this.route('swift');
    this.route('c');
    this.route('java');
  });
  this.route('projects');
  this.route('about');
});

export default Router;
