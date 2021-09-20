// 暂时不用放着
fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    }).forEach(function (file) {
    var modelFile = require(path.join(__dirname, file));
    var schema = new mongoose.Schema(modelFile.schema);

    db.models[modelFile.name] = mongo.model(modelFile.name, schema, modelFile.name);
});