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
    const tapeInput = blanks + input1Operasi + '0'.repeat(input1Number) + 1 + input2Operasi + '0'.repeat(input2Number) + blanks;
    machine.tapes[0] = tapeInput;
    machine.tapes[1] = "B".repeat(tapeInput.length);
    tapePositions[0] = numOfBlanks; // Menggeser posisi pita sesuai dengan jumlah simbol blank di awal
    tapePositions[1] = numOfBlanks;
    currentState = machine.initialState;
    updateTapes();
  }
  

const machine = {
    tapes: ["", ""],
      initialState: "q0",
      finalState: ["q4", "q8", "q12", "q13", "q14" ,"q18", "q19", "q20"],
      transitions: [
        // STATE 0
        {
          currentState: "q0",
          currentSymbols: ["+", "B"],
          newState: "q5",
          newSymbols: ["B", "B"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q0",
          currentSymbols: ["-", "B"],
          newState: "q1",
          newSymbols: ["B", "B"],
          moves: ["right", "stop"]
        },

        // STATE 1
        {
          currentState: "q1",
          currentSymbols: ["0", "B"],
          newState: "q1",
          newSymbols: ["B", "0"],
          moves: ["right", "right"]
        },
        {
          currentState: "q1",
          currentSymbols: ["1", "B"],
          newState: "q1",
          newSymbols: ["B", "B"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q1",
          currentSymbols: ["+", "B"],
          newState: "q2",
          newSymbols: ["-", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q1",
          currentSymbols: ["-", "B"],
          newState: "q9",
          newSymbols: ["+", "B"],
          moves: ["right", "left"]
        },

        // STATE 2
        {
          currentState: "q2",
          currentSymbols: ["0", "0"],
          newState: "q2",
          newSymbols: ["0", "0"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q2",
          currentSymbols: ["0", "B"],
          newState: "q2",
          newSymbols: ["0", "B"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q2",
          currentSymbols: ["B", "0"],
          newState: "q3",
          newSymbols: ["0", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q2",
          currentSymbols: ["B", "B"],
          newState: "q3",
          newSymbols: ["B", "B"],
          moves: ["right", "left"]
        },
        
        // STATE 3
        {
          currentState: "q3",
          currentSymbols: ["B", "0"],
          newState: "q3",
          newSymbols: ["0", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q3",
          currentSymbols: ["B", "B"],
          newState: "q4",
          newSymbols: ["B", "B"],
          moves: ["right", "right"]
        },

        // STATE 5 (sama kayak STATE 1)
        {
          currentState: "q5",
          currentSymbols: ["0", "B"],
          newState: "q5",
          newSymbols: ["B", "0"],
          moves: ["right", "right"]
        },
        {
          currentState: "q5",
          currentSymbols: ["1", "B"],
          newState: "q5",
          newSymbols: ["B", "B"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q5",
          currentSymbols: ["-", "B"],
          newState: "q6",
          newSymbols: ["+", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q5",
          currentSymbols: ["+", "B"],
          newState: "q15",
          newSymbols: ["-", "B"],
          moves: ["right", "left"]
        },

        //STATE 6 (sama kayak STATE 2)
        {
          currentState: "q6",
          currentSymbols: ["0", "0"],
          newState: "q6",
          newSymbols: ["0", "0"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q6",
          currentSymbols: ["0", "B"],
          newState: "q6",
          newSymbols: ["0", "B"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q6",
          currentSymbols: ["B", "0"],
          newState: "q7",
          newSymbols: ["0", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q6",
          currentSymbols: ["B", "B"],
          newState: "q7",
          newSymbols: ["B", "B"],
          moves: ["right", "left"]
        },

        //STATE 7 (sama kayak STATE 3)
        {
          currentState: "q7",
          currentSymbols: ["B", "0"],
          newState: "q7",
          newSymbols: ["0", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q7",
          currentSymbols: ["B", "B"],
          newState: "q8",
          newSymbols: ["B", "B"],
          moves: ["right", "right"]
        },

        //STATE 9
        {
          currentState: "q9",
          currentSymbols: ["0", "0"],
          newState: "q9",
          newSymbols: ["0", "0"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q9",
          currentSymbols: ["B", "0"],
          newState: "q10",
          newSymbols: ["B", "0"],
          moves: ["left", "stop"]
        },

        //STATE 10
        {
          currentState: "q10",
          currentSymbols: ["0", "0"],
          newState: "q10",
          newSymbols: ["B", "B"],
          moves: ["left", "left"]
        },
        {
          currentState: "q10",
          currentSymbols: ["+", "0"],
          newState: "q11",
          newSymbols: ["-", "0"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q10",
          currentSymbols: ["0", "B"],
          newState: "q13",
          newSymbols: ["0", "B"],
          moves: ["left", "stop"]
        },
        {
          currentState: "q10",
          currentSymbols: ["+", "B"],
          newState: "q14",
          newSymbols: ["B", "B"],
          moves: ["right", "right"]
        },

        //STATE 11
        {
          currentState: "q11",
          currentSymbols: ["B", "0"],
          newState: "q11",
          newSymbols: ["0", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q11",
          currentSymbols: ["B", "B"],
          newState: "q12",
          newSymbols: ["B", "B"],
          moves: ["right", "right"]
        },

        //STATE 15 (sama kayak STATE 9)
        {
          currentState: "q15",
          currentSymbols: ["0", "0"],
          newState: "q15",
          newSymbols: ["0", "0"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q15",
          currentSymbols: ["B", "0"],
          newState: "q16",
          newSymbols: ["B", "0"],
          moves: ["left", "stop"]
        },

        //STATE 16 (sama kayak STATE 10)
        {
          currentState: "q16",
          currentSymbols: ["0", "0"],
          newState: "q16",
          newSymbols: ["B", "B"],
          moves: ["left", "left"]
        },
        {
          currentState: "q16",
          currentSymbols: ["-", "0"],
          newState: "q17",
          newSymbols: ["+", "0"],
          moves: ["right", "stop"]
        },
        {
          currentState: "q16",
          currentSymbols: ["0", "B"],
          newState: "q19",
          newSymbols: ["0", "B"],
          moves: ["left", "stop"]
        },
        {
          currentState: "q16",
          currentSymbols: ["-", "B"],
          newState: "q20",
          newSymbols: ["B", "B"],
          moves: ["right", "right"]
        },

        //STATE 17 (sama kayak STATE 11)
        {
          currentState: "q17",
          currentSymbols: ["B", "0"],
          newState: "q17",
          newSymbols: ["0", "B"],
          moves: ["right", "left"]
        },
        {
          currentState: "q17",
          currentSymbols: ["B", "B"],
          newState: "q18",
          newSymbols: ["B", "B"],
          moves: ["right", "right"]
        }
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

  for (let i = 0; i < machine.tapes.length; i++) {
    const tapesContainer = document.getElementById("tapecont" + (i+1));
    tapesContainer.innerHTML = "";
    const tape = machine.tapes[i];
    const position = tapePositions[i];

    let tapeHTML = "";

    for(let i = 0; i <tape.length; i++){
      if( i == position){
        tapeHTML = tapeHTML + "<span id='currNode'>" + tape[i] + "</span>";
      }else{
        tapeHTML = tapeHTML + "<span class='node'>" + tape[i] + "</span>";
      }
    }

    const left = tape.slice(0, position);
    // const middle = tape[position];
    const middle = position < tape.length ? tape[position] : "B";
    const stop = position;
    const right = tape.slice(position + 1);

    const tapeDiv = document.createElement("div");
    tapeDiv.id = "tape";
    tapeDiv.innerHTML = tapeHTML;

    tapesContainer.appendChild(tapeDiv);
  }
}

let zeroCount = 0;

function runStep() {
  // Cari transisi yang sesuai dengan kondisi saat ini
  const currentSymbols = machine.tapes.map((tape, i) => tape[tapePositions[i]]);
  const transition = machine.transitions.find(t => {
    if (t.currentState === currentState && t.currentSymbols.length === currentSymbols.length) {
      for (let i = 0; i < currentSymbols.length; i++) {
        if (t.currentSymbols[i] !== currentSymbols[i]) {
          return false;
        }
      }
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
  for (let i = 0; i < machine.tapes.length; i++) {
    const tape = machine.tapes[i];
    const position = tapePositions[i];
    let elem = document.getElementById("tapecont"+(i+1));
    let box = document.getElementById("tapebox2");
    const curr = document.getElementById("currNode");
    let checkCurr = box.offsetWidth > getOffset(curr).left;
    elem.style.position = "absolute";

    if(getOffset(curr).left < 25){
      elem.style.left = ( elem.offsetLeft + 30 )+ 'px';
      console.log("move right");
    }

    if (transition.moves[i] === "left") {
      if(elem.offsetLeft <= box.offsetWidth && checkCurr || getOffset(curr).left < 20){
      elem.style.left = ( elem.offsetLeft + 20 )+ 'px';
      console.log("move right");
      }
      if(elem.offsetLeft >= -(box.offsetWidth) && !checkCurr && getOffset(curr).left > 25){
        elem.style.left = ( elem.offsetLeft - 20 )+ 'px';
        console.log("move left");
      }
      if (position > 0) {
        tapePositions[i] -= 1;
      } else {
        tapePositions[i] = 0;
        machine.tapes[i] = "B" + tape;
      }
    } else if (transition.moves[i] === "right") {
      if(elem.offsetLeft >= -(box.offsetWidth) && checkCurr && getOffset(curr).left > 25){
        elem.style.left = ( elem.offsetLeft - 20 )+ 'px';
        console.log("move left");
      }
      if (position < tape.length - 1) {
        tapePositions[i] += 1;
      } else {
        tapePositions[i] = tape.length;
        machine.tapes[i] = tape + "B";
      }
    }

    machine.tapes[i] = machine.tapes[i].substr(0, position) + transition.newSymbols[i] + machine.tapes[i].substr(position + 1);
  }

  updateTapes();

  // Check if we have reached a final state
  if (machine.finalState.includes(currentState)) {
    const isAtBeginning = tapePositions.every(position => position === 0);
    const isAtEnd = tapePositions.every((position, index) => position === machine.tapes[index].length - 1);

    if (machine.finalState.includes(currentState)) {
        clearInterval(autoRunInterval);
        alert('Halted!!');

        //Menghitung jumlah 0 nya
        zeroCount = machine.tapes[0].split("0").length - 1;
        plusCount = machine.tapes[0].split("+").length - 1;
        minusCount = machine.tapes[0].split("-").length - 1;

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

// function resetMachine() {
//     currentState = machine.initialState;
//     tapePositions = Array(machine.tapes.length).fill(0);
//     updateTapes();
// }