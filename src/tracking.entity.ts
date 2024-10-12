// src/tracking.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tracking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;
}
