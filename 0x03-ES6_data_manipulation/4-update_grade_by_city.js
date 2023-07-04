export default function getStudentsByLocation(listStudent, city, newGrades) {
  return array.filter((obj) => obj.location === city).map((listStudent) => {
      const gradeI = newGrades.filter((obj) => obj.studentId === listStudent.id).map((obj) => obj.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
