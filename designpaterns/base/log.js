let log = (function(ctx){
    const DEBUG_TITLE = '[Debug]';
    const  INFO_TITLE = '[INFO]';
    const TRACE_TITLE = '[TRACE]';
    
    return {
        whoami: function whoami(s){console.log("Start module named:", this.name, this);},
        debug: (s)=>{console.log(DEBUG_TITLE, s);},
        info:  (s)=>{console.log(INFO_TITLE, s);},
        trace: (s)=>{console.log(TRACE_TITLE, s);}
    }
})();
module.exports = log;