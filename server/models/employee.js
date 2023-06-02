import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
});

employeeSchema.statics.findEmployees = function () {
    return this.find().exec();
  };

  employeeSchema.statics.createEmployee = function (firstName, lastName, age) {
    const newEmployee = new this({ firstName, lastName, age });
    return newEmployee.save();
  };
  
  employeeSchema.statics.findByIdAndUpdateEmployee = function (id, updatedData) {
    return this.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  };
  
  employeeSchema.statics.findByIdAndDeleteEmployee = function (id) {
    return this.findByIdAndDelete(id).exec();
  };

const Employee = model('Employee', employeeSchema);


export default Employee;
