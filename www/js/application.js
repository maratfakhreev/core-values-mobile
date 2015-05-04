var CORE_VALUES = [
  'Set People up to Succeed<br>Believe in Them',
  'Great Work is a Matter of Pride',
  'Doing &gt; Talking',
  'Be&nbsp;Curious&nbsp;&amp; Never Stop Learning',
  'Innovate<br>Make mistakes<br>Learn',
  'Flatten the&nbsp;World&nbsp;&amp; Explore it',
  'Communicate Transparently&nbsp;&amp; Honestly',
  'Work Hard<br>Play Hard',
  'Win, Win, Win<br>=<br>Customers, Employees, Company',
  'Create Awesomeness'
];

var INTERVAL_TIME = 20000;

var App = {
  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    var self = this;
    document.addEventListener('deviceready', function() { self.onDeviceReady(); }, false);
  },

  trulyRandom: function() {
    var following = Math.floor(Math.random() * CORE_VALUES.length);
    document.getElementById('core_value').innerHTML = CORE_VALUES[following];
  },

  startFlicker: function() {
    this.interval = setInterval(this.trulyRandom, INTERVAL_TIME);
  },

  stopFlicker: function() {
    clearInterval(this.interval);
  },

  refreshFlicker: function() {
    this.stopFlicker();
    this.startFlicker();
  },

  onDeviceReady: function() {
    this.myShakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000 // optional, determines the frequency of event generation
    });
    this.trulyRandom();
    this.startFlicker();
    this.myShakeEvent.start();

    window.addEventListener('shake', this.refreshFlicker, false);
  }
};

App.initialize();
