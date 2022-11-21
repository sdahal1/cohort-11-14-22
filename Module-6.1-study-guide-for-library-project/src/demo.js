//import data
const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses = []) {
    return courses.length;
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total students count
function getTotalStudentsCount(students = []) {
    return students.length;
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors=[], id) {
    
    let result =  instructors.find((instructorObj)=> instructorObj.id === id);
    // if(result === undefined) {
    //     return null
    // }else{
    //     return result;
    // }

    return result === undefined ? null : result;
}

// console.log(findInstructorById(instructors, 4))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id. If no course is found, return undefined
function findCourseById(courses=[], id) {
    // return courses.find((course)=>{
    //     return course.id === id
    // })

    // let result= courses.find((course)=>{
    //     return course.id === id
    // })

    // return result;

    return courses.find((course)=> course.id === id)

}

// console.log(findCourseById(courses, 9))

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
    return students.find((student)=> student.id === id)
}

// console.log(findstudentById(students, 4))




//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students) {
    students.sort((studentA, studentB)=>{
        //return negative number or positive number
        // parkA.name.toLowerCase() > parkB.name.toLowerCase() ? 1 : -1
        // if(studentA.name.first.toLowerCase() > studentB.name.first.toLowerCase()){
        //     return 1
        // }else{
        //     return -1
        // } 

        return studentA.name.first.toLowerCase() > studentB.name.first.toLowerCase() ? 1 : -1

    })

    let topThreeStudents = students.slice(0,3);
    return topThreeStudents

}

// console.log(sortStudentsByFirstName(students))

/* 
7. Partition courses by student on pace
find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace

[
    [
        {
            id: 3,
            name: "Psychology of Alpacas",
            category: "Psychology",
            instructorId: 3,
            roster: [
                {
                    studentId: 2,
                    onPace: true
                },
                {
                    studentId: 4,
                    onPace: true
                },
                {
                    studentId: 5,
                    onPace: true
                }
            ]
        },
        {
            id: 4,
            name: "Financial Management II",
            category: "Finance",
            instructorId: 1,
            roster: [
             
                {
                    studentId: 2,
                    onPace: true
                },
                {
                    studentId: 3,
                    onPace: true
                }
            ]
        },
        {
            id: 5,
            name: "How to be Hip 101",
            category: "Psychology",
            instructorId: 4,
            roster: [
                {
                    studentId: 2,
                    onPace: true
                },
                {
                    studentId: 5,
                    onPace: true
                }
            ]
        },
    ],
    [ 
        {
            id: 1,
            name: "Javascript Fundamentals",
            category: "Software Engineering",
            instructorId: 3,
            roster: [
                {
                    studentId: 1,
                    onPace: true
                },
                {
                    studentId: 2,
                    onPace: false
                },
                {
                    studentId: 3,
                    onPace: true
                },
                {
                    studentId: 4,
                    onPace: true
                },
                {
                    studentId: 5,
                    onPace: true
                }
            ]
        },
        {
            id: 2,
            name: "Python Fundamentals",
            category: "Software Engineering",
            instructorId: 2,
            roster: [
                {
                    studentId: 1,
                    onPace: false
                },
                {
                    studentId: 3,
                    onPace: true
                },
                {
                    studentId: 5,
                    onPace: true
                }
            ]
        },
        {
            id: 6,
            name: "Bread And Cheddar- The Fundamentals",
            category: "Finance",
            instructorId: 4,
            roster: [
                {
                    studentId: 1,
                    onPace: true
                },
                {
                    studentId: 2,
                    onPace: true
                },
                {
                    studentId: 3,
                    onPace: false
                },
                {
                    studentId: 4,
                    onPace: true
                }
            ]
        },
        {
            id: 7,
            name: "React",
            category: "Software Engineering",
            instructorId: 3,
            roster: [
                {
                    studentId: 1,
                    onPace: false
                },
                {
                    studentId: 2,
                    onPace: true
                },
                {
                    studentId: 5,
                    onPace: true
                }
            ]
        },
    ]
]

*/

function partitionCoursesByStudentProgress(courses=[]) {
    //returns one array that has 2 sub-arrays inside.  The first sub array will contain the course objects where not EVERY student is on pace. The second sub array will contain the course objects where EVERY student is on pace. 
   

    //(first filter for courses where all students are pace)look at every course in the courses object using the .filter()
    let onPaceCourses = courses.filter((currentCourseObj)=>{
        //for each course object, we are interested in its roster (roster is an array)
        const {roster} = currentCourseObj;
        //loop through roster array to check if every student is on pace in that roster
         let isEveryOneOnPace = roster.every((currentRosterStudent)=>{
             return currentRosterStudent.onPace === true;
            })
        //if the current course objects roster has every student on pace, tthen put that through our filter
        return isEveryOneOnPace;

        
        
    })

    let notOnPaceCourses = courses.filter((currentCourseObj)=>{
        //for each course object, we are interested in its roster (roster is an array)
        const {roster} = currentCourseObj;
        let isSomeoneBehind = roster.some((currentRosterStudent)=>{
            return currentRosterStudent.onPace === false;
        })
        //if at least one student is behind, then isSomeoneBehind will be "true"
        return isSomeoneBehind;
        // return true;
    })

    return [notOnPaceCourses, onPaceCourses];

}

// console.log(partitionCoursesByStudentProgress(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of student objects that match the courses roster list, and add the onPace property from the roster objects to the student object. 

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}


[
    {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
        onPace: false
    }, 
    {
        id: 3,
        name: {
            first: "Mickey",
            last: "Mouse"
        },
        onPace: true
    },
     {
        id: 5,
        name: {
            first: "Patrick",
            last: "Star"
        },
        onPace: true
    }
]

*/

function getStudentsForCourse(course={}, students=[]) {
    //get the roster for the course
    const {roster} = course;
    //map each student in the roster using their studentId with a student from the students array using the id
    let result = roster.map((rosterObj)=>{
        //see if i can find a student with rosterObj.studentId in the students array
        // rosterObj.studentId
        let foundStudent = students.find((studentObj)=>{
            return rosterObj.studentId === studentObj.id
        })

        //foundStudent is a student object from the students array. We can add a new key to it representing the onPace of the student

        foundStudent.onPace = rosterObj.onPace

        //whatever you return in teh map callback, that will be in the result array for each element in the array you map through
        return foundStudent;
    })
    return result;
}

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 2,
            onPace: true,
        },
        {
            studentId: 4,
            onPace: true,
        },
        {
            studentId: 5,
            onPace: true,
        },
    ],
};

console.log(getStudentsForCourse(oneCourse, students));

/* 
9. getTotalNumberOfClassesForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfClassesEnrolledIn(student = {}, courses = []) {
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledIn(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in



*/

function getCoursesStudentEnrolledIn(student, courses, instructors) {

}

// console.log(getCoursesStudentEnrolledIn(student1, courses, instructors));

/*
11. Get count of courses that have at least one student not onPace- similar to getBooksBorrowedCount(books)
*/

function getCoursesNotOnPaceCount(courses = []) {
  
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

{
 "Software Engineering": 3,
 "Psychology": 2,
 "finance": 2
}


*/

const getMostCommonCategories = (courses = []) => {
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/

function getMostPopularCoursesHelper(courses = []) {
   
}

function getMostPopularCourses(courses = []) {
    
}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of the 2 largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function instructorsOfLargestClasses(courses=[], instructors=[]) {
    
}

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`
}

// console.log(instructorsOfLargestClasses(courses, instructors));
