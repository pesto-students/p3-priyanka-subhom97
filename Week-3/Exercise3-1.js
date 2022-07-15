
function memoize(fn) {
    let cache = new Map(); 
    return function (...args) {
      const key = args.toString();
      if (cache.get(key)) {
        return cache.get(key); 
      }
      cache.set(key, fn(...args)); 
      return cache.get(key);
    };
  }
  
  
  function sum(...args) {
    let sum = 0;
    for (let i of args) {
      sum = sum + i;
    }
    return sum;
  }
  
  
  const addM = memoize(sum);
  

  function time(fn) {
    console.time();
    fn();
    console.timeEnd();
  }
  
  time(() => addM(10000000000000000, 100)); 
  time(() => addM(100)); 
  time(() => addM(100, 200)); 
  time(() => addM(10000000000000000, 100)); 
  time(() => addM(10000000000000000, 100));
  time(() => addM(10000000000000000, 100));
  time(() => addM(10000000000000000, 100));
  time(() => addM(10000000000000000, 100));