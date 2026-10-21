import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../services/pedidos';
@Component({ selector: 'app-cadastrar-pedido', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './cadastrar-pedido.html' })
export class CadastrarPedido {
  cliente = '';
  lanche = '';
  quantidade = 1;
  mensagem = '';
  constructor(public service: PedidosService) {}
  cadastrar(): void {
    if (!this.cliente.trim() || !this.lanche.trim() || this.quantidade < 1) {
      this.mensagem = 'Preencha todos os campos corretamente.';
      return;
    }
    this.service.adicionar({ id: Date.now(), cliente: this.cliente.trim(), lanche: this.lanche.trim(), quantidade: this.quantidade, status: 'Pendente' });
    this.cliente = '';
    this.lanche = '';
    this.quantidade = 1;
    this.mensagem = 'Pedido cadastrado!';
  }
}
