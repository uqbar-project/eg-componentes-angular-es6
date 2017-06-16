const contadorSpinner = {  
    bindings: {
        contador: '='
    },
    controller: class ContadorSpinnerController {
        constructor() {}
        get valorClass() {
            if (this.contador.valor > 0) {
                return "primary"
            } else {
                return "warning"
            }
        }
    },
    templateUrl: './partials/contador.html'
}