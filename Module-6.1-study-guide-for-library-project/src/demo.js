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
            return rosterObj.studentId === studentObj.id;
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

// console.log(getStudentsForCourse(oneCourse, students));



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Tuesday Problems start here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




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
    let totalCount = 0;
    //loop through the courses array
    courses.forEach((courseObj)=>{
        //look at the currentCourse's roster array for each student in the roster the array 
        const {roster} = courseObj;
        
        roster.forEach((rosterObj)=>{
            //check if current rosterObjs studentId matches the given students id. every time we find a match, increment a total count by 1
            if(rosterObj.studentId === student.id){
                totalCount++;
            }
        })
    })
    //return the total count
    return totalCount;
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
10- Given a student object, an array of course objects and an array of instructors objects->

should return an array of all the courses that the given student is enrolled in with the instructor embedded

output should look like this like this: [
  {
    id: 1,
    name: 'Javascript Fundamentals',
    category: 'Software Engineering',
    instructorId: 3,
    roster: [ {Object}, {Object}, {Object}, {Object}, {Object} ],
    instructor: { id: 3, name: {Object} }
  },
  {
    id: 2,
    name: 'Python Fundamentals',
    category: 'Software Engineering',
    instructorId: 2,
    roster: [ {Object}, {Object}, {Object} ],
    instructor: { id: 2, name: {Object} }
  },
  etc;

*/

function getCoursesStudentTakes(student={}, courses=[], instructors=[]) {
    //Get only the coures that the student is enrolled in by looping through the courses array
    let coursesStudentTakes = courses.filter((courseObj)=>{
        //for each course object, check if the given student's id is in the courses roster. if it is, then make it part of our result;
        const {roster} = courseObj;
        let foundStudent = roster.find((rosterObj)=>{
            //callback for the find method needs to return a boolean
            return rosterObj.studentId === student.id;
        })
        // console.log("found student is this", foundStudent)
        //foundStudent will either be an object that matched or undefined if the student was not in the roster for the current course

        //filter needs to return a boolen. return true if the foundStudent is found
        if(foundStudent !== undefined){
            return true;
        }else{
            return false;
        }


        /* The two returns below are also valid! */
        // return foundStudent!==undefined

        // return foundStudent;
    })

    //With the filtered array of only enrolled courses, then map each of those courses with the instructor and add the instructor as a key to course object
    let result = coursesStudentTakes.map((courseObj)=>{
        //extract the instructorId from teh current course Obj
        const {instructorId} = courseObj;
        //look at the instructor dataset to find the first instructr that matches the current courseObj's instructor id
        let foundInstructor = instructors.find((instructorObj)=>{
            return instructorObj.id === instructorId
        })

        //embed the foundinstructor into the current course object
        courseObj.instructor = foundInstructor;

        //.map needs to return the data you want in your final result. it can be any
        return courseObj;

    })

    return result;
}

// console.log(getCoursesStudentTakes(student1, courses, instructors));

/*
11. Given an array of courses, should return the total number of courses that  currently have at least one person behind
*/

function getCoursesNotOnPaceCount(courses = []) {
    let total = 0;
    //look at the roster for each course in the courses array
    courses.forEach((courseObj)=>{
        const {roster} = courseObj;
        let isSomeoneNotOnPace = roster.some((rosterObj)=>{
            //if the current rosterObj onpace is === false
            return rosterObj.onPace === false;
        })

        if(isSomeoneNotOnPace===true){
            total++;
        }

    })

    return total;
}

function getCoursesNotOnPaceCountUsingReduce(courses = []) {
    //look at the roster for each course in the courses array
    const total = courses.reduce((accumulator,courseObj)=>{
        const {roster} = courseObj;
        let isSomeoneNotOnPace = roster.some((rosterObj)=>{
            //if the current rosterObj onpace is === false
            return rosterObj.onPace === false;
        })

        if(isSomeoneNotOnPace===true){
            accumulator++;
        }

        //reduce callback method needs to return the accumulator
        return accumulator;

    },0)

    return total;
}

// console.log(getCoursesNotOnPaceCountUsingReduce(courses));



/* ~~~~~~~~~~~~~~~~~~~~~Tuesday PM starts here ~~~~~~~~~~~~~~~~~~~~~~~ */

/* 
12. Get most common course categories and order them from most popular to least popular. Limit the count to the top two-> Output in this format

// [
//     { name: "Software Engineering", count: 3 },
//     { name: "Finance", count: 2 },
//     { name: "Psychology", count: 2 },
// ]


*/
function getMostCommonCategories(courses=[]){
    //have an object to keep track of categories and counts
    let lookUp = {}
    //for each course object in courses array-> look at the category property
    courses.forEach((courseObj)=>{
        const {category} = courseObj;
        //check our lookUpObj to see if the key repping the current category exists.
        if(lookUp.hasOwnProperty(category)){
            //if exists, increment value by 1
            lookUp[category] += 1;
        }else{
            //if no exists, create a key and set the value to be 1
            lookUp[category] = 1;
        }
    })
    // console.log(lookUp)
    // console.log(Object.keys(lookUp))
    const categoriesArray = Object.keys(lookUp) //[ 'Software Engineering', 'Psychology', 'Finance' ]

    /* ~~~~~~~~ for each way ~~~~~~~~~*/
    // let result = []
    // categoriesArray.forEach(category=>{
    //     let count = lookUp[category];
    //     let currentObj = { name: category, count: count }
    //     result.push(currentObj);
    // })
    /* ~~~~~~~~~ end for each way ~~~~~~~~~*/

    let result = categoriesArray.map(category=>{
        let count = lookUp[category];
        let currentObj = { name: category, count: count }
        return currentObj;
    })
    //.slice(0,2) will let me limit the result to the top 2 results
    return result.slice(0,2)
    //get the array of keys from lookup
    /* 
        {
           "Software Engineering": 3,
           "Psychology": 2,
           "finance": 2
        }
    */

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
    //sort courses array based on roster.length
    
}

function getMostPopularCourses(courses = []) {
    //sort courses array based on roster.length
    courses.sort((courseA, courseB)=>{
        return courseB.roster.length - courseA.roster.length
    })

    let result = courses.map((courseObj)=>{
        const {name,roster} = courseObj;
        let obj = { name, rosterSize: roster.length };
        return obj;
    })

    return result.slice(0,3)

}

// console.log(getMostPopularCourses(courses));

/* 

14. getMostPopularInstructors()- Get instructors of the 2 largest classes 

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function getMostPopularInstructors(courses=[], instructors=[]) {
    //sort courses array based on roster.length
    courses.sort((courseA, courseB)=>{
        return courseB.roster.length - courseA.roster.length
    })

    let topTwoCourses = courses.slice(0,2);
    console.log(topTwoCourses)

    
    //for each course, look at its instructorId and find an instructor from the instructors array whose id is equal to the current course's instructorId
    let result = topTwoCourses.map((courseObj)=>{
        const {instructorId,roster} = courseObj;
        let foundInstructor = instructors.find((instructorObj)=>{
            return instructorObj.id === instructorId;
        })
        // console.log(`${foundInstructor.name.first} ${foundInstructor.name.last}`)
        let formattedName = helperJoinFirstAndLastNames(foundInstructor.name.first, foundInstructor.name.last)
        
        let obj = { name: formattedName, numStudents: roster.length };

        return obj;
    })

    return result;
}

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`
}

console.log(getMostPopularInstructors(courses, instructors));
