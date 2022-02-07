import React from 'react';

function App(){
//let currDate = new Date(2022,2,6,9);
//let currDate = new Date(2022,2,6,13);
//let currDate = new Date(2022,2,6,23);

let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
const cssStyle = { };

if(currDate>=0 && currDate<12){
    greeting = 'Good Morning';
    cssStyle.color='antiquewhite';
}else if(currDate>=12 && currDate<19){
    greeting = 'Good Afternoon';
    cssStyle.color='aqua';
}else{
    greeting = 'Good Night';
    cssStyle.color='pink';
}

return(
    <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
);
}

export default App;