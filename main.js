//Main entry: code lunch starting point
var fp = require('./designpaterns/dp.factory');
var m_base = require('./designpaterns/base/base');
let Log = m_base.Log;
let Test = m_base.Test;
let whoami = Log.whoami;

console.log("Testing");
let f = fp.FactoryDesignPatern;
whoami.call(f, "");

Test('Testing Module works');