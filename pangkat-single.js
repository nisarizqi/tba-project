// Definisikan konfigurasi mesin Turing Anda di sini
function initializeTape() {
    zeroCount = 0;
    const input1Number= document.getElementById("input1Number").value;
    const input2Number= document.getElementById("input2Number").value;
    const numOfBlanks = 10; // Jumlah simbol blank di awal dan di akhir
    const blanks = 'B'.repeat(numOfBlanks);
    const tapeInput = blanks +  '0'.repeat(input2Number) + 1  + '0'.repeat(input1Number) + 1 +blanks;
    machine.tapes = tapeInput;
    tapePositions = numOfBlanks; // Menggeser posisi pita sesuai dengan jumlah simbol blank di awal
    currentState = machine.initialState;
    updateTapes();
  }
  
  
  const machine = {
    tapes: [""],
    initialState: "q0",
    finalState: [ "q45","q25","q35","q39"],
          transitions: [
              //STATE q0
  {
    currentState: "q0",
    currentSymbols: "0",
    newState: "q1",
    newSymbols: "B",
    moves: "right"
  },
  {
      currentState: "q0",
      currentSymbols: "1",
      newState: "q32",
      newSymbols: "B",
      moves: "right"
    },
  
  
  //STATE q1
  {
      currentState: "q1",
      currentSymbols: "0",
      newState: "q1",
      newSymbols: "0",
      moves: "right"
  },
  {
      currentState: "q1",
      currentSymbols: "1",
      newState: "q2",
      newSymbols: "1",
      moves: "right"
  },
  
  
  //state 3 
  {
  currentState: "q3",
  currentSymbols: "0",
  newState: "q3",
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q3",
  currentSymbols: "1",
  newState: "q4",
  newSymbols: "1",
  moves: "right"
  },
  
  
  
  
  //STATE 2
  {
      currentState: "q2",
      currentSymbols: "0",
      newState: "q26",
      newSymbols: "W",
      moves: "right"
  },
  
  
  
  //STATE 4
  {
      currentState: "q4",
      currentSymbols: "0",
      newState: "q4",
      newSymbols: "0",
      moves: "right"
  },
  
  {
      currentState: "q4",
      currentSymbols: "B",
      newState: "q5",
      newSymbols: "0",
      moves: "left"
  },
  
  //STATE 5
  {
      currentState: "q5",
      currentSymbols: "0",
      newState: "q5",
      newSymbols:  "0",
      moves: "left"
  },
  {
      currentState: "q5",
      currentSymbols: "1",
      newState: "q6",
      newSymbols: "1",
      moves:  "left"
  },
  
  
  // STATE q6
  {
      currentState: "q6",
      currentSymbols: "0",
      newState: "q6",
      newSymbols: "0",
      moves: "left"
  },
  {
      currentState: "q6",
      currentSymbols: "W",
      newState: "q40",
      newSymbols: "W",
      moves: "right"
  },
  
  
  //state 7
  {
  currentState: "q7",
  currentSymbols: "0",
  newState: "q7",
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q7",
  currentSymbols: "B",
  newState: "q8",
  newSymbols: "1",
  moves: "left"
  },
  
  
  //state 8 
  {
  currentState: "q8",
  currentSymbols:  "0",
  newState: "q8",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q8",
  currentSymbols: "1",
  newState: "q9",
  newSymbols: "1",
  moves: "left"
  },
  
  
  //state 9
  {
  currentState: "q9",
  currentSymbols: "W",
  newState: "q9",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q9",
  currentSymbols: "1",
  newState: "q10",
  newSymbols: "1",
  moves: "left"
  },
  
  
  //state10
  {
  currentState: "q10",
  currentSymbols: "0",
  newState: "q10",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q10",
  currentSymbols: "B",
  newState: "q11",
  newSymbols: "B",
  moves: "right"
  },
  
  //state 11
  {
  currentState: "q11",
  currentSymbols: "0",
  newState: "q12",
  newSymbols: "X",
  moves: "right"
  },
  {
  currentState: "q11",
  currentSymbols: "1",
  newState: "q24",
  newSymbols: "B",
  moves: "right"
  },
  
  //state 12
  {
  currentState: "q12",
  currentSymbols: "1",
  newState: "q13",
  newSymbols: "1",
  moves: "right"
  },
  
  
  //state 13
  {
  currentState: "q13",
  currentSymbols: "0",
  newState: "q14",
  newSymbols: "W",
  moves: "right"
  },
  {
  currentState: "q13",
  currentSymbols: "1",
  newState: "q22",
  newSymbols: "1",
  moves: "left"
  },
  
  //state 14 l
  
  {
  currentState: "q14",
  currentSymbols: "1",
  newState: "q15",
  newSymbols: "1",
  moves: "right"
  },
  {
  currentState: "q14",
  currentSymbols: "0",
  newState: "q14",
  newSymbols: "0",
  moves: "right"
  },
  
  
  //State 15
  {
  currentState: "q15",
  currentSymbols: "0",
  newState: "q16",
  newSymbols: "Y",
  moves: "right"
  },
  {
  currentState: "q15",
  currentSymbols: "Y",
  newState: "q15",
  newSymbols: "Y",
  moves: "right"
  },
  
  {
  currentState: "q15",
  currentSymbols: "1",
  newState: "q20",
  newSymbols: "1",
  moves: "left"
  },
  
  
  
  //state 16
  {
  currentState: "q16",
  currentSymbols: "0",
  newState: "q16",
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q16",
  currentSymbols: "1",
  newState: "q17",
  newSymbols: "1",
  moves: "right"
  },
  
  
  //state 17
  {
  currentState: "q17",
  currentSymbols: "0",
  newState: "q17",
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q17",
  currentSymbols: "B",
  newState: "q18",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q17",
  currentSymbols: "_",
  newState: "q18",
  newSymbols: "0",
  moves: "left"
  },
  
  //state 18
  {
  currentState: "q18",
  currentSymbols: "0",
  newState: "q18",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q18",
  currentSymbols: "1",
  newState: "q19",
  newSymbols: "1",
  moves: "left"
  },
  
  //state 19
  {
  currentState: "q19",
  currentSymbols: "0",
  newState: "q19",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q19",
  currentSymbols: "Y",
  newState: "q15",
  newSymbols: "Y",
  moves: "right"
  },
  
  
  //state 20
  {
  currentState: "q20",
  currentSymbols: "1",
  newState: "q21",
  newSymbols: "1",
  moves: "left"
  },
  {
  currentState: "q20",
  currentSymbols: "Y",
  newState: "q20",
  newSymbols: "0",
  moves: "left"
  },
  
  //state21
  {
  currentState: "q21",
  currentSymbols: "0",
  newState: "q21",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q21",
  currentSymbols: "W",
  newState: "q13",
  newSymbols: "W",
  moves: "right"
  },
  
  //state22
  {
  currentState: "q22",
  currentSymbols: "W",
  newState: "q22",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q22",
  currentSymbols: "1",
  newState: "q23",
  newSymbols: "1",
  moves: "left"
  },
  
  
  
  //state23
  
  {
  currentState: "q23",
  currentSymbols: "0",
  newState: "q23",
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q23",
  currentSymbols: "X",
  newState: "q28",
  newSymbols: "B",
  moves: "right"
  },
  
  //state 24
  {
  currentState: "q24",
  currentSymbols: "0",
  newState: "q24",
  newSymbols: "B",
  moves: "right"
  },
  {
  currentState: "q24",
  currentSymbols: "1",
  newState: "q25", //FINAL
  newSymbols: "B",
  moves: "right"
  },
  
  // //state 25
  // {
  //     currentState: "q25",
  //     currentSymbols: "0",
  //     newState: "q25",
  //     newSymbols: "B",
  //     moves: "right"
  //   },
  //   {
  //     currentState: "q25",
  //     currentSymbols: "1",
  //     newState: "q45", 
  //     newSymbols: "B",
  //     moves: "right"
  //   },
  
  //state 26
  {
  currentState: "q26",
  currentSymbols: "0",
  newState: "q3",
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q26",
  currentSymbols: "1",
  newState: "q27",  
  newSymbols: "1",
  moves: "right"
  },
  
  // //state 27
  {
  currentState: "q27",
  currentSymbols: "B",
  newState: "q36",
  newSymbols: "0",
  moves: "right"
  },
  //   {
  //     currentState: "q26",
  //     currentSymbols: "B",
  //     newState: "q27",  //final
  //     newSymbols: "1",
  //     moves: "right"
  //   },
  
  
  //state28
  {
  currentState: "q28",
  currentSymbols: "1",
  newState: "q29",
  newSymbols: "B",
  moves: "right"
  },
  {
  currentState: "q28",
  currentSymbols: "0",
  newState: "q12",
  newSymbols: "X",
  moves: "right"
  },
  
  //state 29
  {
  currentState: "q29",
  currentSymbols: "0",
  newState: "q29",
  newSymbols: "B",
  moves: "right"
  },
  
  {
  currentState: "q29",
  currentSymbols: "1",
  newState: "q30",  
  newSymbols: "B",
  moves: "right"
  },
  
  
  //state 30
  {
  currentState: "q30",
  currentSymbols: "0",
  newState: "q30",
  newSymbols: "B",
  moves: "right"
  },
  
  {
  currentState: "q30",
  currentSymbols: "1",
  newState: "q31",  //final
  newSymbols: "B",
  moves: "right"
  },
  // {
  //     currentState: "q30",
  //     currentSymbols: "0",
  //     newState: "q30",  
  //     newSymbols: "0",
  //     moves: "right"
  //   },
  //   {
  //     currentState: "q30",
  //     currentSymbols: "1",
  //     newState: "q31",  //final
  //     newSymbols: "1",
  //     moves: "right"
  //   },
  //state 31 
  {
  currentState: "q31",
  currentSymbols: "0",
  newState: "q31",
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q31",
  currentSymbols: "B",
  newState: "q45", //final
  newSymbols: "1",
  moves: "right"
  },
  
  //state32
  
  {
  currentState: "q32",
  currentSymbols: "0",
  newState: "q32",
  newSymbols: "B",
  moves: "right"
  },
  
  {
  currentState: "q32",
  currentSymbols: "1",
  newState: "q33",  //final
  newSymbols: "B",
  moves: "right"
  },
  
  //state 33
  {
  currentState: "q33",
  currentSymbols: "B",
  newState: "q34",
  newSymbols: "0",
  moves: "right"
  },
  
  //state 36
  {
  currentState: "q36",
  currentSymbols: "B",
  newState: "q37", //final
  newSymbols: "1",
  moves: "left"
  },
  
  //state 37
  {
  currentState: "q37",
  currentSymbols: "0",
  newState: "q37", //final
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q37",
  currentSymbols: "1",
  newState: "q38", //final
  newSymbols: "B",
  moves: "left"
  },
  
  //state38
  {
  currentState: "q38",
  currentSymbols: "1",
  newState: "q38", //final
  newSymbols: "B",
  moves: "left"
  },
  {
  currentState: "q38",
  currentSymbols: "0",
  newState: "q38", //final
  newSymbols: "B",
  moves: "left"
  },
  {
  currentState: "q38",
  currentSymbols: "W",
  newState: "q38", //final
  newSymbols: "B",
  moves: "left"
  },
  {
  currentState: "q38",
  currentSymbols: "B",
  newState: "q39", //final
  newSymbols: "B",
  moves: "right"
  },
  
  
  
  //state 40
  {
  currentState: "q40",
  currentSymbols: "0",
  newState: "q41",
  newSymbols: "W",
  moves: "right"
  },
  {
  currentState: "q40",
  currentSymbols: "1",
  newState: "q7", 
  newSymbols: "1",
  moves: "right"
  },
  //state 41
  {
  currentState: "q41",
  currentSymbols: "0",
  newState: "q41", 
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q41",
  currentSymbols: "1",
  newState: "q42", 
  newSymbols: "1",
  moves: "right"
  },
  
  //state42
  {
  currentState: "q42",
  currentSymbols: "0",
  newState: "q42", 
  newSymbols: "0",
  moves: "right"
  },
  {
  currentState: "q42",
  currentSymbols: "B",
  newState: "q43", 
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q42",
  currentSymbols: "_",
  newState: "q43", 
  newSymbols: "0",
  moves: "left"
  },
  
  //state 43
  {
  currentState: "q43",
  currentSymbols: "0",
  newState: "q43", 
  newSymbols: "0",
  moves: "left"
  },
  {
  currentState: "q43",
  currentSymbols: "1",
  newState: "q44", 
  newSymbols: "1",
  moves: "left"
  },
  
  //state 44
  {
  currentState: "q44",
  currentSymbols: "W",
  newState: "q40",
  newSymbols: "W",
  moves: "right"
  },
    ]
  };
  
  let currentState = machine.initialState;
  let tapePositions = Array(machine.tapes.length).fill(0);
  
  function getOffset(el){
  const rect = el.getBoundingClientRect();
  return{
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  }
  }
  
  function updateTapes() {
  const tapesContainer = document.getElementById("tapecont");
  tapesContainer.innerHTML = "";
  
    const tape = machine.tapes;
    const position = tapePositions;
  
    let tapeHTML = "";
  
    for(let i = 0; i <tape.length; i++){
      if( i == tapePositions){
        tapeHTML = tapeHTML + "<span id='currNode'>" + tape[i] + "</span>";
      }else{
        tapeHTML = tapeHTML + "<span class='node'>" + tape[i] + "</span>";
      }
    }
    // const left = tape.slice(0, position);
    // const middle = tape[position];
    const middle = position < tape.length ? tape[position] : "B";
    const stop = position;
    // const right = tape.slice(position + 1);
  
    const tapeDiv = document.createElement("div");
    tapeDiv.id = "tape";
    tapeDiv.innerHTML = tapeHTML;
  
    tapesContainer.appendChild(tapeDiv);
  }
  
  let zeroCount = 0;
  
  function runStep() {
  // Cari transisi yang sesuai dengan kondisi saat ini
  const currentSymbols = machine.tapes[tapePositions];
  const transition = machine.transitions.find(t => {
    if (t.currentState === currentState) {
      // for (let i = 0; i < currentSymbols.length; i++) {
        if (t.currentSymbols !== currentSymbols) {
          return false;
        }
      // }
      return true;
    }
    return false;
  });
  
  if (!transition) {
    console.log("No transition found!");
    return;
  }
  
  // Update state and tape
  currentState = transition.newState;
    const tape = machine.tapes;
    const position = tapePositions;
    let elem = document.getElementById("tapecont");
    let box = document.getElementById("tapebox2");
    const curr = document.getElementById("currNode");
    let checkCurr = box.offsetWidth > getOffset(curr).left;
    elem.style.position = "absolute";
  
    if(getOffset(curr).left < 25){
      elem.style.left = ( elem.offsetLeft + 30 )+ 'px';
      console.log("move right");
    }
  
    if (transition.moves === "left") {
      console.log("curr x: " + getOffset(curr).left);
      console.log("box-width: " + box.offsetWidth);
      console.log("check curr" + checkCurr)
      console.log(elem.offsetLeft);
      if(elem.offsetLeft <= box.offsetWidth && checkCurr || getOffset(curr).left < 20){
      elem.style.left = ( elem.offsetLeft + 20 )+ 'px';
      console.log("move right");
      }
      if(elem.offsetLeft >= -(box.offsetWidth) && !checkCurr && getOffset(curr).left > 25){
        elem.style.left = ( elem.offsetLeft - 20 )+ 'px';
        console.log("move left");
      }
      console.log(elem.style.left);
      console.log(elem.offsetLeft);
      if (position > 0) {
        tapePositions -= 1;
      } else {
        tapePositions = 0;
        machine.tapes = "B" + tape;
      }
    } else if (transition.moves === "right") {
      console.log("curr x: " + getOffset(curr).left);
      console.log("check curr" + checkCurr)
      console.log(elem.offsetLeft);
      if(elem.offsetLeft >= -(box.offsetWidth) && checkCurr && getOffset(curr).left > 25){
        elem.style.left = ( elem.offsetLeft - 20 )+ 'px';
        console.log("move left");
      }
      console.log(elem.style.left);
      console.log(elem.offsetLeft);
      if (position < tape.length - 1) {
        tapePositions += 1;
      } else {
        tapePositions = tape.length;
        machine.tapes = tape + "B";
      }
    }
  
    machine.tapes = machine.tapes.substr(0, position) + transition.newSymbols + machine.tapes.substr(position + 1);
  
  updateTapes();
  
  // Check if we have reached a final state
  if (machine.finalState.includes(currentState)) {
    // const isAtBeginning = tapePositions.every(position => position === 0);
    // const isAtEnd = tapePositions.every((position, index) => position === machine.tapes.length - 1);
  
    if (machine.finalState.includes(currentState)) {
        clearInterval(autoRunInterval);
        alert('Halted!!');
  
        //Menghitung jumlah 0 nya
        zeroCount = machine.tapes.split("0").length - 1;
  
        const zeroCountElement = document.getElementById("hasil");
        zeroCountElement.innerText = zeroCount; 
  
        return;
    }
  }
  if (!transition) {
    console.log("No transition found!");
    return;
  }
  
  // Update state and tape
  currentState = transition.newState;
  }
  
  let autoRunInterval;
  
  function startAutoRun() {
  autoRunInterval = setInterval(runStep, 1000); // Menjalankan langkah setiap 1 detik (1000 milidetik)
  runStep();
  }
  
  function stopAutoRun() {
  clearInterval(autoRunInterval); // Menghentikan interval
  }
  
  // function rightMove(){
  //   let elem = document.getElementById(tape);
  //   let pos = 5;
  //   let id = 
  // }
  
  // function resetMachine() {
  //     currentState = machine.initialState;
  //     tapePositions = Array(machine.tapes.length).fill(0);
  //     updateTapes();
  // }
  
  window.addEventListener('load', function(){
  initializeTape();
  })