// src/tracking/tracking.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { Tracking } from '../tracking.entity';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Get()
  findAll() {
    return this.trackingService.findAll();
  }

  @Post()
  create(@Body() tracking: Tracking) {
    return this.trackingService.create(tracking);
  }
}
