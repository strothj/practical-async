// class MusicPlayer {
//   constructor() {
//     this.listeners = {};
//   }

//   on(eventName, listener) {
//     if (!this.listeners.hasOwnProperty(eventName)) {
//       this.listeners[eventName] = [listener];
//     }
//     else {
//       this.listeners[eventName].push(listener);
//     }
//   }

//   emit(eventName, ...args) {
//     if (!this.listeners.hasOwnProperty(eventName)) {
//       return;
//     }

//     this.listeners[eventName].forEach((listener) => {
//       listener.apply(null, args);
//     });
//   }
// }

const player = new (require('events')).EventEmitter();

player.on('start', (artist, song) => {
  console.log(`Starting audio stream playin ${artist} ${song}`);
});

player.on('stop', () => {
  console.log('Stopping audio stream');
});

player.on('start', () => {
  console.log('Updating UI to started state');
});

player.on('stop', () => {
  console.log('Updating UI to stopped state');
});

player.emit('start', 'Sleater Kinney', 'No Cities to Love');
player.emit('stop');
