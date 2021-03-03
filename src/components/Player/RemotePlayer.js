import {Howl} from 'howler'
var Radio = function(podcasts, radio) {
  var self = this;

  self.podcasts = podcasts;
  self.index = 0;

  // Setup the display for each station.
  for (var i = 0; i < self.podcasts.length; i++) {
    window['title' + i].innerHTML =
      '<b>' + self.podcasts[i].id + '</b> ' + self.podcasts[i].title;
    window['podcast' + i].addEventListener(
      'click',
      function(index) {
        var isNotPlaying =
          self.podcasts[index].howl && !self.podcasts[index].howl.playing();

        radio.stop();

        if (isNotPlaying || !self.podcasts[index].howl) {
          radio.play(index);
        }
      }.bind(self, i)
    );
  }
};

Radio.prototype = {
  play: function(index) {
    var self = this;
    var sound;

    index = typeof index === 'number' ? index : self.index;
    var data = self.stations[index];

    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: data.src,
        html5: true,
        format: ['mp3', 'aac'],
      });
    }

    sound.play();

    self.toggleStationDisplay(index, true);

    self.index = index;
  },

  stop: function() {
    var self = this;

    var sound = self.stations[self.index].howl;

    self.toggleStationDisplay(self.index, false);

    if (sound) {
      sound.stop();
    }
  },

  toggleStationDisplay: function(index, state) {
    var self = this;

    window['station' + index].style.backgroundColor = state
      ? 'rgba(255, 255, 255, 0.33)'
      : '';

    window['live' + index].style.opacity = state ? 1 : 0;

    window['playing' + index].style.display = state ? 'block' : 'none';
  },
};
