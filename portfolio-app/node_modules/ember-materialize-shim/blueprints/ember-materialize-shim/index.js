/*jshint node:true*/
module.exports = {
  description: 'ember-materialize-shim installation blueprint',
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addBowerPackageToProject('materialize', '0.97.6').then(function() {
      return this.addAddonsToProject({
        packages: [{
          name: 'ember-cli-sass',
          target: '~5.3.0'
        }, {
          name: 'ember-material-design-icons-shim',
          target: '~0.1.9'
        }]
      }).then(function() {
        return this.addPackageToProject('node-sass@~3.4.0');
      }.bind(this));
    }.bind(this));
  }
};