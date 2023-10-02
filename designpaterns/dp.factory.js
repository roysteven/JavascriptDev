// Factory design patern
function whoami() {
    console.log("Start the name:", this.name);
};

function FactoryDesignPatern() {
    this.name = 'Factory design patern';
}

module.exports = {
    whoami: whoami,
    FactoryDesignPatern: FactoryDesignPatern
}
