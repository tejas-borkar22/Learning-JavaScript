
function attachEventListeners(){                   // closure function
  let count = 0;
  document.querySelector('#clickBtn').addEventListener("click", 
  function(){                                     // Call back Function
    console.log(`Button was clicked ${++count}`)
})
}

attachEventListeners();


