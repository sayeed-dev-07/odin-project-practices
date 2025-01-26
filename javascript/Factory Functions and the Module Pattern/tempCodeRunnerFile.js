const Formatter = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
      log("Setting times run");
      timesRun++;
    }
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
    };
    const getTImesRun  = ()=> timesRun;
  
    return {
      makeUppercase,
      getTImesRun,
    }
  })();

console.log(Formatter.makeUppercase('sayeed'));
console.log(Formatter.makeUppercase('sayeed'));
console.log(Formatter.getTImesRun());