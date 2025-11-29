function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  console.log(createAdder(5)(10));
  
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter(), counter());
  
  for (var i = 1; i <= 5; i++) {
    (function(i) {
      setTimeout(() => console.log(i), i * 50);
    })(i);
  }
  
  function remember() {
    const seen = new Set();
    return function(value) {
      if (seen.has(value)) return "already exists";
      seen.add(value);
      return "stored";
    };
  }
  const cache = remember();
  console.log(cache(10), cache(10));
  
  const multiplyBy = x => y => x * y;
  console.log(multiplyBy(2)(5));
  
  const maxOfThree = (a, b, c) => Math.max(a, b, c);
  console.log( maxOfThree(4, 9, 2));
  
  const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);
  console.log(sumAll(1, 2, 3, 4, 5));
  
  function test() {
    console.log( a);
    var a = 10;
  }
  test();
  
  const greet = name => `Hello ${name}`;
  console.log(greet("John"));
  
  const obj = {
    name: "A",
    say() {
      setTimeout(() => {
        console.log(this.name);
      }, 100);
    }
  };
  obj.say();
  
  (function() {
    console.log("Hello IIFE");
  })();
  
  const privateModule = (function() {
    let secret = 42;
    return {
      getSecret: () => secret
    };
  })();
  console.log(privateModule.getSecret());
  
  const counterModule = (function() {
    let count = 0;
    return {
      inc: () => ++count,
      dec: () => --count
    };
  })();
  console.log(counterModule.inc(), counterModule.inc(), counterModule.dec());
  
  const objFixed = (function() {
    return {
      x: 10
    };
  })();
  console.log( objFixed);
  
  for (var j = 1; j <= 3; j++) {
    (function(j) {
      setTimeout(() => console.log( j), j * 100);
    })(j);
  }
  
  