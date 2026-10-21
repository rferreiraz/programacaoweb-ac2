import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../services/pedidos';
@Component({ selector: 'app-lista-pedidos', standalone: true, imports: [RouterLink], templateUrl: './lista-pedidos.html' })
export class ListaPedidos { constructor(public service: PedidosService) {} }
