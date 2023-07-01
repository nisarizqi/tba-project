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
    tapePositions[0] = numOfBlanks; // Menggeser posisi pita sesuai dengan jumlah simbol blank di awal
    currentState = machine.initialState;
    updateTapes();
  }
  

const machine = {
    tapes: [""],
      initialState: "q0",
      finalState: ["q9", "q14", "q24", "q21" ,"q28", "q30", "q33"],
      transitions: [
        // STATE q0
        {
          currentState: "q0",
          currentSymbols: ["+"],
          newState: "q1",
          newSymbols: ["+"],
          moves: ["right"]
        },
        {
          currentState: "q0",
          currentSymbols: ["-"],
          newState: "q3",
          newSymbols: ["-"],
          moves: ["right"]
        },
        // STATE q1
        {
          currentState: "q1",
          currentSymbols: ["0"],
          newState: "q1",
          newSymbols: ["0"],
          moves: ["right"]
        },
        {
          currentState: "q1",
          currentSymbols: ["1"],
          newState: "q1",
          newSymbols: ["1"],
          moves: ["right"]
        },
        {
          currentState: "q1",
          currentSymbols: ["+"],
          newState: "q2",
          newSymbols: ["+"],
          moves: ["left"]
        },
        {
          currentState: "q1",
          currentSymbols: ["-"],
          newState: "q5",
          newSymbols: ["+"],
          moves: ["left"]
        },
        // STATE 2
        {
          currentState: "q2",
          currentSymbols: ["0"],
          newState: "q2",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q2",
          currentSymbols: ["1"],
          newState: "q2",
          newSymbols: ["1"],
          moves: ["left"]
        },
        {
          currentState: "q2",
          currentSymbols: ["+"],
          newState: "q15",
          newSymbols: ["+"],
          moves: ["right"]
        },
        // STATE 3
        {
          currentState: "q3",
          currentSymbols: ["0"],
          newState: "q3",
          newSymbols: ["0"],
          moves: ["right"]
        },
        {
          currentState: "q3",
          currentSymbols: ["1"],
          newState: "q3",
          newSymbols: ["1"],
          moves: ["right"]
        },
        {
          currentState: "q3",
          currentSymbols: ["-"],
          newState: "q4",
          newSymbols: ["-"],
          moves: ["left"]
        },
        {
          currentState: "q3",
          currentSymbols: ["+"],
          newState: "q10",
          newSymbols: ["-"],
          moves: ["left"]
        },
        // STATE 4
        {
          currentState: "q4",
          currentSymbols: ["1"],
          newState: "q4",
          newSymbols: ["1"],
          moves: ["left"]
        },
        {
          currentState: "q4",
          currentSymbols: ["0"],
          newState: "q4",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q4",
          currentSymbols: ["-"],
          newState: "q15",
          newSymbols: ["-"],
          moves: ["right"]
        },

        // STATE 5
        {
          currentState: "q5",
          currentSymbols: ["1"],
          newState: "q34",
          newSymbols: ["1"],
          moves: ["left"]
        },

        //STATE 6
        {
          currentState: "q6",
          currentSymbols: ["0"],
          newState: "q7",
          newSymbols: ["B"],
          moves: ["right"]
        },
        {
          currentState: "q6",
          currentSymbols: ["1"],
          newState: "q9",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 7
        {
          currentState: "q7",
          currentSymbols: ["+"],
          newState: "q7",
          newSymbols: ["+"],
          moves: ["right"]
        },
        {
          currentState: "q7",
          currentSymbols: ["1"],
          newState: "q7",
          newSymbols: ["1"],
          moves: ["right"]
        },
        {
          currentState: "q7",
          currentSymbols: ["0"],
          newState: "q7",
          newSymbols: ["0"],
          moves: ["right"]
        },
        {
          currentState: "q7",
          currentSymbols: ["B"],
          newState: "q8",
          newSymbols: ["0"],
          moves: ["left"]
        },

        //STATE 8
        {
          currentState: "q8",
          currentSymbols: ["+"],
          newState: "q8",
          newSymbols: ["+"],
          moves: ["left"]
        },
        {
          currentState: "q8",
          currentSymbols: ["1"],
          newState: "q8",
          newSymbols: ["1"],
          moves: ["left"]
        },
        {
          currentState: "q8",
          currentSymbols: ["0"],
          newState: "q8",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q8",
          currentSymbols: ["B"],
          newState: "q6",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 10 (sama kayak STATE 5)
        {
          currentState: "q10",
          currentSymbols: ["1"],
          newState: "q10",
          newSymbols: ["1"],
          moves: ["left"]
        },
        {
          currentState: "q10",
          currentSymbols: ["0"],
          newState: "q10",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q10",
          currentSymbols: ["-"],
          newState: "q11",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 11 (sama kayak STATE 6)
        {
          currentState: "q11",
          currentSymbols: ["0"],
          newState: "q12",
          newSymbols: ["B"],
          moves: ["right"]
        },
        {
          currentState: "q11",
          currentSymbols: ["1"],
          newState: "q14",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 12 (sama kayak STATE 7)
        {
          currentState: "q12",
          currentSymbols: ["-"],
          newState: "q12",
          newSymbols: ["-"],
          moves: ["right"]
        },
        {
          currentState: "q12",
          currentSymbols: ["1"],
          newState: "q12",
          newSymbols: ["1"],
          moves: ["right"]
        },
        {
          currentState: "q12",
          currentSymbols: ["0"],
          newState: "q12",
          newSymbols: ["0"],
          moves: ["right"]
        },
        {
          currentState: "q12",
          currentSymbols: ["B"],
          newState: "q13",
          newSymbols: ["0"],
          moves: ["left"]
        },

        //STATE 13 (sama kayak STATE 8)
        {
          currentState: "q13",
          currentSymbols: ["-"],
          newState: "q13",
          newSymbols: ["-"],
          moves: ["left"]
        },
        {
          currentState: "q13",
          currentSymbols: ["1"],
          newState: "q13",
          newSymbols: ["1"],
          moves: ["left"]
        },
        {
          currentState: "q13",
          currentSymbols: ["0"],
          newState: "q13",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q13",
          currentSymbols: ["B"],
          newState: "q11",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 15
        {
          currentState: "q15",
          currentSymbols: ["0"],
          newState: "q16",
          newSymbols: ["B"],
          moves: ["right"]
        },
        {
          currentState: "q15",
          currentSymbols: ["1"],
          newState: "q25",
          newSymbols: ["1"],
          moves: ["right"]
        },

        //STATE 16
        {
          currentState: "q16",
          currentSymbols: ["0"],
          newState: "q16",
          newSymbols: ["0"],
          moves: ["right"]
        },
        {
          currentState: "q16",
          currentSymbols: ["1"],
          newState: "q16",
          newSymbols: ["1"],
          moves: ["right"]
        },
        {
          currentState: "q16",
          currentSymbols: ["+"],
          newState: "q16",
          newSymbols: ["+"],
          moves: ["right"]
        },
        {
          currentState: "q16",
          currentSymbols: ["-"],
          newState: "q16",
          newSymbols: ["-"],
          moves: ["right"]
        },
        {
          currentState: "q16",
          currentSymbols: ["B"],
          newState: "q17",
          newSymbols: ["B"],
          moves: ["left"]
        },

        //STATE 17
        {
          currentState: "q17",
          currentSymbols: ["0"],
          newState: "q18",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q17",
          currentSymbols: ["+"],
          newState: "q19",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q17",
          currentSymbols: ["-"],
          newState: "q22",
          newSymbols: ["B"],
          moves: ["left"]
        },

        //STATE 18
        {
          currentState: "q18",
          currentSymbols: ["0"],
          newState: "q18",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q18",
          currentSymbols: ["1"],
          newState: "q18",
          newSymbols: ["1"],
          moves: ["left"]
        },
        {
          currentState: "q18",
          currentSymbols: ["+"],
          newState: "q18",
          newSymbols: ["+"],
          moves: ["left"]
        },
        {
          currentState: "q18",
          currentSymbols: ["-"],
          newState: "q18",
          newSymbols: ["-"],
          moves: ["left"]
        },
        {
          currentState: "q18",
          currentSymbols: ["B"],
          newState: "q15",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 19
        {
          currentState: "q19",
          currentSymbols: ["0"],
          newState: "q19",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q19",
          currentSymbols: ["1"],
          newState: "q19",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q19",
          currentSymbols: ["B"],
          newState: "q20",
          newSymbols: ["+"],
          moves: ["left"]
        },

        //STATE 20
        {
          currentState: "q20",
          currentSymbols: ["B"],
          newState: "q20",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q20",
          currentSymbols: ["+"],
          newState: "q21",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 22 (sama kayak STATE 19)
        {
          currentState: "q22",
          currentSymbols: ["0"],
          newState: "q22",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q22",
          currentSymbols: ["1"],
          newState: "q22",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q22",
          currentSymbols: ["B"],
          newState: "q23",
          newSymbols: ["-"],
          moves: ["left"]
        },

        //STATE 23 (sama kayak STATE 20)
        {
          currentState: "q23",
          currentSymbols: ["B"],
          newState: "q23",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q23",
          currentSymbols: ["-"],
          newState: "q24",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 25
        {
          currentState: "q25",
          currentSymbols: ["0"],
          newState: "q26",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q25",
          currentSymbols: ["+"],
          newState: "q25",
          newSymbols: ["+"],
          moves: ["right"]
        },
        {
          currentState: "q25",
          currentSymbols: ["-"],
          newState: "q25",
          newSymbols: ["-"],
          moves: ["right"]
        },
        {
          currentState: "q25",
          currentSymbols: ["B"],
          newState: "q31",
          newSymbols: ["B"],
          moves: ["left"]
        },

        //STATE 26
        {
          currentState: "q26",
          currentSymbols: ["-"],
          newState: "q27",
          newSymbols: ["+"],
          moves: ["left"]
        },
        {
          currentState: "q26",
          currentSymbols: ["+"],
          newState: "q29",
          newSymbols: ["-"],
          moves: ["left"]
        },

        //STATE 27
        {
          currentState: "q27",
          currentSymbols: ["B"],
          newState: "q27",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q27",
          currentSymbols: ["1"],
          newState: "q27",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q27",
          currentSymbols: ["-"],
          newState: "q28",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 29 (sama kayak STATE 27)
        {
          currentState: "q29",
          currentSymbols: ["B"],
          newState: "q29",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q29",
          currentSymbols: ["1"],
          newState: "q29",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q29",
          currentSymbols: ["+"],
          newState: "q30",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 31
        {
          currentState: "q31",
          currentSymbols: ["+"],
          newState: "q32",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q31",
          currentSymbols: ["-"],
          newState: "q32",
          newSymbols: ["B"],
          moves: ["left"]
        },

        //STATE 32
        {
          currentState: "q32",
          currentSymbols: ["B"],
          newState: "q32",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q32",
          currentSymbols: ["1"],
          newState: "q32",
          newSymbols: ["B"],
          moves: ["left"]
        },
        {
          currentState: "q32",
          currentSymbols: ["-"],
          newState: "q33",
          newSymbols: ["B"],
          moves: ["right"]
        },
        {
          currentState: "q32",
          currentSymbols: ["+"],
          newState: "q33",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 34
        {
          currentState: "q34",
          currentSymbols: ["+"],
          newState: "q35",
          newSymbols: ["B"],
          moves: ["right"]
        },
        {
          currentState: "q34",
          currentSymbols: ["0"],
          newState: "q36",
          newSymbols: ["0"],
          moves: ["left"]
        },

        //STATE 35
        {
          currentState: "q35",
          currentSymbols: ["1"],
          newState: "q9",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 36
        {
          currentState: "q36",
          currentSymbols: ["0"],
          newState: "q36",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q36",
          currentSymbols: ["+"],
          newState: "q6",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 37
        {
          currentState: "q37",
          currentSymbols: ["-"],
          newState: "q8",
          newSymbols: ["B"],
          moves: ["right"]
        },
        {
          currentState: "q37",
          currentSymbols: ["0"],
          newState: "q39",
          newSymbols: ["0"],
          moves: ["left"]
        },
        
        //STATE 38
        {
          currentState: "q38",
          currentSymbols: ["1"],
          newState: "q14",
          newSymbols: ["B"],
          moves: ["right"]
        },

        //STATE 39
        {
          currentState: "q39",
          currentSymbols: ["0"],
          newState: "q39",
          newSymbols: ["0"],
          moves: ["left"]
        },
        {
          currentState: "q39",
          currentSymbols: ["-"],
          newState: "q11",
          newSymbols: ["B"],
          moves: ["right"]
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