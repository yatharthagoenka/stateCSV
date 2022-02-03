import { Document } from 'mongoose';

export interface State extends Document{
  readonly name: string;
  readonly code: string;
}