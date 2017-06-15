const usuarioViewer = {  
    bindings: {
        usuario: '<'
    },
    controller: class UsuarioViewerController {
        constructor() { }
        
        get usuarioClass() {
            if (this.usuario.esMujer()) {
                return "danger" 
            } else {
                return "info"
            }
        }
    },
    templateUrl: './partials/usuario.html'
}