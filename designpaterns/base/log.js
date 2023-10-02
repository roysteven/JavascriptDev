let log = (function(ctx){
    const DEBUG_TITLE = '[Debug]';
    const  INFO_TITLE = '[INFO]';
    const TRACE_TITLE = '[TRACE]';

    return {
        debug: (s)=>{console.log(DEBUG_TITLE, s);},
        info:  (s)=>{console.log(INFO_TITLE, s);},
        trace: (s)=>{console.log(TRACE_TITLE, s);}
    }
})();
module.exports = log;