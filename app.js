
  
 
 

 function getWords(){
    x= document.getElementById('words');
    let counter=0;
    let longestWord="";
    let longestWordLength=0;
   
   
    let input=x.innerText;
   
    let wordArr=input.split(/\s+/);
    

   
   wordArr=wordArr.filter(element => element.length>0);
  
  
   
    wordArr.forEach(element => {
        if(element!=" " || element!=""){
            //console.log(wordArr);
           counter++; 
          if(element.length>longestWordLength){
            longestWordLength=element.length;
            longestWord=element;
          }
        }
    });

   
    
    
    

        
    newText = input.replace(new RegExp(longestWord, "g"), `<span>${longestWord}</span>`);
    
    if(longestWord==wordArr[wordArr.length-1]){
      newText+="&nbsp;";
  }
    
    x.innerHTML=newText;
    
    let y=document.getElementById('word-count');
    y.innerHTML=`Your word count is ${counter}`;

 

}
 
 
 



   
 