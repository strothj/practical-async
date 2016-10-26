const EventEmitter = require('events');

class ProgressBar extends EventEmitter {
  constructor() {
    super();
    setImmediate(() => {
      this.emit('start');
      for (let i = 1; i <= 100; i++) {
        console.log(i);
        if (i % 10 === 0) this.emit('progress', i);
      }
      this.emit('end');
    });
  }
}

const progressBar = new ProgressBar();
progressBar.on('start', () => {
  console.log('Progress started');
});

progressBar.on('progress', (i) => {
  console.log(`Progress: ${i}`);
});

progressBar.on('end', () => {
  console.log('Progress ended');
});
