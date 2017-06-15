const FEMENINO = "F"
const MASCULINO = "M"

class Usuario {

    constructor(nombre, fraseCabecera, sexo) {
        this.nombre = nombre
        this.fraseCabecera = fraseCabecera
        this.sexo = sexo
    }

    esMujer() {
        return this.sexo === FEMENINO
    }
}