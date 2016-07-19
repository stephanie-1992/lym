// 1. Rescantando el argumento que 
// pasado al script
var ageArgument = Number (process.argv[2]);

// Conectarnos ala base de dato
// Paso 1. Cargar el drive en nuestro script
var mongodb = require('mongodb');
// Paso 2. El drive de Mongodb nos proporciona
// un cliente, por lo que lo extraemos de 
// la libreria
var mongoClient = mongodb.MongoClient;
// Paso 3. Conectamos el cliente con la base
// de datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function (err, db){
    // Verificando si hubo un error en la
    // conexion
    if(err){
        console.log(">Error al conectarse a:" +
        'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    // Obteniendo la coleccion
    var parrotsCollection = db.collection('parrots');
    // Aplicando un query sobre la coleccion
    var objetoResultado = parrotsCollection.find({
            age : {$gt : ageArgument}
        });
        // 
        objetoResultado.toArray(function(err,docs){
            console.log(docs);
            // Cerrando la conexion
            db.close();
        });
});