const books = [
    {
        id: 1,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        publisher: { 
            name: "Simon & Schuster",
            state: "Maryland" 
        },
    },
    {
        id: 2,
        title: "How to win friends and influence People",
        author: "Dale Carnegie",
        publisher: { 
            name: "Simon & Schuster",
            state: "Maryland" 
        },
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        publisher: { 
            name: "Warner Books",
            state: "California" 
        },
    },
    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        publisher: { 
            name: "Penguin Books",
            state: "Maryland" 
        },
    },
];

const students = {
    "Lebron": {
        finished: [1,2],
        notFinished: [3,4],
    },
    "Steph": {
        finished: [1],
        notFinished: [2,3,4],
    },
    "Jessie": {
        finished: [1,3,4],
        notFinished: [2],
    },
    "Kevin": {
        finished: [3],
        notFinished: [2],
    }
};



/*
1. Get books by publisher name
*/

function getBooksByPublisherName(books=[], publisherName=""){

    let result= books.filter((bookObj)=>{
        return bookObj.publisher.name === publisherName
    })
    return result;
}

// console.log(getBooksByPublisherName(books, "Simon & Schuster"))


/* 
2. Get a students finished books

Write a function that takes an array of books, object containing all students, and a student name.
It will return an array of book objects that represent the books that the given user has finished.
*/

function getAStudentsFinishedBooks(books=[], students={}, studentName = ""){
    //first look at the students object to check if the student exists in the object
    if(students[studentName] === undefined){
        return "Student not found"
    }

    //get the finished books of the student with that name
    let finishedBooks = students[studentName].finished;
    
    //get only the books that whose id are in the finishedBooks array 
    let result = books.filter((bookObj)=>{
        //only give back the books objects whose id is in the finishedBooks array. See if the finishedBooks array
        // if(finishedBooks.includes(bookObj.id)){
        //     return bookObj;
        // }
        return finishedBooks.includes(bookObj.id)

    })

    // console.log(result);
    return result;


}

// console.log(getAStudentsFinishedBooks(books, students, "Steph"))



/* 
3. Find if a given student has read all the books from a given publisher. Return true or false

Function inputs: list of books, object containing all students, publisher name, student name

*/

function hasStudentReadAllFromPublisher(books=[], students={}, publisherName="", studentName=""){
     //first look at the students object to check if the student exists in the object
     if(students[studentName] === undefined){
        return "Student not found"
    }
    //find the books the given student has finished
    let finishedBooks = students[studentName].finished
    //find the books from given publisher
    // let booksFromGivenPublished= books.filter((bookObj)=>{
    //     return bookObj.publisher.name === publisherName
    // })

    let booksFromGivenPublisher = getBooksByPublisherName(books,publisherName);

    let result = booksFromGivenPublisher.every((bookObj)=>{
        return finishedBooks.includes(bookObj.id)
    })

    return result;

    
}


// console.log(hasStudentReadAllFromPublisher(books, students, "Simon & Schuster", "Jessie"))



/* 
4. Given an object containing all students, and two student names, determine if the first student has read ANY books that the second student has not read yet. If so, return true. If the first student has not read any books the second student has not read, return false.

*/

function hasStudentReadOtherStudentsBooks(students={},student1Name="", student2Name=""){
    //first look at the students object to check if the student exists in the object
    if(students[student1Name] === undefined || students[student2Name] === undefined){
        return "Student not found"
    }
    
    //get finished books from first student
    let student1FinishedBooks = students[student1Name].finished;
    //get notFinished books from second student
    let student2NotfinishedBooks = students[student2Name].notFinished;

    //check if the finishedBooks of first student contains any book that is inside the second students unfinished books
    let result = student1FinishedBooks.some((bookId)=>{
        return student2NotfinishedBooks.includes(bookId)
    })

    return result;
}

// console.log(hasStudentReadOtherStudentsBooks(students, "Lebron", "Steph"));




/* 
5. Return all the student names who have read any book in the given student's notFinished list

Inputs: object of students, student name

*/

function namesOfStudents(students={}, studentName=""){
    //first look at the students object to check if the student exists in the object
    if(students[studentName] === undefined){
        return "Student not found"
    }

    //get the given students notfinished list
    let {notFinished} = students[studentName]
    
    let result = []
    //loop through the students object
    for(let key in students){
        //key is each student name
        let finishedBooks = students[key].finished

        //check if the current student's finished books list contains at least one book id that the given student has not finished, then return true;
        let hasCurrentStudentReadBook = finishedBooks.some((bookId)=>{
            return notFinished.includes(bookId)
        })
        if(hasCurrentStudentReadBook === true){

            result.push(key); //key represents a student name
        }
    }
    // notFinished.some((bookId)=>{
    // })

    return result;
}

console.log(namesOfStudents(students, "Lebron"))











