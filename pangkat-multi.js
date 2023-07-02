// Definisikan konfigurasi mesin Turing Anda di sini
function initializeTape() {
    zeroCount = 0;
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const numOfBlanks = 3; // Jumlah simbol blank di awal dan di akhir
    const blanks = 'B'.repeat(numOfBlanks);
    const tapeInput = blanks + '0'.repeat(input2) + 1 +'0'.repeat(input1) +1+blanks;
    machine.tapes[0] = tapeInput;
    machine.tapes[1] = "BBBBBBBBBBB";
    machine.tapes[2] = "BBBBBBBBBBB";
    tapePositions[0] = numOfBlanks; // Menggeser posisi pita sesuai dengan jumlah simbol blank di awal
    tapePositions[1] = numOfBlanks;
    tapePositions[2] = numOfBlanks;
    currentState = machine.initialState;
    updateTapes();
  }
  

const machine = {
  tapes: ["", "",""],
  initialState: "q0",
  finalState: [ "q12","q14","q17","q21"],
  transitions: [
      //STATE q0
      {
        currentState: "q0",
        currentSymbols: ["0", "B", "B"],
        newState: "q1",
        newSymbols: ["B", "B","B"],
        moves: ["right", "stop","stop"]
      },
      {
        currentState: "q0",
        currentSymbols: ["1", "B", "B"],
        newState: "q13",
        newSymbols: ["B", "B","0"],
        moves: ["right", "stop","right"]
      },
      

      //STATE q1
      {
          currentState: "q1",
          currentSymbols: ["0", "B","B"],
          newState: "q15",
          newSymbols: ["0", "B","B"],
          moves: ["right", "stop","stop"]
      },
      {
          currentState: "q1",
          currentSymbols: ["1", "B","B"],
          newState: "q16",
          newSymbols: ["1", "B","B"],
          moves: ["right", "stop","stop"]
      },
      
     
    //state 3 
    {
      currentState: "q3",
      currentSymbols: ["0", "0","B"],
      newState: "q18",
      newSymbols: ["0", "0","B"],
      moves: ["left", "left","stop"]
  },
  // {
  //     currentState: "q3",
  //     currentSymbols: ["1", "B","B"],
  //     newState: "q4",
  //     newSymbols: ["1", "B","B"],
  //     moves: ["left", "right","stop"]
  // },
  // {
  //     currentState: "q3",
  //     currentSymbols: ["B", "0","B"],
  //     newState: "q15",
  //     newSymbols: ["B", "0","0"],
  //     moves: ["stop", "left","right"]
  // },
  


      //STATE 2
      {
          currentState: "q2",
          currentSymbols: ["0", "B","B"],
          newState: "q2",
          newSymbols: ["0", "0","B"],
          moves: ["right", "right","stop"]
      },
      {
          currentState: "q2",
          currentSymbols: ["1", "B","B"],
          newState: "q3",
          newSymbols: ["1", "1","B"],
          moves: ["left", "left","stop"]
      },
     

      //STATE 4
      {
          currentState: "q4",
          currentSymbols: ["0", "0","B"],
          newState: "q4",
          newSymbols: ["0", "0","B"],
          moves: ["left", "stop","stop"]
      },
      {
          currentState: "q4",
          currentSymbols: ["B", "0","B"],
          newState: "q5",
          newSymbols: ["B", "0","B"],
          moves: ["right", "stop","stop"]
      },
      
      //STATE 5
      {
          currentState: "q5",
          currentSymbols: ["0", "0","B"],
          newState: "q6",
          newSymbols: ["X", "0","B"],
          moves: ["right", "stop","stop"]
      },
      {
          currentState: "q5",
          currentSymbols: ["1", "0","B"],
          newState: "q12",
          newSymbols: ["1", "0","1"],
          moves: ["stop", "right","right"]
      },
      
      // STATE q6
      {
          currentState: "q6",
          currentSymbols: ["0", "0","B"],
          newState: "q6",
          newSymbols: ["0", "0","B"],
          moves: ["right", "stop","stop"]
      },
      {
          currentState: "q6",
          currentSymbols: ["1", "0","B"],
          newState: "q7",
          newSymbols: ["1", "0","B"],
          moves: ["right", "stop","stop"]
      },
      
    //state 7
    {
      currentState: "q7",
      currentSymbols: ["0", "0","B"],
      newState: "q8",
      newSymbols: ["Y", "0","0"],
      moves: ["stop", "right","right"]
  },
  {
      currentState: "q7",
      currentSymbols: ["1", "0","B"],
      newState: "q10",
      newSymbols: ["1", "0","B"],
      moves: ["left", "stop","stop"]
  },
  

  //state 8 
  {
    currentState: "q8",
    currentSymbols: ["Y", "0","B"],
    newState: "q8",
    newSymbols: ["Y", "0","0"],
    moves: ["stop", "right","right"]
},
{
    currentState: "q8",
    currentSymbols: ["Y", "1","B"],
    newState: "q9",
    newSymbols: ["Y", "1","B"],
    moves: ["stop", "left","stop"]
},

//state 9
{
  currentState: "q9",
  currentSymbols: ["Y", "0","B"],
  newState: "q9",
  newSymbols: ["Y", "0","B"],
  moves: ["stop", "left","stop"]
},
{
  currentState: "q9",
  currentSymbols: ["Y", "B","B"],
  newState: "q7",
  newSymbols: ["Y", "B","B"],
  moves: ["right", "right","stop"]
},

//state10
{
currentState: "q10",
currentSymbols: ["Y", "0","B"],
newState: "q10",
newSymbols: ["0", "0","B"],
moves: ["left", "stop","stop"]
},
{
  currentState: "q10",
  currentSymbols: ["1", "0","B"],
  newState: "q11",
  newSymbols: ["1", "0","B"],
  moves: ["left", "stop","stop"]
},

//state 11 
{
currentState: "q11",
currentSymbols: ["0", "0","B"],
newState: "q11",
newSymbols: ["0", "0","B"],
moves: ["left", "stop","stop"]
},
{
currentState: "q11",
currentSymbols: ["X", "0","B"],
newState: "q5",
newSymbols: ["X", "0","B"],
moves: ["right", "stop","stop"]
},


//state 13
{
currentState: "q13",
currentSymbols: ["0", "B","B"],
newState: "q13",
newSymbols: ["B", "B","B"],
moves: ["right", "stop","stop"]
},
{
  currentState: "q13",
  currentSymbols: ["1", "B","B"],
  newState: "q14", //final
  newSymbols: ["B", "B","1"],
  moves: ["right", "stop","right"]
},

//state 15
{
  currentState: "q15",
  currentSymbols: ["0", "B","B"],
  newState: "q15",
  newSymbols: ["0", "B","B"],
  moves: ["right", "stop","stop"]
},
{
    currentState: "q15",
    currentSymbols: ["1", "B","B"],
    newState: "q2",
    newSymbols: ["1", "B","B"],
    moves: ["right", "stop","stop"]
  },

//state 16
{
  currentState: "q16",
  currentSymbols: ["0", "B","B"],
  newState: "q16",
  newSymbols: ["Y", "B","0"],
  moves: ["right", "stop","right"]
},
{
    currentState: "q16",
    currentSymbols: ["1", "B","B"],
    newState: "q17",
    newSymbols: ["Y", "B","1"],
    moves: ["right", "stop","stop"]
  },

  //state 18
  
  {
    currentState: "q18",
    currentSymbols: ["0", "0","B"],
    newState: "q19",
    newSymbols: ["0", "0","B"],
    moves: ["left", "left","stop"]
  },
  {
    currentState: "q18",
    currentSymbols: ["1", "B","B"],
    newState: "q20",
    newSymbols: ["1", "B","B"],
    moves: ["stop", "right","stop"]
  },

  //state 19 
  {
    currentState: "q19",
    currentSymbols: ["0", "0","B"],
    newState: "q19",
    newSymbols: ["0", "0","B"],
    moves: ["left", "left","stop"]
  },
  {
    currentState: "q19",
    currentSymbols: ["1", "B","B"],
    newState: "q4",
    newSymbols: ["1", "B","B"],
    moves: ["left", "right","stop"]
  },

  //state 20
  {
    currentState: "q20",
    currentSymbols: ["1", "0","B"],
    newState: "q20",
    newSymbols: ["1", "0","0"],
    moves: ["stop", "right","right"]
  },
  {
    currentState: "q20",
    currentSymbols: ["1", "1","B"],
    newState: "q21",
    newSymbols: ["1", "1","1"],
    moves: ["stop", "right","right"]
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
    console.log("No transition found!");
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
        zeroCount = machine.tapes[2].split("0").length - 1;

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

window.addEventListener('load', function(){
  initializeTape();
})

// function resetMachine() {
//     currentState = machine.initialState;
//     tapePositions = Array(machine.tapes.length).fill(0);
//     updateTapes();
// }