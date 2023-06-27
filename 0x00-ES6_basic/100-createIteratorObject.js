export default function createIteratorObject(report) {
  const workers = [];
  /* eslint-disable var is not ES6-friendly. */
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employe of employees) {
      workers.push(employe);
    }
  }
  /* eslint-enable var is not ES6-friendly. */

  return workers;
}
