export default function getStudentIdsSum(students) {
  return students.reduce((value, sum) => value + sum.id, 0);
}
