// Write your solution in this file!

const employee = {
  name: "Alice Johnson",
  streetAddress: "42 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,      // copy all existing properties
    [key]: value      // update (or add) the key with the new value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // change the object directly
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // shallow copy
  delete newEmployee[key];             // remove property
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // directly remove property
  return employee;
}

