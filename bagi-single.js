// Definisikan konfigurasi mesin Turing Anda di sini
function initializeTape() {
    zeroCount = 0;
    plusCount = "";
    minusCount = "";
    const input1Number= document.getElementById("input1Number").value;
    const input1Operasi = document.getElementById("input1Operasi").value;
    const input2Number= document.getElementById("input2Number").value;
    const input2Operasi = document.getElementById("input2Operasi").value;
    if(!check(input1Number) || !check(input2Number)){
      exit;
    }
    const numOfBlanks = 3; // Jumlah simbol blank di awal dan di akhir
    const blanks = 'B'.repeat(numOfBlanks);
    const tapeInput = blanks + input2Operasi + '0'.repeat(input2Number) + 1 + input1Operasi + '0'.repeat(input1Number) + 1 + blanks;
    machine.tapes = tapeInput;
    tapePositions = numOfBlanks; // Menggeser posisi pita sesuai dengan jumlah simbol blank di awal
    currentState = machine.initialState;
    updateTapes();
  }
  

const machine = {
    tapes: [""],
    initialState: "q0",
    finalState: ["q18"],
    transitions: [
        //STATE q0
        {
          currentState: "q0",
          currentSymbols: "+",
          newState: "q1",
          newSymbols: "B",
          moves: "right"
        },
        {
          currentState: "q0",
          currentSymbols: "-",
          newState: "q2",
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
          newState: "q1",
          newSymbols: "1",
          moves: "right"
        },
        {
            currentState: "q1",
            currentSymbols: "+", 
            newState: "q3",
            newSymbols: "+",
            moves: "right"
        },
        {
          currentState: "q1",
          currentSymbols: "-", 
          newState: "q6",
          newSymbols: "-",
          moves: "right"
        },

        //STATE q2
        {
            currentState: "q2",
            currentSymbols: "0",
            newState: "q2",
            newSymbols: "0",
            moves: "right"
        },
        {
          currentState: "q2",
          currentSymbols: "1",
          newState: "q2",
          newSymbols: "1",
          moves: "right"
        },
        {
            currentState: "q2",
            currentSymbols: "+",
            newState: "q6",
            newSymbols: "+",
            moves: "right"
        },
        {
          currentState: "q2",
          currentSymbols: "-",
          newState: "q3",
          newSymbols: "-",
          moves: "right"
        },

        //STATE q3
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
          newState: "q3",
          newSymbols: "1",
          moves: "right"
        },
        {
            currentState: "q3",
            currentSymbols: "B",
            newState: "q5",
            newSymbols: "+",
            moves: "left"
        },

        //STATE q5
        {
            currentState: "q5",
            currentSymbols: "0",
            newState: "q5",
            newSymbols: "0",
            moves: "left"
        },
        {
          currentState: "q5",
          currentSymbols: "1",
          newState: "q5",
          newSymbols: "1",
          moves: "left"
        },
        {
          currentState: "q5",
          currentSymbols: "+",
          newState: "q5",
          newSymbols: "+",
          moves: "left"
        },
        {
          currentState: "q5",
          currentSymbols: "-",
          newState: "q5",
          newSymbols: "-",
          moves: "left"
        },
        {
          currentState: "q5",
          currentSymbols: "B",
          newState: "q8",
          newSymbols: "B",
          moves: "right"
        },
        
        // STATE q6
        {
          currentState: "q6",
          currentSymbols: "0",
          newState: "q6",
          newSymbols: "0",
          moves: "right"
        },
        {
          currentState: "q6",
          currentSymbols: "1",
          newState: "q6",
          newSymbols: "1",
          moves: "right"
        },
        {
            currentState: "q6",
            currentSymbols: "B",
            newState: "q5",
            newSymbols: "-",
            moves: "left"
        },

        //STATE q8
        {
            currentState: "q8",
            currentSymbols: "0",
            newState: "q9",
            newSymbols: "X",
            moves: "right"
        },
        {
          currentState: "q8",
          currentSymbols: "1",
          newState: "q19",
          newSymbols: "1",
          moves: "right"
        },

        //STATE q9
        {
          currentState: "q9",
          currentSymbols: "0",
          newState: "q9",
          newSymbols: "0",
          moves: "right"
        },
        {
          currentState: "q9",
          currentSymbols: "1",
          newState: "q10",
          newSymbols: "1",
          moves: "right"
        },

        //STATE q10
        {
          currentState: "q10",
          currentSymbols: "X",
          newState: "q10",
          newSymbols: "X",
          moves: "right"
        },
        {
          currentState: "q10",
          currentSymbols: "+",
          newState: "q10",
          newSymbols: "+",
          moves: "right"
        },
        {
          currentState: "q10",
          currentSymbols: "-",
          newState: "q10",
          newSymbols: "-",
          moves: "right"
        },
        {
          currentState: "q10",
          currentSymbols: "0",
          newState: "q11",
          newSymbols: "X",
          moves: "left"
        },
        {
          currentState: "q10",
          currentSymbols: "1",
          newState: "q17",
          newSymbols: "B",
          moves: "left"
        },

        //STATE q11
        {
          currentState: "q11",
          currentSymbols: "X",
          newState: "q11",
          newSymbols: "X",
          moves: "left"
        },
        {
          currentState: "q11",
          currentSymbols: "+",
          newState: "q11",
          newSymbols: "+",
          moves: "left"
        },
        {
          currentState: "q11",
          currentSymbols: "-",
          newState: "q11",
          newSymbols: "-",
          moves: "left"
        },
        {
          currentState: "q11",
          currentSymbols: "1",
          newState: "q12",
          newSymbols: "1",
          moves: "left"
        },

        //STATE q12
        {
          currentState: "q12",
          currentSymbols: "0",
          newState: "q12",
          newSymbols: "0",
          moves: "left"
        },
        {
          currentState: "q12",
          currentSymbols: "X",
          newState: "q8",
          newSymbols: "X",
          moves: "right"
        },

        //STATE q13
        {
          currentState: "q13",
          currentSymbols: "X",
          newState: "q13",
          newSymbols: "X",
          moves: "right"
        },
        {
          currentState: "q13",
          currentSymbols: "0",
          newState: "q13",
          newSymbols: "0",
          moves: "right"
        },
        {
          currentState: "q13",
          currentSymbols: "1",
          newState: "q13",
          newSymbols: "1",
          moves: "right"
        },
        {
          currentState: "q13",
          currentSymbols: "+",
          newState: "q13",
          newSymbols: "+",
          moves: "right"
        },
        {
          currentState: "q13",
          currentSymbols: "-",
          newState: "q13",
          newSymbols: "-",
          moves: "right"
        },
        {
          currentState: "q13",
          currentSymbols: "B",
          newState: "q14",
          newSymbols: "0",
          moves: "left"
        },

        //STATE q14
        {
          currentState: "q14",
          currentSymbols: "0",
          newState: "q14",
          newSymbols: "0",
          moves: "left"
        },
        {
          currentState: "q14",
          currentSymbols: "+",
          newState: "q14",
          newSymbols: "+",
          moves: "left"
        },
        {
          currentState: "q14",
          currentSymbols: "-",
          newState: "q14",
          newSymbols: "-",
          moves: "left"
        },
        {
          currentState: "q14",
          currentSymbols: "1",
          newState: "q15",
          newSymbols: "1",
          moves: "left"
        },

        //STATE q15
        {
          currentState: "q15",
          currentSymbols: "0",
          newState: "q15",
          newSymbols: "0",
          moves: "left"
        },
        {
          currentState: "q15",
          currentSymbols: "X",
          newState: "q15",
          newSymbols: "X",
          moves: "left"
        },
        {
          currentState: "q15",
          currentSymbols: "+",
          newState: "q15",
          newSymbols: "+",
          moves: "left"
        },
        {
          currentState: "q15",
          currentSymbols: "-",
          newState: "q15",
          newSymbols: "-",
          moves: "left"
        },
        {
          currentState: "q15",
          currentSymbols: "1",
          newState: "q16",
          newSymbols: "1",
          moves: "left"
        },

        //STATE q16
        {
          currentState: "q16",
          currentSymbols: "X",
          newState: "q16",
          newSymbols: "0",
          moves: "left"
        },
        {
          currentState: "q16",
          currentSymbols: "B",
          newState: "q8",
          newSymbols: "B",
          moves: "right"
        },

        //STATE q17
        {
          currentState: "q17",
          currentSymbols: "0",
          newState: "q17",
          newSymbols: "B",
          moves: "left"
        },
        {
          currentState: "q17",
          currentSymbols: "1",
          newState: "q17",
          newSymbols: "B",
          moves: "left"
        },
        {
          currentState: "q17",
          currentSymbols: "X",
          newState: "q17",
          newSymbols: "B",
          moves: "left"
        },
        {
          currentState: "q17",
          currentSymbols: "+",
          newState: "q17",
          newSymbols: "B",
          moves: "left"
        },
        {
          currentState: "q17",
          currentSymbols: "-",
          newState: "q17",
          newSymbols: "B",
          moves: "left"
        },
        {
          currentState: "q17",
          currentSymbols: "B",
          newState: "q18",
          newSymbols: "B",
          moves: "stop"
        },

        //STATE q19
        {
          currentState: "q19",
          currentSymbols: "+",
          newState: "q20",
          newSymbols: "+",
          moves: "right"
        },
        {
          currentState: "q19",
          currentSymbols: "-",
          newState: "q20",
          newSymbols: "-",
          moves: "right"
        },

        //STATE q20
        {
          currentState: "q20",
          currentSymbols: "X",
          newState: "q13",
          newSymbols: "X",
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
    alert("No transition found!");
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
        plusCount = machine.tapes.split("+").length - 1;
        minusCount = machine.tapes.split("-").length - 1;

        const zeroCountElement = document.getElementById("hasil");
        const signElement = document.getElementById("sign");
        const sign = plusCount == 1? '+': minusCount ==1? '-': '';
        
        zeroCountElement.innerText = zeroCount;
        signElement.innerText = sign;

        return;
    }
  }
  if (!transition) {
    alert("No transition found!");
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

function check(el){
  if(el < 0){
    alert("You must enter a positive number!");
    return false;
  }
  return true;
}