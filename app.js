let btnStartStop = document.getElementById('btnStartStop');
let btnSpeed = document.getElementById('btnSpeed');
let main = document.querySelector('main');
// let objects = document.querySelectorAll('main div[class=row] div[class=circle]');
// let objects = document.querySelectorAll('main div[class=row][visibility="visible"] div[class=circle]');
let objects = document.getElementsByClassName('circleVisible');
// let objects = document.getElementsByTagName('main div[class=row][visibility="visible"] div[class=circle]');
let timerID;
let timeMS = 1000;
let currObj=objects[0];
let prevObj=objects[objects.length-1];
currOpacity = 0.5;




btnStartStop.addEventListener('click', fnBtnStartStop);
btnSpeed.addEventListener('input', fnBtnSpeed);
main.addEventListener('click', fnChangeColor);
main.addEventListener('click', fnChangeSize);
intensityBtn.addEventListener('input', fnIntensityBtn);
rowsNumber.addEventListener('input', fnRowsNumber);




function fnBtnStartStop(e){
 
    if(e.target.value=='START'){
        e.target.value='STOP' 
        currObj.style.opacity = 1;
        timerID = setInterval(function(){
         

            if(currObj!==objects[objects.length-1]){
                if(currObj.nextElementSibling!==null){
                    prevObj = currObj;
                    currObj = currObj.nextElementSibling;
                } else {
                    prevObj = currObj;
                    currObj = currObj.parentElement.nextElementSibling.children[0];
                }

            } else{
                prevObj = objects[objects.length-1];
                currObj = objects[0];
            }

            currObj.style.opacity = 1;
            prevObj.style.opacity = currOpacity;

      
        }, timeMS);

    } else {
        e.target.value='START';
        clearInterval(timerID);
        currObj.style.opacity = currOpacity;
    } 
}

function fnBtnSpeed(){

    timeMS = btnSpeed.value;
   
}


function fnChangeColor(e){
  if(colorCheckbox.checked){
    e.target.style.backgroundColor = inputColor.value;
  }


}

function fnChangeSize(e){
if(sizeCheckbox.checked){
    e.target.style.width = `${circleSize.value}px`
    e.target.style.height = `${circleSize.value}px`
}

}

function fnIntensityBtn(e){

    currOpacity = intensityBtn.value/100;
    let arr = Array.from(objects);

arr.forEach(element => {

        element.style.opacity = currOpacity;
    });
    
}

function fnRowsNumber (e){
    console.log(rowsNumber.value, typeof rowsNumber.value);
    spanRowsNumber.textContent = rowsNumber.value;

    switch (rowsNumber.value){
        case '1':
            row2.style.display = 'none';
            row2.style.visibility = 'hidden';
            document.querySelectorAll('#row2 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row3.style.display = 'none';
            row3.style.visibility = 'hidden';
            document.querySelectorAll('#row3 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row4.style.display = 'none';
            row4.style.visibility = 'hidden';
            document.querySelectorAll('#row4 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row5.style.display = 'none';
            row5.style.visibility = 'hidden';
            document.querySelectorAll('#row5 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row6.style.display = 'none';
            row6.style.visibility = 'hidden';
            document.querySelectorAll('#row6 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row7.style.display = 'none';
            row7.style.visibility = 'hidden';
            document.querySelectorAll('#row7 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })
        

            console.log('objects.length: ', objects.length)
            break;

        case '2':
            row2.style.display = 'flex';
            row2.style.visibility = 'visible';
            document.querySelectorAll('#row2 div').forEach(element=>{
                element.classList.add('circleVisible')
            })

            row3.style.display = 'none';
            row3.style.visibility = 'hidden';
            document.querySelectorAll('#row3 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row4.style.display = 'none';
            row4.style.visibility = 'hidden';
            document.querySelectorAll('#row4 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row5.style.display = 'none';
            row5.style.visibility = 'hidden';
            document.querySelectorAll('#row5 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row6.style.display = 'none';
            row6.style.visibility = 'hidden';
            document.querySelectorAll('#row6 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row7.style.display = 'none';
            row7.style.visibility = 'hidden';
            document.querySelectorAll('#row7 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })
        

            console.log('objects.length: ', objects.length)

        break;
  
        case '3':
            row2.style.display = 'flex';
            row2.style.visibility = 'visible';
            document.querySelectorAll('#row2 div').forEach(element=>{
                element.classList.add('circleVisible')
            })

            row3.style.display = 'flex';
            row3.style.visibility = 'visible';
            document.querySelectorAll('#row3 div').forEach(element=>{
                element.classList.add('circleVisible')
            })

            row4.style.display = 'none';
            row4.style.visibility = 'hidden';
            document.querySelectorAll('#row4 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row5.style.display = 'none';
            row5.style.visibility = 'hidden';
            document.querySelectorAll('#row5 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row6.style.display = 'none';
            row6.style.visibility = 'hidden';
            document.querySelectorAll('#row6 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row7.style.display = 'none';
            row7.style.visibility = 'hidden';
            document.querySelectorAll('#row7 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })
        


            console.log('objects.length: ', objects.length)

        break;
        case '4':

        row2.style.display = 'flex';
            row2.style.visibility = 'visible';
            document.querySelectorAll('#row2 div').forEach(element=>{
                element.classList.add('circleVisible')
            })

            row3.style.display = 'flex';
            row3.style.visibility = 'visible';
            document.querySelectorAll('#row3 div').forEach(element=>{
                element.classList.add('circleVisible')
            })

            row4.style.display = 'flex';
            row4.style.visibility = 'visible';
            document.querySelectorAll('#row4 div').forEach(element=>{
                element.classList.add('circleVisible')
            })

            row5.style.display = 'none';
            row5.style.visibility = 'hidden';
            document.querySelectorAll('#row5 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row6.style.display = 'none';
            row6.style.visibility = 'hidden';
            document.querySelectorAll('#row6 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })

            row7.style.display = 'none';
            row7.style.visibility = 'hidden';
            document.querySelectorAll('#row7 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })
            console.log('objects.length: ', objects.length)

        break;
        case '5':
            
        row2.style.display = 'flex';
        row2.style.visibility = 'visible';
        document.querySelectorAll('#row2 div').forEach(element=>{
            element.classList.add('circleVisible')
        })

        row3.style.display = 'flex';
        row3.style.visibility = 'visible';
        document.querySelectorAll('#row3 div').forEach(element=>{
            element.classList.add('circleVisible')
        })

        row4.style.display = 'flex';
        row4.style.visibility = 'visible';
        document.querySelectorAll('#row4 div').forEach(element=>{
            element.classList.add('circleVisible')
        })

        row5.style.display = 'flex';
        row5.style.visibility = 'visible';
        document.querySelectorAll('#row5 div').forEach(element=>{
            element.classList.add('circleVisible')
        })

        row6.style.display = 'none';
        row6.style.visibility = 'hidden';
        document.querySelectorAll('#row6 div').forEach(element=>{
            element.classList.remove('circleVisible')
        })

        row7.style.display = 'none';
        row7.style.visibility = 'hidden';
        document.querySelectorAll('#row7 div').forEach(element=>{
            element.classList.remove('circleVisible')
        })
        console.log('objects.length: ', objects.length)

        break;
        case '6':
            row2.style.display = 'flex';
            row2.style.visibility = 'visible';
            document.querySelectorAll('#row2 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row3.style.display = 'flex';
            row3.style.visibility = 'visible';
            document.querySelectorAll('#row3 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row4.style.display = 'flex';
            row4.style.visibility = 'visible';
            document.querySelectorAll('#row4 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row5.style.display = 'flex';
            row5.style.visibility = 'visible';
            document.querySelectorAll('#row5 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row6.style.display = 'flex';
            row6.style.visibility = 'visible';
            document.querySelectorAll('#row6 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row7.style.display = 'none';
            row7.style.visibility = 'hidden';
            document.querySelectorAll('#row7 div').forEach(element=>{
                element.classList.remove('circleVisible')
            })
            console.log('objects.length: ', objects.length)

        break;
        case '7':
            row2.style.display = 'flex';
            row2.style.visibility = 'visible';
            document.querySelectorAll('#row2 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row3.style.display = 'flex';
            row3.style.visibility = 'visible';
            document.querySelectorAll('#row3 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row4.style.display = 'flex';
            row4.style.visibility = 'visible';
            document.querySelectorAll('#row4 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row5.style.display = 'flex';
            row5.style.visibility = 'visible';
            document.querySelectorAll('#row5 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row6.style.display = 'flex';
            row6.style.visibility = 'visible';
            document.querySelectorAll('#row6 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
    
            row7.style.display = 'flex';
            row7.style.visibility = 'visible';
            document.querySelectorAll('#row7 div').forEach(element=>{
                element.classList.add('circleVisible')
            })
  

        break;
    }

    prevObj = objects[objects.length-1];
    currObj = objects[0];
}