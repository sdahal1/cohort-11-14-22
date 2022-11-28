# Bootleg Facebook Application
## This is like Facebook, but not really though.


### Instructions to run this code

Here are some steps that need to be followed:
1. Download this code from github repository
2. Run npm install from the project folder to install its packages/dependencies
3. run npm start to start the server
4. go on the browser at localhost:5000 to see the front end of the application

Top players in the NBA (in no particular order)
+ Lebron James
- Giannis
- Luka
- Steph
- Kevin Durant


You **must** download from the _NodeJS_ library for this to work.


If the app does not run, go on the server.js file and make sure to add this block of code: 
```javascript

function sortAscending(data=[]){
    //1. it will modify the original
    //2. the parameters are different
    data.sort((elementA, elementB)=>{
        //if you return a negative number -> it will move elementA before elementB
        //if you return a positive number -> it will move elementB before elementA
        //if you return a 0, it does nothing
    
        return elementA-elementB;
    })
    return data;
}
```


If issues persist, please ask Instructor Rob. [Click here](https://www.youtube.com/@instructorrob) to see his Youtube: 


Here is Steph Curry shooting (splash!)
![Here is Steph Curry shooting](https://media.tenor.com/SaHVquNnFHgAAAAC/stephen-curry-mean.gif)