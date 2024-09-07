function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: generateStudentGrades(scoreData),
    exams: generateExamSummary(examData)
  };
}

function generateExamSummary(examScoresPerStudent) {
  let scoresPerExam = sortScoresPerExam(examScoresPerStudent);
  return scoresPerExam.map((exam) => {
    return {
      average: average(exam),
      minimum: Math.min(...exam),
      maximum: Math.max(...exam),
    };
  });
}

function sortScoresPerExam(examData) {
  let exam1 = [];
  let exam2 = [];
  let exam3 = [];
  let exam4 = [];

  examData.forEach((exam) => {
    exam1.push(exam[0]);
    exam2.push(exam[1]);
    exam3.push(exam[2]);
    exam4.push(exam[3]);
  })

  return [exam1, exam2, exam3, exam4];
}

function generateStudentGrades(scoreData) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;

  return scoreData.map(grades => {
    let examAvg = average(grades.exams);
    let exerciseSum = sum(grades.exercises);
    let weightedGrade = (examAvg * EXAM_WEIGHT) + (exerciseSum * EXERCISE_WEIGHT);
    let roundedGrade = Math.round(weightedGrade)
    let letterGrade = calculateLetterGrade(roundedGrade)
    return (`${roundedGrade} (${letterGrade})`)
  });
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce((total, number) => total + number);
}

function calculateLetterGrade(grade) {
  if (grade >= 93) {
    return 'A';
  } else if (grade >= 85) {
    return 'B';
  } else if (grade >= 77) {
    return 'C';
  } else if (grade >= 69) {
    return 'D';
  } else if (grade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));