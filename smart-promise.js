const OldPromise = global.Promise;

class Promise extends OldPromise {
  constructor(callback) {
    const newCallback = (resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Timeout!!!");
      }, 1000);

      const newReject = (...args) => {
        clearTimeout(timer);
        reject(...args);
      };

      const newResolve = (...args) => {
        clearTimeout(timer);
        resolve(...args);
      };

      callback(newResolve, newReject);
    };
    super(newCallback);
  }
}

global.Promise = Promise
