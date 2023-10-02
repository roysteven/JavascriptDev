//Main entry: code lunch starting point
var fp = require('./designpaterns/dp.factory');
var m_base = require('./designpaterns/base/base');
let Log = m_base.Log;
let Test = m_base.Test;

console.log("Testing");
let f = fp.FactoryDesignPatern;
fp.whoami.call(f, "");

Test('Testing Module works');
Log.debug('Debug Module works');
Log.info('Info Module works');
Log.trace('Trace Module works');