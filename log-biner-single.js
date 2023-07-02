// Definisikan konfigurasi mesin Turing Anda di sini
function initializeTape() {
    zeroCount = 0;
    const input = document.getElementById("input").value;
    const numOfBlanks = 10; // Jumlah simbol blank di awal dan di akhir
    const blanks = 'B'.repeat(numOfBlanks);
    const tapeInput = blanks + '0'.repeat(input) + blanks;
    machine.tapes = tapeInput;
    tapePositions = numOfBlanks; // Menggeser posisi pita sesuai dengan jumlah simbol blank di awal
    currentState = machine.initialState;
    updateTapes();
  }
  

const machine = {
    tapes: [""],
    initialState: "q0",
    finalState: ["q12"],
    transitions: [
        // STATE q0
        {
            currentState: "q0",
            currentSymbols: "0",
            newState: "q1",
            newSymbols: "X",
            moves: "right"
        },
        {
            currentState: "q0",
            currentSymbols: "Y",
            newState: "q4",
            newSymbols: "Y",
            moves: "left"
        },
        // STATE q1
        {
            currentState: "q1",
            currentSymbols: "0",
            newState: "q1",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q1",
            currentSymbols: "Y",
            newState: "q2",
            newSymbols: "Y",
            moves: "left"
        },
        {
            currentState: "q1",
            currentSymbols: "B",
            newState: "q2",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q2
        {
            currentState: "q2",
            currentSymbols: "0",
            newState: "q3",
            newSymbols: "Y",
            moves: "left"
        },
        {
            currentState: "q2",
            currentSymbols: "X",
            newState: "q4",
            newSymbols: "X",
            moves: "left"
        },
        // STATE q3
        {
            currentState: "q3",
            currentSymbols: "0",
            newState: "q3",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q3",
            currentSymbols: "X",
            newState: "q0",
            newSymbols: "X",
            moves: "right"
        },
        // STATE q4
        {
            currentState: "q4",
            currentSymbols: "1",
            newState: "q4",
            newSymbols: "1",
            moves: "left"
        },
        {
            currentState: "q4",
            currentSymbols: "X",
            newState: "q4",
            newSymbols: "X",
            moves: "left"
        },
        {
            currentState: "q4",
            currentSymbols: "B",
            newState: "q5",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q5
        {
            currentState: "q5",
            currentSymbols: "1",
            newState: "q5",
            newSymbols: "1",
            moves: "right"
        },
        {
            currentState: "q5",
            currentSymbols: "X",
            newState: "q6",
            newSymbols: "X",
            moves: "right"
        },
        // STATE q6
        {
            currentState: "q6",
            currentSymbols: "X",
            newState: "q7",
            newSymbols: "X",
            moves: "left"
        },
        {
            currentState: "q6",
            currentSymbols: "Y",
            newState: "q9",
            newSymbols: "Y",
            moves: "right"
        },
        // STATE q7
        {
            currentState: "q7",
            currentSymbols: "X",
            newState: "q7",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q7",
            currentSymbols: "Y",
            newState: "q8",
            newSymbols: "Y",
            moves: "left"
        },
        // STATE q8
        {
            currentState: "q8",
            currentSymbols: "0",
            newState: "q8",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q8",
            currentSymbols: "1",
            newState: "q0",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q9
        {
            currentState: "q9",
            currentSymbols: "Y",
            newState: "q9",
            newSymbols: "Y",
            moves: "right"
        },
        {
            currentState: "q9",
            currentSymbols: "B",
            newState: "q10",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q10
        {
            currentState: "q10",
            currentSymbols: "Y",
            newState: "q10",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q10",
            currentSymbols: "X",
            newState: "q11",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q11
        {
            currentState: "q11",
            currentSymbols: "1",
            newState: "q11",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q11",
            currentSymbols: "B",
            newState: "q12",
            newSymbols: "B",
            moves: "left"
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