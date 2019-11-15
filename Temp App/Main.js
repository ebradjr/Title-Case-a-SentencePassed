
//--------------------------------------DATE-----------------------------------------------------
let today = new Date();

let month = new Array();

month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


let m = today.getMonth();

let date = today.getDate() + " " + month[m] + ", " + today.getFullYear();



$(".date").text(date);


//--------------------------------------KEYUP LISTENER----------------------------------------------------------
document.getElementById("main-unit").addEventListener('keyup', () => {

    //------------GRAB BOTH LIST BOXES-------------------
    let m = document.querySelector(".main-unit-options");
    let s = document.querySelector(".second-unit-options");

    // ------------FOR THE CALCULATION IF STATMENTS---------------
    let mainUnit = m.options[m.selectedIndex].textContent.toLowerCase();
    console.log(mainUnit);
    let secondUnit = s.options[s.selectedIndex].textContent.toLowerCase();
    console.log(secondUnit);
    
    //----------------MADE A NUMBER------------------------
    let numberTyped = document.getElementById('main-unit').value;
    
    numberTyped = parseInt(numberTyped);
    console.log(numberTyped);


    //-------------------------------------TEMP CALCULATIONS---------------------------------------------------
    if (mainUnit === 'celsius') {
        if (secondUnit === 'kelvin') {
            document.getElementById('second-unit').value = numberTyped + 273.15;
        } else if (secondUnit === 'fahrenheit') {
            document.getElementById('second-unit').value = (numberTyped * 9/5) + 32;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }
    } else if (mainUnit === 'kelvin') {
        if (secondUnit === 'celsius') {
            document.getElementById('second-unit').value = numberTyped - 273.15;
        } else if (secondUnit === 'fahrenheit') {
            document.getElementById('second-unit').value = (numberTyped - 273.15) * 9/5 + 32;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }
    } else if (mainUnit === 'fahrenheit') {
        if (secondUnit === 'celsius') {
            document.getElementById('second-unit').value = (numberTyped - 32) * 5/9;
        } else if (secondUnit === 'kelvin') {
            document.getElementById('second-unit').value = (numberTyped - 32) * 5/9 + 273.15;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }
    }

    //-----------------------------------LENGTH CALULATIONS----------------------------------------------------
  

// CENTIMETERS
    if (mainUnit === 'centimeter') {
        if (secondUnit === 'inch') {
            document.getElementById('second-unit').value = numberTyped / 2.54;
        }  else if (secondUnit === 'foot') {
            document.getElementById('second-unit').value = numberTyped / 30.48;
        }  else if (secondUnit === 'yard') {
            document.getElementById('second-unit').value = numberTyped / 91.44;
        } else if (secondUnit === 'meter') {
            document.getElementById('second-unit').value = numberTyped / 100;
        } else if (secondUnit === 'mile') {
            document.getElementById('second-unit').value = numberTyped / 160934.4;
        } else if (secondUnit === 'kilometer') {
            document.getElementById('second-unit').value = numberTyped / 100000;
        } else if (secondUnit === 'nautical mile') {
            document.getElementById('second-unit').value = numberTyped / 185200;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// INCHES   
    } if (mainUnit === 'inch') {
        if (secondUnit === 'centimeter') {
            document.getElementById('second-unit').value = numberTyped * 2.54;
        }  else if (secondUnit === 'foot') {
            document.getElementById('second-unit').value = numberTyped / 12;
        }  else if (secondUnit === 'yard') {
            document.getElementById('second-unit').value = numberTyped / 36;
        } else if (secondUnit === 'meter') {
            document.getElementById('second-unit').value = numberTyped / 39.37;
        } else if (secondUnit === 'mile') {
            document.getElementById('second-unit').value = numberTyped / 63360;
        } else if (secondUnit === 'kilometer') {
            document.getElementById('second-unit').value = numberTyped / 39370.079;
        } else if (secondUnit === 'nautical mile') {
            document.getElementById('second-unit').value = numberTyped / 72913.386;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }


// FOOT
    } else if (mainUnit === 'foot') {
        if (secondUnit === 'centimeter') {
            document.getElementById('second-unit').value = numberTyped * 30.48;
        }  else if (secondUnit === 'inch') {
           document.getElementById('second-unit').value = numberTyped * 12;
        }  else if (secondUnit === 'yard') {
            document.getElementById('second-unit').value = numberTyped / 3;
        } else if (secondUnit === 'meter') {
            document.getElementById('second-unit').value = numberTyped / 3.281;
        } else if (secondUnit === 'mile') {
            document.getElementById('second-unit').value = numberTyped / 5280;
        } else if (secondUnit === 'kilometer') {
            document.getElementById('second-unit').value = numberTyped / 3280.84;
        } else if (secondUnit === 'nautical mile') {
            document.getElementById('second-unit').value = numberTyped / 6076.115;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// YARD        
    } else if (mainUnit === 'yard') {
        if (secondUnit === 'centimeter') {
            document.getElementById('second-unit').value = numberTyped * 91.44;
        }  else if (secondUnit === 'inch') {
           document.getElementById('second-unit').value = numberTyped * 36;
        }  else if (secondUnit === 'foot') {
            document.getElementById('second-unit').value = numberTyped * 3;
        } else if (secondUnit === 'meter') {
            document.getElementById('second-unit').value = numberTyped / 1.094;
        } else if (secondUnit === 'mile') {
            document.getElementById('second-unit').value = numberTyped / 1760;
        } else if (secondUnit === 'kilometer') {
            document.getElementById('second-unit').value = numberTyped / 1093.613;
        } else if (secondUnit === 'nautical mile') {
            document.getElementById('second-unit').value = numberTyped / 2025.372;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// METER       
    } else if (mainUnit === 'meter') {
        if (secondUnit === 'centimeter') {
            document.getElementById('second-unit').value = numberTyped * 100;
        }  else if (secondUnit === 'inch') {
           document.getElementById('second-unit').value = numberTyped * 39.37;
        }  else if (secondUnit === 'foot') {
            document.getElementById('second-unit').value = numberTyped * 3.281;
        } else if (secondUnit === 'yard') {
            document.getElementById('second-unit').value = numberTyped * 1.094;
        } else if (secondUnit === 'mile') {
            document.getElementById('second-unit').value = numberTyped / 1609.344;
        } else if (secondUnit === 'kilometer') {
            document.getElementById('second-unit').value = numberTyped / 1000;
        } else if (secondUnit === 'nautical mile') {
            document.getElementById('second-unit').value = numberTyped / 1852;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// MILE        
    } else if (mainUnit === 'mile') {
        if (secondUnit === 'centimeter') {
            document.getElementById('second-unit').value = numberTyped * 160934.4;
        }  else if (secondUnit === 'inch') {
            document.getElementById('second-unit').value = numberTyped * 63360;
        }  else if (secondUnit === 'foot') {
            document.getElementById('second-unit').value = numberTyped * 5280;
        } else if (secondUnit === 'yard') {
            document.getElementById('second-unit').value = numberTyped * 1760;
        } else if (secondUnit === 'meter') {
            document.getElementById('second-unit').value = numberTyped * 1609.344;
        } else if (secondUnit === 'kilometer') {
            document.getElementById('second-unit').value = numberTyped * 1.609;
        } else if (secondUnit === 'nautical mile') {
            document.getElementById('second-unit').value = numberTyped / 1.151;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// KILOMETER        
    } else if (mainUnit === 'kilometer') {
        if (secondUnit === 'centimeter') {
            document.getElementById('second-unit').value = numberTyped * 100000;
        }  else if (secondUnit === 'inch') {
        document.getElementById('second-unit').value = numberTyped * 39370.079;
        }  else if (secondUnit === 'foot') {
            document.getElementById('second-unit').value = numberTyped * 3280.84;
        } else if (secondUnit === 'yard') {
            document.getElementById('second-unit').value = numberTyped * 1093.613;
        } else if (secondUnit === 'meter') {
            document.getElementById('second-unit').value = numberTyped * 1000;
        } else if (secondUnit === 'mile') {
            document.getElementById('second-unit').value = numberTyped / 1.609;
        } else if (secondUnit === 'nautical mile') {
            document.getElementById('second-unit').value = numberTyped / 1.852;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

//NAUTICAL MILE        
    } else if (mainUnit === 'nautical mile') {
        if (secondUnit === 'centimeter') {
            document.getElementById('second-unit').value = numberTyped * 185200;
        }  else if (secondUnit === 'inch') {
        document.getElementById('second-unit').value = numberTyped * 72913.386;
        }  else if (secondUnit === 'foot') {
            document.getElementById('second-unit').value = numberTyped * 6076.115;
        } else if (secondUnit === 'yard') {
            document.getElementById('second-unit').value = numberTyped * 2025.372;
        } else if (secondUnit === 'meter') {
            document.getElementById('second-unit').value = numberTyped * 1852;
        } else if (secondUnit === 'mile') {
            document.getElementById('second-unit').value = numberTyped * 1.151;
        } else if (secondUnit === 'kilometer') {
            document.getElementById('second-unit').value = numberTyped * 1.852;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }
    }


    //-----------------------------------CURRENCY CALULATIONS----------------------------------------------------

// U.S. DOLLAR
    if (mainUnit === 'u.s. dollar') {
        if (secondUnit === 'european euro') {
            document.getElementById('second-unit').value = numberTyped * 0.910707;
        }  else if (secondUnit === 'japanese yen') {
            document.getElementById('second-unit').value = numberTyped * 107.387;
        }  else if (secondUnit === 'british pound') {
            document.getElementById('second-unit').value = numberTyped * 0.817780;
        } else if (secondUnit === 'swiss franc') {
            document.getElementById('second-unit').value = numberTyped * 0.994463;
        } else if (secondUnit === 'canadian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.33198;
        } else if (secondUnit === 'australian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.48425;
        } else if (secondUnit === 'new zealand dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.48425;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 15.1747;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }
        
// European Euro   
    } else if (mainUnit === 'european euro') {
        if (secondUnit === 'u.s. dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.09826;
        }  else if (secondUnit === 'japanese yen') {
            document.getElementById('second-unit').value = numberTyped * 117.925;
        }  else if (secondUnit === 'british pound') {
            document.getElementById('second-unit').value = numberTyped * 0.898593;
        } else if (secondUnit === 'swiss franc') {
            document.getElementById('second-unit').value = numberTyped * 1.09213;
        } else if (secondUnit === 'canadian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.46297;
        } else if (secondUnit === 'australian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.63043;
        } else if (secondUnit === 'new zealand dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.63043;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 16.6685;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }


// Japanese Yen 
    } else if (mainUnit === 'japanese yen') {
        if (secondUnit === 'european euro') {
            document.getElementById('second-unit').value = numberTyped * 0.00847916;
        }  else if (secondUnit === 'u.s. dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.00931135;
        }  else if (secondUnit === 'british pound') {
            document.getElementById('second-unit').value = numberTyped * 0.00761872;
        } else if (secondUnit === 'swiss franc') {
            document.getElementById('second-unit').value = numberTyped * 0.00925987;
        } else if (secondUnit === 'canadian dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.0124068;
        } else if (secondUnit === 'australian dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.0138256
        } else if (secondUnit === 'new zealand dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.0138256;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 0.141366;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// British Pound         
    } else if (mainUnit === 'british pound') {
        if (secondUnit === 'european euro') {
            document.getElementById('second-unit').value = numberTyped * 1.11281;
        }  else if (secondUnit === 'japanese yen') {
            document.getElementById('second-unit').value = numberTyped * 131.241;
        }  else if (secondUnit === 'u.s. dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.22214;
        } else if (secondUnit === 'swiss franc') {
            document.getElementById('second-unit').value = numberTyped * 1.21548;
        } else if (secondUnit === 'canadian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.62805;
        } else if (secondUnit === 'australian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.81450;
        } else if (secondUnit === 'new zealand dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.81450;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 18.5560;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// Swiss Franc      
    } else if (mainUnit === 'swiss franc') {
        if (secondUnit === 'european euro') {
            document.getElementById('second-unit').value = numberTyped * 0.915790;
        }  else if (secondUnit === 'japanese yen') {
            document.getElementById('second-unit').value = numberTyped * 107.986;
        }  else if (secondUnit === 'british pound') {
            document.getElementById('second-unit').value = numberTyped * 0.822868;
        } else if (secondUnit === 'u.s. dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.00559;
        } else if (secondUnit === 'canadian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.33976;
        } else if (secondUnit === 'australian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.49324;
        } else if (secondUnit === 'new zealand dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.49324;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 15.2711;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// Canadian Dollar        
    } else if (mainUnit === 'canadian dollar') {
        if (secondUnit === 'european euro') {
            document.getElementById('second-unit').value = numberTyped * 0.683483;
        }  else if (secondUnit === 'japanese yen') {
            document.getElementById('second-unit').value = numberTyped * 80.5958;
        }  else if (secondUnit === 'british pound') {
            document.getElementById('second-unit').value = numberTyped * 0.614163;
        } else if (secondUnit === 'swiss franc') {
            document.getElementById('second-unit').value = numberTyped * 0.750552;
        } else if (secondUnit === 'u.s. dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.750552;
        } else if (secondUnit === 'australian dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.11456;
        } else if (secondUnit === 'new zealand dollar') {
            document.getElementById('second-unit').value = numberTyped * 1.11456;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 11.3973;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// Australian Dollar        
    } else if (mainUnit === 'australian dollar') {
        if (secondUnit === 'european euro') {
            document.getElementById('second-unit').value = numberTyped * 0.613231;
        }  else if (secondUnit === 'japanese yen') {
            document.getElementById('second-unit').value = numberTyped * 72.3107;
        }  else if (secondUnit === 'british pound') {
            document.getElementById('second-unit').value = numberTyped * 0.550893;
        } else if (secondUnit === 'swiss franc') {
            document.getElementById('second-unit').value = numberTyped * 0.669590;
        } else if (secondUnit === 'canadian dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.897083;
        } else if (secondUnit === 'u.s. dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.673319;
        } else if (secondUnit === 'new zealand dollar') {
            document.getElementById('second-unit').value = numberTyped;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 10.2275;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// New Zealand Dollar        
    } else if (mainUnit === 'new zealand dollar') {
        if (secondUnit === 'european euro') {
            document.getElementById('second-unit').value = numberTyped * 0.613231;
        }  else if (secondUnit === 'japanese yen') {
            document.getElementById('second-unit').value = numberTyped * 72.3107;
        }  else if (secondUnit === 'british pound') {
            document.getElementById('second-unit').value = numberTyped * 0.550893;
        } else if (secondUnit === 'swiss franc') {
            document.getElementById('second-unit').value = numberTyped * 0.669590;
        } else if (secondUnit === 'canadian dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.897083;
        } else if (secondUnit === 'u.s. dollar') {
            document.getElementById('second-unit').value = numberTyped * 0.673319;
        } else if (secondUnit === 'australian dollar') {
            document.getElementById('second-unit').value = numberTyped;
        } else if (secondUnit === 'south african rand') {
            document.getElementById('second-unit').value = numberTyped * 10.2275;
        } else {
            document.getElementById('second-unit').value = numberTyped;
        }

// South African Rand
} else if (mainUnit === 'south african rand') {
    if (secondUnit === 'european euro') {
        document.getElementById('second-unit').value = numberTyped * 0.0599083;
    }  else if (secondUnit === 'japanese yen') {
        document.getElementById('second-unit').value = numberTyped * 7.06386;
    }  else if (secondUnit === 'british pound') {
        document.getElementById('second-unit').value = numberTyped * 0.0538253;
    } else if (secondUnit === 'swiss franc') {
        document.getElementById('second-unit').value = numberTyped * 0.0654272;
    } else if (secondUnit === 'canadian dollar') {
        document.getElementById('second-unit').value = numberTyped * 0.0876728;
    } else if (secondUnit === 'australian dollar') {
        document.getElementById('second-unit').value = numberTyped * 0.0977247;
    } else if (secondUnit === 'new zealand dollar') {
        document.getElementById('second-unit').value = numberTyped * 0.0977247;
    } else if (secondUnit === 'u.s. dollar') {
        document.getElementById('second-unit').value = numberTyped * 0.0657873;
    } else {
        document.getElementById('second-unit').value = numberTyped;
    }
}




    //----------------------------------------CLEAR INPUT BOXES----------------------------------------------------
    Array.from(document.querySelectorAll('.reset')).forEach(select => {
        select.addEventListener('change', () => {
        document.getElementById('main-unit').value = '';
        document.getElementById('second-unit').value = '';
            
        })
    }); 

    

});
//-------------------------------------------END OF KEYUP LISTENER-----------------------------------------------------

//CURRENCY
let currencyArr = [
    'U.S. Dollar', 
    'European Euro', 
    'Japanese Yen', 
    'British Pound', 
    'Swiss Franc', 
    'Canadian Dollar', 
    'Australian Dollar',
    'New Zealand Dollar', 
    'South African Rand'
];

//LENGTH
let lengthArr = [
    'Centimeter',
    'Inch',
    'Foot',
    'Yard',
    'Meter',
    'Mile',
    'Kilometer',    
    'Nautical Mile'
];

//TEMPERATURE
let tempArr = [
    'Celsius',
    'Kelvin',
    'Fahrenheit'
];

//--------------------------------------------CHANGE BETWEEN TEMP,LENGTH,CURRENCY--------------------------

document.getElementById('unit-converter').addEventListener('change', () => {

    //------------GRAB BOTH LIST BOXES-------------------
    let o = document.querySelector('.main-unit-options');
    let s = document.querySelector('.second-unit-options');
    
    

    
    // ------------FOR THE CALCULATION IF STATMENTS---------------
    let t = document.querySelector('#unit-converter');
    let top = t.options[t.selectedIndex].textContent.toLowerCase();
     

    
// ----------------IF STATMENTS FOR REFRESHING BOXES WITH NEW CONTENT----------------------------
    if (top == "currency") {
        // 1ST CURRENCY UNIT
        $('.main-unit-options option').remove();
        $.each(currencyArr, function(val, text) {
            o[o.length] = new Option(text, val);
        });
        document.getElementById('main-unit').value = '';
        document.getElementById('second-unit').value = '';

        // 2ND CURRENCY UNIT
        $('.second-unit-options option').remove();
        $.each(currencyArr, function(val, text) {
            s[s.length] = new Option(text, val);
        });
        document.getElementById('main-unit').value = '';
        document.getElementById('second-unit').value = '';

    } else if (top == "length") {
        // 1ST LENGTH UNIT
        $('.main-unit-options option').remove();
        $.each(lengthArr, function(val, text) {
            o[o.length] = new Option(text, val);
        });
        document.getElementById('main-unit').value = '';
        document.getElementById('second-unit').value = '';

        // 2ND LENGTH UNIT
        $('.second-unit-options option').remove();
        $.each(lengthArr, function(val, text) {
            s[s.length] = new Option(text, val);
        });
        document.getElementById('main-unit').value = '';
        document.getElementById('second-unit').value = '';
    } else {
        // 1ST TEMP UNIT
        $('.main-unit-options option').remove();
        $.each(tempArr, function(val, text) {
            o[o.length] = new Option(text, val);
        });
        document.getElementById('main-unit').value = '';
        document.getElementById('second-unit').value = '';

        // 2ND TEMP UNIT
        $('.second-unit-options option').remove();
        $.each(tempArr, function(val, text) {
            s[s.length] = new Option(text, val);
        });
        document.getElementById('main-unit').value = '';
        document.getElementById('second-unit').value = '';
    }
  
});


    
    




