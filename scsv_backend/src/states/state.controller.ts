import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete, UseGuards } from '@nestjs/common';
import { StateService } from './state.service';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { CreateStateDTO } from './dto/create-state.dto';
import { RemoveStateDTO } from './dto/remove-state.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';
    
@Controller('state')

export class StateController {
    
  constructor(private stateService: StateService) { }
    
    // Post a State
    @Post('/post')
    @UseGuards(AuthGuard("jwt"))
    async addState(@Res() res, @Body() createStateDTO: CreateStateDTO) {
        const newState = await this.stateService.addState(createStateDTO);
        return res.status(HttpStatus.OK).json({
        message: 'State has been submitted successfully!',
        state: newState,
        });
    }
    
    @Get('state/:stateID')
    async getState(@Res() res, @Param('stateID', new ValidateObjectId()) stateID) {
        const state = await this.stateService.getState(stateID);
        if (!state) {
            throw new NotFoundException('State does not exist!');
        }
        return res.status(HttpStatus.OK).json(state);
    }
    
    // Fetch all States
    @Get('allStates')
    async getStates(@Res() res) {
        const states = await this.stateService.getStates();
        return res.status(HttpStatus.OK).json(states);
    }

    @Put('/edit')
    @UseGuards(AuthGuard("jwt"))
    async editState(@Res() res, @Query('stateID', new ValidateObjectId()) stateID, @Body() createStateDTO: CreateStateDTO){
        const editedState = await this.stateService.editState(stateID, createStateDTO);
        if (!editedState) {
            throw new NotFoundException('State does not exist!');
        }
        return res.status(HttpStatus.OK).json({
        message: 'State has been successfully updated',
        state: editedState,
        });
    }
    
    @Delete('/delete')
    @UseGuards(AuthGuard("jwt"))
    async deleteState(@Res() res,  @Query('stateID', new ValidateObjectId()) stateID) {
        const deletedState = await this.stateService.deleteState(stateID);
        if (!deletedState) {
            throw new NotFoundException('State does not exist!');
        }
        return res.status(HttpStatus.OK).json({
        message: 'State has been deleted!',
        state: deletedState,
        });
    }
}