const componentesApp = angular.module('componentesApp', [ 'ui.bootstrap' ])

const usuarioController = componentesApp.controller('UsuarioController', UsuarioController)
const contadorController = componentesApp.controller('ContadorController', ContadorController)
componentesApp.component('usuarioViewer', usuarioViewer)
componentesApp.component('contadorSpinner', contadorSpinner)
