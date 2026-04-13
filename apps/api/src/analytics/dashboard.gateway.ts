import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class DashboardGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('DashboardGateway');

  afterInit(server: Server) {
    this.logger.log('Init');
    
    // Simulate real-time data updates every 5 seconds
    setInterval(() => {
      this.broadcastMetrics();
    }, 5000);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    this.broadcastMetrics();
  }

  private broadcastMetrics() {
    const metrics = {
      totalOrders: Math.floor(Math.random() * 2000),
      gmv: Math.floor(Math.random() * 100000),
      ordersPerMin: (Math.random() * 10).toFixed(1),
      timestamp: new Date().toISOString(),
    };
    this.server.emit('metrics_update', metrics);
  }

  @SubscribeMessage('request_details')
  handleMessage(client: Socket, payload: any): void {
    client.emit('details_response', { status: 'success', data: 'Operational Details' });
  }
}
