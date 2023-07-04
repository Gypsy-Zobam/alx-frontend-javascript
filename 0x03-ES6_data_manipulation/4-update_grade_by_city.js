export default function getStudentsByLocation(listStudent, city, newGrades) {
  return array.filter((i) => i.location === city).map((listStudent) => {
      const gradeI = newGrades.filter((i) => i.studentId === listStudent.id).map((x) => x.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
