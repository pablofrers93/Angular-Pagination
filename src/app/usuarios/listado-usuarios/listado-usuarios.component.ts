import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit{

  displayedColumns: string[] = ['id', 'avatar','first_name', 'last_name','email'];

  constructor(private usuarioService: UsuarioService){ }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios();
  }

  get resultados(){
    return this.usuarioService.resultados;
  }

  get totalRegistros() {
    return this.usuarioService.totalRegistros;
  }

  get registrosPorPagina() {
    return this.usuarioService.registrosPorPagina;
  }

  onPaginadoChange(event: PageEvent) {
    let pagina = event.pageIndex;
    let size = event.pageSize;
    pagina++;
    this.usuarioService.listarUsuarios(pagina, size)
  }
}
