import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { InventoryModule } from './inventory/inventory.module';
import { RidersModule } from './riders/riders.module';
import { StoresModule } from './stores/stores.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [OrdersModule, InventoryModule, RidersModule, StoresModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
