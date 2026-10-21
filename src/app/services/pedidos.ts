import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
@Injectable({ providedIn: 'root' })
export class PedidosService {
  private pedidos: Pedido[] = [];
  listar(): Pedido[] { return this.pedidos; }
  adicionar(pedido: Pedido): void { this.pedidos.push(pedido); }
  remover(id: number): void { this.mudarStatus(id, 'Cancelado'); }
  aceitar(id: number): void { this.mudarStatus(id, 'Aceito'); }
  pedidoEmPreparo(id: number): void { this.mudarStatus(id, 'Em preparo'); }
  pedidoPronto(id: number): void { this.mudarStatus(id, 'Pronto'); }
  pedidoSaiuParaEntrega(id: number): void { this.mudarStatus(id, 'Em rota'); }
  marcarEntregue(id: number): void { this.mudarStatus(id, 'Entregue'); }
  private mudarStatus(id: number, status: string): void {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) pedido.status = status;
  }
}
