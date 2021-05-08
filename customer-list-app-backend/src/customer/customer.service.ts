import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Customer} from '../interfaces/customer.interface';
import {CreateCustomerDTO} from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }
    async getAllCustomer(): Promise<Customer[]> {
        return await this.customerModel.find().exec();
    }
    async getCustomer(customerID): Promise<Customer> {
        return await this.customerModel.findById(customerID).exec();
    }
    async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const newCustomer = await new this.customerModel(createCustomerDTO);
        return newCustomer.save();
    }
    async updateCustomer(customerID, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        return this.customerModel.findByIdAndUpdate(customerID, createCustomerDTO, {new: true});
    }
    async deleteCustomer(customerID): Promise<any> {
        return this.customerModel.findByIdAndRemove(customerID);
    }
}
