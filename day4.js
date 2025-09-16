function result(marks) {
    let totalMarks = 5;
    let percentage = (marks / totalMarks) * 100;
    return percentage; // ✅ return value
}

let marksObtained = 4;
console.log("Percentage: " + result(marksObtained) + "%");
