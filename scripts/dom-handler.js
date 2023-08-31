const DOMHandler = (function (parentSelector) {
  const parent = document.querySelector(parentSelector);
  if (!parent) throw new Error("Parent not found");
  // Retornar un objeto estas propiedades y metodos
  return {
    module: null,
    load(module) {
      // Se almacena provisionalmente el modulo, para utilizarlo en recarga (reload)
      this.module = module;
      // Se remplaza el contenido existente en parent seleccionado, con el objeto module (aqui JS lo convierte a string, por ello el objeto debe tener algun metodo llamado toString(), para que convierta en string solo lo que se quiere y no todo el objeto)
      parent.innerHTML = module;
      // Se ejecuta todos los eventos que posee dicho modulo
      module.addListeners();
    },
    reload() {
      // Se recarga la pagina con el modulo pasado anteriormente, el cual fue almacenado gracias a this.module = module;
      this.load(this.module);
    },
  };
})("#root");

export default DOMHandler;

// Cuando se hace el console.log(DOMHandler) retorna {module: null, load: ƒ, reload: ƒ}

// cada objeto que se cargue (osea el module), debera poseer toString() y addListeners(), de esta forma:

// const Module = {
//   toString() {
//     // return render();
//   },
//   addListeners() {
//     // listen();
//   },
// };
