/*
We will demonstrate the following built in array methods
    .find() 
    .filter()
    .map()
    .some()
    .every()


    
    */
    const employees = [
        {
            name: "Lebron James",
            salary: 110000,
            company: {
                name: "Google",
                city: "Reston",
                state: "Virginia",
            },
            languages: ["Javascript", "Java", "Python"],
        },
        {
            name: "Scooby Doo",
            salary: 200000,
            company: {
                name: "GreenChef",
                city: "New York City",
                state: "New York",
            },
            languages: ["Html", "Css"],
        },
        {
            name: "Larry David",
            salary: 80000,
            company: {
                name: "Comedy",
                city: "Los Angeles",
                state: "California",
            },
            languages: ["Javascript", "Java", "Python"],
        },
        {
            name: "Beyonce",
            salary: 90000,
            company: {
                name: "Google",
                city: "Brooklyn",
                state: "New York",
            },
            languages: ["Javascript", "Java", "Python"],
        }
    ];

//.find() -> it returns the first item that matches a given condition, even if more than one item matches. If there is no match, find() returns undefined.
//find an employee who is named "Larry David"



function findEmployeeByName(employees=[], name=""){

    let foundEmployee = employees.find((employeeObj,index)=>{
        //return a condition that will evaluate to true or false if the employeeObj matches the name. YOU MUST RETURN OR IT WILL NOT WORK!
        return employeeObj.name === name;
    })

    return foundEmployee
}


function findEmployeeByNameShorter(employees=[], name=""){

    let foundEmployee = employees.find((employeeObj,index)=> employeeObj.name === name)

    return foundEmployee
}



// console.log(findEmployeeByName(employees, "Scooby Doo"))


//.filter() -> This method returns a new array of only the items that match a certain condition.
//get all the employees who are making over a given amount. If nothing matches the filter condition, it gives back an empty array ([])
function findHighEarners(employees, amount){
    let highEarners =  employees.filter((employeeObj)=>{
        //return a condition that will evaluate to true or false if the employeeObj matches the name. YOU MUST RETURN OR IT WILL NOT WORK!
        return employeeObj.salary >= amount;
    })

    //[lebronObject,scoobyDooObject]
    return highEarners
}


// console.log(findHighEarners(employees, 100000))




//.map() -> this code processes each item in the array and creates a new value for each item in the original array. Each item in the original array maps to an item in the new array.
//give back a new array containing only the company names and city for each employee in the given list
function findCompanyNamesAndCity(employees=[]){
    let result = employees.map((employeeObj)=>{
        return {companyName: employeeObj.company.name, city: employeeObj.company.city}
    })
    return result;
}

// console.log(findCompanyNamesAndCity(employees))








//.some() -> The some() method accepts a callback function that implements a comparison that is executed for each item in the array, similar to the previous methods. If the callback function returns true for any item in the array, then the entire some() method returns true.
//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees=[], companyName=""){
    let result = employees.some((employeeObj)=>{
        return employeeObj.company.name === companyName
    })

    return result;
}

// console.log(doesCompanyHaveEmployee(employees, "Comedy Central"))




//.every() ->The every() method works by checking the condition given against every item in the array. If that condition ever fails, it will return false. Otherwise, it will return true.
//use .every() to indicate whether every employee is making over a certain salary
function areAllEmployeesGettingPaidGivenAmount(employees=[], amount){
    let result =  employees.every((employeeObj)=>{
        return employeeObj.salary >= amount
    })

    return result;
}


// console.log(areAllEmployeesGettingPaidGivenAmount(employees, 12))




/* You can also combine the built in array methods!! */

/* Use filter() and map() to give back a new array containing only the company names and city for each employee in the given list who have a salary greater than or equal to a given amount

Hint: use .filter() to get back only the employees who make a given amount or more, then use .map to transform that data to a new array containing the company names and city of those employees
*/



function getCompaniesThatPayBread(employees=[], amount){
    //find all the employees who make over a given amount
    let highEarners = employees.filter((employeeObj)=>{
        return employeeObj.salary >= amount;
    })

    //from that list of employess making over a given amount, get a copy of that data transformed to show only the company names and company cities
    let highPayingCompanies = highEarners.map((employeeObj)=>{
        return {companyName: employeeObj.company.name, city: employeeObj.company.city}
    })

    return highPayingCompanies

}

function getCompaniesThatPayBreadShorterVersion(employees=[], amount){
    //find all the employees who make over a given amount
    return employees.filter(
            (employeeObj)=>employeeObj.salary >= amount
        ).map(
            (employeeObj)=> ({companyName: employeeObj.company.name, city: employeeObj.company.city})
        )

}


// console.log(getCompaniesThatPayBreadShorterVersion(employees, 100000))






/* Use filter() and some() method to find if ANY employee from a given state has a salary of over a given amount */


function anyEmployeeFromStateEarningOverAmount(employees=[], amount, state){
    let stateEmployees = employees.filter((employeeObj)=>{
        return employeeObj.company.state === state
    })

    // console.log(stateEmployees)
    let result = stateEmployees.some((employeeObj)=>{
        return employeeObj.salary >= amount
    })

    return result;
}


// console.log(anyEmployeeFromStateEarningOverAmount(employees, 100000, "New York"))







