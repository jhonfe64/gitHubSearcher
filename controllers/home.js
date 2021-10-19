const ctrl = {}

ctrl.home = (req, res) => {
    const x = {hola: "hola"};
    res.json(x);
}



module.exports = ctrl;