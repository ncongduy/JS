let Employee = {};

Employee.salary = 100000;

let payGrades = {
  entryLevel: {
    taxMultiplier: 0.05,
    benefits: ["health"],
    minSalary: 10000,
    maxSalary: 49999,
  },
  midLevel: {
    taxMultiplier: 0.1,
    benefits: ["health", "housing"],
    minSalary: 50000,
    maxSalary: 99999,
  },
  seniorLevel: {
    taxMultiplier: 0.2,
    benefits: ["health", "housing", "wellness", "gym"],
    minSalary: 100000,
    maxSalary: 200000,
  },
};

export let getCadre = function () {
  if (
    Employee.salary >= payGrades.entryLevel.minSalary &&
    Employee.salary <= payGrades.entryLevel.maxSalary
  ) {
    return "entryLevel";
  } else if (
    Employee.salary >= payGrades.midLevel.minSalary &&
    Employee.salary <= payGrades.midLevel.maxSalary
  ) {
    return "midLevel";
  } else return "seniorLevel";
};

export let calculateTax = function () {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
};

export let getBenefits = function () {
  return payGrades[getCadre()].benefits.join(", ");
};

export let calculateBonus = function () {
  return 0.02 * Employee.salary;
};

export let reimbursementEligibility = function () {
  let reimbursementCosts = {
    health: 5000,
    housing: 8000,
    wellness: 6000,
    gym: 12000,
  };
  let totalBenefitsValue = 0;
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
};

// console.log(Employee);

export default Employee;
