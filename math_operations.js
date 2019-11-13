function suma (data) {
    var x = Number(data.x)
    var y = Number(data.y)
    var z = Number(data.z)
    return x+y+z;
}

function resta (data) {
    var x = Number(data.x)
    var y = Number(data.y)
    var z = Number(data.z)
    return x-y-z;
}

module.exports.suma = suma;
module.exports.resta = resta;