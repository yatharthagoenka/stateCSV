import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { State } from './interfaces/state.interface';
import { CreateStateDTO } from './dto/create-state.dto';

@Injectable()
export class StateService {

    constructor(@InjectModel('State') private readonly stateModel: Model<State>) { }
    
    async addState(createStateDTO: CreateStateDTO): Promise<State> {
        const newState = new this.stateModel(createStateDTO);
        return newState.save();
    }  
        
    async getState(stateID): Promise<State> {
        const state = await this.stateModel.findById(stateID).exec();
        return state;
    }
        
    async getStates(): Promise<State[]> {
        const States = await this.stateModel.find().exec();
        return States;
    }

    async editState(stateID, createStateDTO: CreateStateDTO): Promise<State> {
        const editedState = await this.stateModel.findByIdAndUpdate(stateID, createStateDTO, { new: true });
        return editedState;
      }
      async deleteState(stateID): Promise<any> {
        const deletedState = await this.stateModel.findByIdAndRemove(stateID);
        return deletedState;
      }

}
