// src/tracking/tracking.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracking } from '../tracking.entity';

@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(Tracking)
    private trackingRepository: Repository<Tracking>,
  ) {}

  findAll(): Promise<Tracking[]> {
    return this.trackingRepository.find();
  }

  create(tracking: Tracking): Promise<Tracking> {
    return this.trackingRepository.save(tracking);
  }
}
