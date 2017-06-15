const contadorSpinner = {  
    bindings: {
        contador: '='
    },
    controller: class ContadorSpinnerController {
        constructor() {}
        get valorClass() {
            console.log("valor classs")
            if (this.contador.valor > 0) {
                return "primary"
            } else {
                return "warning"
            }
        }
    },
    templateUrl: './partials/contador.html'
}