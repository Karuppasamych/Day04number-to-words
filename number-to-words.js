// Write A Program To Accept A Number From User And Print That Number In Words But In Reverse Order


let intnumber = prompt('Enter the numeric value');
if(isNaN(intnumber)== false){
    while( intnumber > 0){

        let rem = intnumber % 10;
        let intnumberdiv = Math.floor(intnumber / 10);
        intnumber = intnumberdiv;
        switch(rem){
            case 0 :
                console.log ('Zero');
                break;
            case 1 :
                console.log ('One');
                break;
            case 2 :
                console.log ('Two');
                break;
            case 3 :
                console.log ('Three');
                break;
            case 4 :
                console.log ('Four');
                break;
            case 5 :
                console.log( 'Five');
                break;
            case 6 :
                console.log( 'Six');
                break;    
            case 7 :
                console.log ('Seven');
                break;    
            case 8 :
                console.log ('Eight');
                break;
            case 9 :
                console.log ('Nine');
                break;
        }
    }
    
}
else{
    console.log("Enter the positive number");
}