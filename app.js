/**
 * DECLARAMOS EL REQUERIMIENTO DEL MÓDULO Express
 */
const expressLib = require("express")

/**
 * INSTANCIAMOS EL MODULO DE Express PARA USARLO
 */
var appExpress = expressLib()

/**
 * GENERAMOS UN MÉTODO POR DEFECTO EN LA RAIZ DE LA APLICACIÓN DONDE
 * SOLO SE PINTA UN TEXTO: "raíz"
 */
appExpress.get("/", function(req, res) {
    res.send("raíz")
})

/**
 * DECLARAMOS UN MÉTODO PARA EL VERBO GET Y EN EL CUAL SE REGRESA UN
 * CONTENIDO ESTÁTICO DE UN JSON
 */
appExpress.get("/getVehicles", function(req, res) {
    let datos = [
        { 
            id : 1,
            smallname : "Hilux",
            description : "vehículo asignado al departamento de sistemas de información",
            imageURL : "http://imgs.resources.com/img123.jpg"
        },
        {
            id : 2,
            smallname : "NP 200 1",
            description : "vehículo asignado a la coordinación de redes",
            imageURL : "http://imgs.resources.com/img456.jpg"
        },
        { 
            id : 3,
            smallname : "NP 200 2",
            description : "vehículo asignado a la coordinación de conectividad",
            imageURL : "http://imgs.resources.com/img789.jpg"
        }
    ]

    // SE IMPRIME UN MENSAJE EN CONSOLA PARA CONFIRMAR EL USO DEL MÉTODO
    console.log("getVehicles " + (new Date).toISOString().substring(0, 10))
    console.log(req.originalUrl.toString())
    
    // SE DEVUELVE EN LA SALIDA ESTANDAR EL OBJETO JSON
    res.send(datos)
})

/**
 * DECLARAMOS UN MÉTODO PARA EL VERBO GET Y EN EL CUAL SE REGRESA UN
 * CONTENIDO ESTÁTICO DE UN JSON TENIENDO UN PARÁMETRO POR RECIBIR COMO
 * "username" SIN EL CARACTER ":"
 */
appExpress.get("/getFavoriteVehicles/:username", function(req, res) {
    let datos = [
        { 
            latitud : 20.5961356,
            longitud : -101.2015589,
            altitud : 15, 
            time : req.params.dataDate,
            temperatura : 31.05,
            dispositivo : "Mi Casa"
        },
        {
            latitud : 20.517969,
            longitud : -101.207230,
            altitud : 15, 
            time : req.params.dataDate,
            temperatura : 35.05,
            dispositivo : "Mi Vecino"
        },
        { 
            latitud : 20.5970999,
            longitud : -101.206893,
            altitud : 15, 
            time : req.params.dataDate,
            temperatura : 45.05,
            dispositivo : "No se sabe"
        }
    ]

    console.log("getFavoriteVehicles: " + req.params.username)
    res.send(datos)
})

/**
 * POSICIONAMOS LA APLICACION COMO ESCUCHA EN EL PUERTO 3000/TCP Y
 * SE IMPRIME UN MENSAJE PARA ASEGURARNOS DE QUE SE EJECUTÓ CORRECTAMENTE
 */
appExpress.listen(3000, function() {
    console.log("Aplicacion ejecutándose")
})