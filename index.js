const fs= require('fs');
const filepath='./randomFile.txt';

const createFile=()=>{
    fs.writeFileSync(filepath,'Hello World!!','utf-8');
    console.log('File created');
}
const readFile=()=>{
    const fileData = fs.readFileSync(filepath,'utf-8');
    console.log(`Data from file: ${fileData}`);
}
const writeFile=(newContent)=>{
    const fileData = fs.writeFileSync(filepath,newContent,'utf-8');
    console.log("File rewritten.");
}
const uploadFile=(appendedContent)=>{
    const fileData = fs.appendFileSync(filepath,appendedContent,'utf-8');
    console.log("File uploaded.");
}

createFile();
readFile();
writeFile('Good Morning');
uploadFile(', Smriti');
readFile()
