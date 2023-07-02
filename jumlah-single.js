// Definisikan konfigurasi mesin Turing Anda di sini
function initializeTape() {
    zeroCount = 0;
    plusCount = "";
    minusCount = "";
    const input1Number= document.getElementById("input1Number").value;
    const input1Operasi = document.getElementById("input1Operasi").value;
    const input2Number= document.getElementById("input2Number").value;
    const input2Operasi = document.getElementById("input2Operasi").value;
    const numOfBlanks = 4; // Jumlah simbol blank di awal dan di akhir
    const blanks = 'B'.repeat(numOfBlanks);
    const tapeInput = blanks + input1Operasi + '0'.repeat(input1Number) + 1 + input2Operasi + '0'.repeat(input2Number) + blanks;
    machine.tapes = tapeInput;
    tapePositions = numOfBlanks; // Menggeser posisi pita sesuai dengan jumlah simbol blank di awal
    currentState = machine.initialState;
    updateTapes();
    }

const machine = {
    tapes: [""],
    initialState: "q0",
    finalState: ["q14", "q23", "q46"],
      transitions: [
        // STATE q0
        {
            currentState: "q0",
            currentSymbols: "+",
            newState: "q1",
            newSymbols: "+",
            moves: "right"
        },
        {
            currentState: "q0",
            currentSymbols: "-",
            newState: "q2",
            newSymbols: "-",
            moves: "right"
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
            currentSymbols: "B",
            newState: "q1",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q1",
            currentSymbols: "1",
            newState: "q3",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q2
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
            newState: "q29",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q3
        {
            currentState: "q3",
            currentSymbols: "+",
            newState: "q4",
            newSymbols: "+",
            moves: "left"
        },
        {
            currentState: "q3",
            currentSymbols: "-",
            newState: "q56",
            newSymbols: "-",
            moves: "left"
        },
        // STATE q4
        {
            currentState: "q4",
            currentSymbols: "1",
            newState: "q5",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q5
        {
            currentState: "q5",
            currentSymbols: "0",
            newState: "q5",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q5",
            currentSymbols: "B",
            newState: "q5",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q5",
            currentSymbols: "+",
            newState: "q6",
            newSymbols: "+",
            moves: "right"
        },
        // STATE q6
        {
            currentState: "q6",
            currentSymbols: "B",
            newState: "q6",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q6",
            currentSymbols: "0",
            newState: "q7",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q6",
            currentSymbols: "1",
            newState: "q13",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q7
        {
            currentState: "q7",
            currentSymbols: "0",
            newState: "q7",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q7",
            currentSymbols: "1",
            newState: "q8",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q8
        {
            currentState: "q8",
            currentSymbols: "+",
            newState: "q9",
            newSymbols: "+",
            moves: "right"
        },
        // STATE q9
        {
            currentState: "q9",
            currentSymbols: "0",
            newState: "q9",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q9",
            currentSymbols: "B",
            newState: "q10",
            newSymbols: "0",
            moves: "left"
        },
        // STATE q10
        {
            currentState: "q10",
            currentSymbols: "0",
            newState: "q10",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q10",
            currentSymbols: "+",
            newState: "q11",
            newSymbols: "+",
            moves: "left"
        },
        // STATE q11
        {
            currentState: "q11",
            currentSymbols: "1",
            newState: "q12",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q12
        {
            currentState: "q12",
            currentSymbols: "0",
            newState: "q12",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q12",
            currentSymbols: "B",
            newState: "q12",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q12",
            currentSymbols: "+",
            newState: "q6",
            newSymbols: "+",
            moves: "right"
        },
        // STATE q13
        {
            currentState: "q13",
            currentSymbols: "B",
            newState: "q13",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q13",
            currentSymbols: "+",
            newState: "q14",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q15
        {
            currentState: "q15",
            currentSymbols: "0",
            newState: "q15",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q15",
            currentSymbols: "B",
            newState: "q16",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q16
        {
            currentState: "q16",
            currentSymbols: "0",
            newState: "q17",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q16",
            currentSymbols: "-",
            newState: "q28",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q17
        {
            currentState: "q17",
            currentSymbols: "0",
            newState: "q17",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q17",
            currentSymbols: "-",
            newState: "q18",
            newSymbols: "-",
            moves: "left"
        },
        // STATE q18
        {
            currentState: "q18",
            currentSymbols: "1",
            newState: "q19",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q19
        {
            currentState: "q19",
            currentSymbols: "0",
            newState: "q20",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q19",
            currentSymbols: "B",
            newState: "q24",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q20
        {
            currentState: "q20",
            currentSymbols: "0",
            newState: "q21",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q20",
            currentSymbols: "+",
            newState: "q22",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q21
        {
            currentState: "q21",
            currentSymbols: "B",
            newState: "q21",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q21",
            currentSymbols: "1",
            newState: "q60",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q22
        {
            currentState: "q22",
            currentSymbols: "B",
            newState: "q22",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q22",
            currentSymbols: "1",
            newState: "q23",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q24
        {
            currentState: "q24",
            currentSymbols: "1",
            newState: "q25",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q25
        {
            currentState: "q25",
            currentSymbols: "B",
            newState: "q25",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q25",
            currentSymbols: "+",
            newState: "q26",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q26
        {
            currentState: "q26",
            currentSymbols: "B",
            newState: "q26",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q26",
            currentSymbols: "-",
            newState: "q27",
            newSymbols: "-",
            moves: "right"
        },
        // STATE q27
        {
            currentState: "q27",
            currentSymbols: "0",
            newState: "q27",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q27",
            currentSymbols: "B",
            newState: "q23",
            newSymbols: "0",
            moves: "right"
        },
        // STATE q28
        {
            currentState: "q28",
            currentSymbols: "1",
            newState: "q23",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q29
        {
            currentState: "q29",
            currentSymbols: "+",
            newState: "q30",
            newSymbols: "+",
            moves: "right"
        },
        {
            currentState: "q29",
            currentSymbols: "-",
            newState: "q47",
            newSymbols: "-",
            moves: "left"
        },
        // STATE q30
        {
            currentState: "q30",
            currentSymbols: "0",
            newState: "q31",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q30",
            currentSymbols: "B",
            newState: "q44",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q31
        {
            currentState: "q31",
            currentSymbols: "+",
            newState: "q32",
            newSymbols: "+",
            moves: "left"
        },
        // STATE q32
        {
            currentState: "q32",
            currentSymbols: "1",
            newState: "q33",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q33
        {
            currentState: "q33",
            currentSymbols: "0",
            newState: "q34",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q34
        {
            currentState: "q34",
            currentSymbols: "B",
            newState: "q34",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q34",
            currentSymbols: "1",
            newState: "q35",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q35
        {
            currentState: "q35",
            currentSymbols: "+",
            newState: "q36",
            newSymbols: "+",
            moves: "right"
        },
        // STATE q36
        {
            currentState: "q36",
            currentSymbols: "0",
            newState: "q36",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q36",
            currentSymbols: "B",
            newState: "q37",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q37
        {
            currentState: "q37",
            currentSymbols: "0",
            newState: "q38",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q38
        {
            currentState: "q38",
            currentSymbols: "0",
            newState: "q39",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q38",
            currentSymbols: "+",
            newState: "q43",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q39
        {
            currentState: "q39",
            currentSymbols: "0",
            newState: "q39",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q39",
            currentSymbols: "+",
            newState: "q40",
            newSymbols: "+",
            moves: "left"
        },
        // STATE q40
        {
            currentState: "q40",
            currentSymbols: "1",
            newState: "q41",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q41
        {
            currentState: "q41",
            currentSymbols: "B",
            newState: "q41",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q41",
            currentSymbols: "-",
            newState: "q42",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q41",
            currentSymbols: "0",
            newState: "q34",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q42
        {
            currentState: "q42",
            currentSymbols: "B",
            newState: "q42",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q42",
            currentSymbols: "1",
            newState: "q46",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q43
        {
            currentState: "q43",
            currentSymbols: "1",
            newState: "q46",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q44
        {
            currentState: "q44",
            currentSymbols: "+",
            newState: "q45",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q45
        {
            currentState: "q45",
            currentSymbols: "1",
            newState: "q46",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q47
        {
            currentState: "q47",
            currentSymbols: "1",
            newState: "q48",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q48
        {
            currentState: "q48",
            currentSymbols: "0",
            newState: "q49",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q49
        {
            currentState: "q49",
            currentSymbols: "1",
            newState: "q50",
            newSymbols: "1",
            moves: "right"
        },
        {
            currentState: "q49",
            currentSymbols: "B",
            newState: "q54",
            newSymbols: "B",
            moves: "left"
        },
        // STATE q50
        {
            currentState: "q50",
            currentSymbols: "-",
            newState: "q51",
            newSymbols: "-",
            moves: "right"
        },
        // STATE q51
        {
            currentState: "q51",
            currentSymbols: "0",
            newState: "q51",
            newSymbols: "0",
            moves: "right"
        },
        {
            currentState: "q51",
            currentSymbols: "B",
            newState: "q52",
            newSymbols: "0",
            moves: "left"
        },
        // STATE q52
        {
            currentState: "q52",
            currentSymbols: "0",
            newState: "q52",
            newSymbols: "0",
            moves: "left"
        },
        {
            currentState: "q52",
            currentSymbols: "-",
            newState: "q53",
            newSymbols: "-",
            moves: "left"
        },
        // STATE q53
        {
            currentState: "q53",
            currentSymbols: "1",
            newState: "q54",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q54
        {
            currentState: "q54",
            currentSymbols: "B",
            newState: "q54",
            newSymbols: "B",
            moves: "left"
        },
        {
            currentState: "q54",
            currentSymbols: "-",
            newState: "q55",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q55
        {
            currentState: "q55",
            currentSymbols: "B",
            newState: "q55",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q55",
            currentSymbols: "1",
            newState: "q46",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q56
        {
            currentState: "q56",
            currentSymbols: "1",
            newState: "q57",
            newSymbols: "1",
            moves: "left"
        },
        // STATE q57
        {
            currentState: "q57",
            currentSymbols: "+",
            newState: "q58",
            newSymbols: "B",
            moves: "right"
        },
        {
            currentState: "q57",
            currentSymbols: "0",
            newState: "q59",
            newSymbols: "0",
            moves: "right"
        },
        // STATE q58
        {
            currentState: "q58",
            currentSymbols: "1",
            newState: "q23",
            newSymbols: "B",
            moves: "right"
        },
        // STATE q59
        {
            currentState: "q59",
            currentSymbols: "1",
            newState: "q60",
            newSymbols: "1",
            moves: "right"
        },
        // STATE q60
        {
            currentState: "q60",
            currentSymbols: "-",
            newState: "q15",
            newSymbols: "-",
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