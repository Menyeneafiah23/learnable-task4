constructor(studentID, name, dateOfBirth, email, phoneNumber, address, courseEnrolled, enrollmentDate, status, gradeLevel); {
    this.studentID = studentID;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.courseEnrolled = courseEnrolled;
    this.enrollmentDate = enrollmentDate;
    this.status = status;
    this.gradeLevel = gradeLevel;
}
// Method to register the student
register(); {
    console.log(`Student ${this.name} with ID ${this.studentID} has been registered.`);
}
// Method to update student information
updateInfo(newInfo); {
    Object.assign(this, newInfo);
    console.log(`Student ${this.name}'s information has been updated.`);
}
// Method to view courses
viewCourses(); {
    console.log(`Courses for ${this.name}: ${this.courseEnrolled}`);
}

// Example usage:
let student = new student(
'S12345', 
'Mary John', 
'2000-01-15', 
'maryjohn@gmail.com', 
'123-456-7890', 
'123 Cat St', 
'Computer Science', 
'2023-09-01', 
'active', 
'Senior'
);



student.register();
student.viewCourses();
student.updateInfo({ 
    email: 'brightbassey@gmail.com', 
    phoneNumber: '987-654-3210'
});

