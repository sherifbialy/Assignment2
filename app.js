
  
 
 

 function getWords(){
    x= document.getElementById('words');
    let counter=0;
    let longestWord="";
    let longestWordLength=0;
   
   
    let input=x.innerText;
    console.log(input);
    let wordArr=input.split(" ");
    

   
   wordArr=wordArr.filter(element => element.length>0);
   console.log(wordArr);
  
   
    wordArr.forEach(element => {
        if(element!=" " || element!=""){
            //console.log(wordArr);
           counter++; 
          if(element.split("").length>longestWordLength){
            longestWordLength=element.split("").length;
            longestWord=element;
          }
        }
    });

   
    
    
    let newText=""
    if(longestWord!="&nbsp;"){
        newText = input.replace(new RegExp(longestWord, "g"), `<span>${longestWord}</span>`);
    }
    
    // if(longestWord==wordArr[wordArr.length-1]){
    //     newText+="&nbsp;";
    // }
    x.innerHTML=newText;
    let y=document.getElementById('word-count');
    y.innerHTML=`Your word count is ${counter}`;

 

}
 
 
 



   
 