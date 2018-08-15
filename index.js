//------------------------------
// Generator Function Basic
//------------------------------
function* counter() {
  // define start value
  let index = 0;
  while(index < index+1)
    // yield = saved index + 1
    yield index++;
}
// define generator
let gen = counter();

let count = () => {
  let counter = document.querySelector('.counter');
  // call generator function and add value to span
  counter.innerHTML = gen.next().value;
};

// define global counter var
let normalCounter = 1;

// add 1 to counter and add it to span
let normalCount = () => {
  let counter = document.querySelector('.normal-counter');
  counter.innerHTML = normalCounter++;
};

//------------------------------
// Args in a Generator Function
//------------------------------

function* todoGen() {
  let myarray = ['1'];
  while(true) {
    // add value from yield to array
    myarray.push(yield);
    console.log(myarray);
  }
}

let generator = todoGen();

let todo = () => {
  let input = document.querySelector('.input-todo').value;
  // send input to generator function
  counter.innerHTML = generator.next(input);
};


//------------------------------
// Return in Generator Function
//------------------------------

function* yieldAndReturn() {
  while(true) {
    yield "Y";
    return "R";
    // after return you can not get a value but a status
    yield "R";
  }
}

let returnGen = yieldAndReturn();

let myFunc = () => {
  let counter = 0;
  let isDone = false;
  while (counter <= 8) {
    isDone = status = returnGen.next().done;
    counter++;
    console.log(counter, isDone);
  }
};

//------------------------------
// Fibonacci
//------------------------------


function *fibonacci(n = null, current = 0, next = 1) {
  if (n === 0) {
    return 0;
  }

  yield current;
  yield* fibonacci(n - 1, next, current + next);
}

let [...numbers] = fibonacci(20);
console.log(numbers);


