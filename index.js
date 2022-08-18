// Write your solution in this file!
const employee = {
    name: " ",
    streetAddress: " "
  };
  //"before each" hook for "returns an employee with the original key value pairs and the new key value pair"

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    let myEmployee = { ...employee, [key]: value };
    return myEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let myEmployee = { ...employee };
    delete myEmployee[key];
    return myEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }