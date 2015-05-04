var coreValues = [
  "Set People up to Succeed<br>Believe in Them",
  "Great Work is a Matter of Pride",
  "Doing &gt; Talking",
  "Be&nbsp;Curious&nbsp;&amp; Never Stop Learning",
  "Innovate<br>Make mistakes<br>Learn",
  "Flatten the&nbsp;World&nbsp;&amp; Explore it",
  "Communicate Transparently&nbsp;&amp; Honestly",
  "Work Hard<br>Play Hard",
  "Win, Win, Win<br>=<br>Customers, Employees, Company",
  "Create Awesomeness"
];

var App = {
  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {
    this.myShakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000 // optional, determines the frequency of event generation
    });
    this.trulyRandom();
    this.myShakeEvent.start();
    window.addEventListener('shake', this.trulyRandom, false);
  },

  trulyRandom: function() {
    var following = Math.floor(Math.random() * coreValues.length);
    document.getElementById("core_value").innerHTML = coreValues[following];
  }
};

App.initialize();
