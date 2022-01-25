import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialI } from 'src/app/models/material.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popupRegistrarMaterial',
  templateUrl: './popupRegistrarMaterial.component.html',
  styleUrls: ['./popupRegistrarMaterial.component.css']
})
export class PopupRegistrarMaterialComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupRegistrarMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MaterialI,
    private api: ApiService
    ) { }

  unidades: MaterialI[] = [];
  categorias: MaterialI[] = [];

  ngOnInit() {
    this.obtenerFecha();
    this.agregarCategoriasMateriales();
    this.agregarUnidadesDeMedida();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  obtenerFecha(){
    let fechaHoy = new Date().toISOString().substring(0,10);
    let year = fechaHoy.substring(0,4);
    let mes = fechaHoy.substring(5,7);
    let dia = fechaHoy.substring(8);
    let fecha = dia + '/' + mes + '/' + year;
    this.data.FechaRegistro = fecha;
  }
  /**
   * Agrega las categorías de los materiales en el select de la vista
   * */
   agregarCategoriasMateriales(): void {
    const promise = this.api.selectMaterialsCategories().then()
    promise.then((categories) => {
      // Se crea variable de referencia al elemento select
      const $select = document.getElementById("categoriasMateriales");
      for (var category of categories) {
        // Se guarda un array con las categorias de los materiales para
        // consultar los Id cuando se llame el método actualizarMaterial
        let categoria: MaterialI = {
          IdMaterial: '', Codigo: '', IdCategoria: '', Categoria: '',
          Descripcion: '', Cantidad: '', IdUnidad: '', UnidadMedida: '',
          PrecioCompra: '', PrecioVenta: '', FechaRegistro: ''
        };
        categoria.IdCategoria = category['Id'];
        categoria.Categoria = category['CategoriaMaterial'];
        this.categorias.push(categoria);

        // Se crea una option
        const opcion = document.createElement('option');
        const valor = category['CategoriaMaterial'];
        opcion.value = valor;
        opcion.text = valor;
        $select.appendChild(opcion);
      }
    });
  } // agregarCategoriasMateriales

  /**
   * Agrega las unidades de medida en el select de la vista
   * */
   agregarUnidadesDeMedida(): void {
    const promise = this.api.selectUnits().then()
    promise.then((units) => {
      // Se crea variable de referencia al elemento select
      const $select = document.getElementById("unidadesDeMedida");
      for (var unit of units) {
        // Se guarda un array con las unidades de medida para consultar los Id
        // cuando se llame el método actualizarMaterial
        let material: MaterialI = {
          IdMaterial: '', Codigo: '', IdCategoria: '', Categoria: '',
          Descripcion: '', Cantidad: '', IdUnidad: '', UnidadMedida: '',
          PrecioCompra: '', PrecioVenta: '', FechaRegistro: ''
        };
        material.IdUnidad = unit['Id'];
        material.UnidadMedida = unit['Simbolo'];
        this.unidades.push(material);

        // Se crea una option
        const opcion = document.createElement('option');
        const valor = unit['Simbolo'];
        opcion.value = valor;
        opcion.text = valor;
        $select.appendChild(opcion);
      }
    });
  } // agregarUnidadesDeMedida

  /**
   * 
   * Genera el código del material nuevo a partir de:
   *        - las primeras tres letras de la categoría asignada
   *        - y el id que se le asignará en la base
   */
  generarCodigoMaterialNuevo(evento: any){
    const $categoria = (<HTMLSelectElement>document.getElementById("categoriasMateriales")); // Referencia al select
    let categoria = $categoria.options[$categoria.selectedIndex].innerText; // Obtener el texto del select
    let prefijoCategoria = categoria.substring(0,3); // Tres primeras letras de la categoría
    
    const promise = this.api.selectNextMaterialId().then()
    promise.then((id) => {
      let idNuevoMaterial = id['SiguienteIdMaterial']; // El nombre 'SiguienteIdMaterial' se define en el procedimiento almacenado de la BD
      this.data.Codigo = prefijoCategoria + idNuevoMaterial;
    });
  } // generarCodigoMaterialNuevo

  /**
   * Inserta un nuevo cliente en la Base de Datos
   * */
   insertarMaterialAInventario(material: MaterialI) {

    // Leer la categoría del material del select
    const $categoria = (<HTMLSelectElement>document.getElementById("categoriasMateriales")); // Referencia al select
    let Categoria = $categoria.options[$categoria.selectedIndex].innerText; // Obtener el texto del select
    let IdCategoria: string;
    for (let i = 0; i < this.categorias.length; i++) {          // Recorre el arreglo
      if (this.categorias[i].Categoria == Categoria) {          // hasta encontrar el elemento que tiene el mismo texto
        IdCategoria = this.categorias[i].IdCategoria;           // y obtiene el Id
      }
    }

    // Leer la unidad de medida del select
    const $unidad = (<HTMLSelectElement>document.getElementById("unidadesDeMedida")); // Referencia al select
    let UnidadDeMedida = $unidad.options[$unidad.selectedIndex].innerText; // Obtener el texto del select
    let IdUnidadDeMedida: string;
    for (let i = 0; i < this.unidades.length; i++) {            // Recorre el arreglo
      if (this.unidades[i].UnidadMedida == UnidadDeMedida) {    // hasta encontrar el elemento que tiene el mismo texto
        IdUnidadDeMedida = this.unidades[i].IdUnidad;           // y obtiene el Id
      }
    }

    // Leer código y fecha de registro de los input
    let codigo = (<HTMLInputElement>document.getElementById('codigo')).value;

    // Asignar al material los atributos faltantes
    material.Codigo = codigo;
    material.Categoria = Categoria;
    material.IdCategoria = IdCategoria;
    material.UnidadMedida = UnidadDeMedida;
    material.IdUnidad = IdUnidadDeMedida;

    this.api.insertMaterialInvnetory(material);
  } // insertarMaterialAInventario

}
