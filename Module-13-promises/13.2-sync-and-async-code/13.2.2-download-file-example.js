function download(url) {
    console.log(`Start downloading video from ${url} ...`);

    setTimeout(() => {
        const fileName = url.split("/").pop();
        console.log(`Video downloaded from ${url} to ${fileName}.`);
    }, 2000);
}

function process(videoFile) {
    console.log(`Start processing ${videoFile} ...`);

    setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";
// ["https:", 'www.thinkful.com', "sync-and-async.mov" ]

const fileName = download(url);

process(fileName);



/* 
sync code

function download is defined

function process is defined

const url = "https://www.thinkful.com/sync-and-async.mov";

const fileName = download(url);

console.log(`Start downloading video from ${url} ...`);

process(fileName);

console.log(`Start processing ${videoFile} ...`);


*/



/* 
async code


setTimeout(() => {
        const fileName = url.split("/").pop();
        console.log(`Video downloaded from ${url} to ${fileName}.`);
    }, 2000);

setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);

*/