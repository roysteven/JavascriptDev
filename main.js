//Main entry: code lunch starting point
var fp = require('./designpaterns/dp.singleton');
var m_base = require('./designpaterns/base/base');
let Log = m_base.Log;
let Test = m_base.Test;
let whoami = Log.whoami;

console.log("Testing", fp);
let f = fp.SignletonPatternTester;
f(whoami);
//whoami.call(f, "");

Test('Testing Module works');