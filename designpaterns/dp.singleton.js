// Singleton design pattern
function Employee() {
    this.name = '';
    this.type = '';
    this.employeeDate = '';
}
function Boss(name) { this.name = name; this.type = 'Boss'; this.employeeDate = Date.now(); }
Boss.prototype = new Employee();

let Org = (function Orgization(name, owner) {
    let boss = null;
    function getBoss() {
        if (!boss) boss = createBoss();
        return boss;
    };
    function createBoss() {
        return new Boss(owner);
    }
    return {
        getBoss:getBoss
    }
})('Toronto Badminton Club', 'AnnyChris')


////////////////////////////////////////
function tester(action) {
    console.log('Singleton design pattern tester.');
    console.log('===First query===');
    const bossa = Org.getBoss();
    action.call(bossa);
    console.log('Employee Date:', bossa.employeeDate);
    console.log('===Second query===');
    const bossb = Org.getBoss();
    action.call(bossb);
    console.log('Employee Date:', bossb.employeeDate);
}
module.exports = {
    SignletonPatternTester:tester
}