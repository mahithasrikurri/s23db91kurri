var Apple = require('../models/Apple');
// List of all Costumes
exports.Apple_list = async function(req, res) {
    try{
    theApple = await Apple.find();
    res.send(theApple);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific Apple.
exports.Apple_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Apple detail: ' + req.params.id);
};
// Handle Apple create on POST.
exports.Apple_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Apple create POST');
};
// Handle Apple delete form on DELETE.
exports.Apple_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Apple delete DELETE ' + req.params.id);
};
// Handle Apple update form on PUT.
exports.Apple_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Apple update PUT' + req.params.id);
};

//VIEWS
// Handle a show all view
exports.Apple_view_all_Page = async function(req, res) {
try{
theApple = await Apple.find();
res.render('Apple', { title: 'Apple Search Results', results: theApple });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle Apple create on POST.
exports.Apple_create_post = async function(req, res) {
console.log(req.body)
let document = new Apple();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.name = req.body.name;
document.color = req.body.color;
document.price = req.body.price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

