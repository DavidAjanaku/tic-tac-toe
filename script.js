window.onload = function(){
    doOnClick();
  } //end of doc.ready func
  
  
  //   VAIRABLES
  
  let reset = true;
  let choice = "1 player";
  let player1 = "X";
  let player2 = "O";
  let turn = player1;
  let player1Name = "You";
  let player2Name = "Computer";
  let player1Color;
  let player2Color;
  let player1Score = 0;
  let player2Score = 0;
  let lastScore; 
  let turnMessage;
  let winingMessage; 
  let playerBoard = ["1a", "2a", "3a", 
  "1b", "2b", "3b", 
  "1c", "2c", "3c"];
  let emptyFields = ["1a", "2a", "3a", 
  "1b", "2b", "3b", 
  "1c", "2c", "3c"];
  let fieldName;
  let winingCombinations = [["1a","1b","1c"], ["2a","2b","2c"], ["3a","3b","3c"], ["1a","2b","3c"], ["1c","2b","3a"]];
  
  const oneA = document.getElementById("1a");
  const oneB = document.getElementById("1b");
  const oneC = document.getElementById("1c");
  const twoA = document.getElementById("2a");
  const twoB = document.getElementById("2b");
  const twoC = document.getElementById("2c");
  const threeA = document.getElementById("3a");
  const threeB = document.getElementById("3b");
  const threeC = document.getElementById("3c");
  
  let resetGame = document.querySelector('#reset');
  console.log(resetGame);
  
  let onePlayer = document.querySelector('.choose-1');
  let chooseGame = document.querySelector('.choose-game')
  let gameLevel = document.querySelector('.choose-level');
  let twoPlayers = document.querySelector('.choose-2');
  let playerNames = document.querySelector('.players-names');
  let chooseX = document.querySelector('.choose-x');
  let chooseO = document.querySelector('.choose-o');
  let startGame = document.querySelector('.start-game');
  let startGames = document.querySelector('.start-games');

  let choose = document.querySelector('.choose');
  let td =    document.querySelector('td');
  const theTD = Array.from(document.querySelectorAll('td')).map(td => td);

  let showTurnInfo = document.querySelector(".turn-info");
  let showwininginfo = document.querySelector('.message')

  console.log(showTurnInfo);
  
  
  let box ;
    
  table.addEventListener('click', e => {
    box = e.target.closest('.box');
    if(!box) return;
    
    console.log(box.id)
    
    })
  
  
  console.log(theTD);
  
  console.log(td);
  let playerOneName = document.querySelector('#player1name').value;
//   console.log(playerOneName);
  let field = document.querySelector('.fields');
  let scores = document.querySelector('.scores');
  let message = document.querySelector('.message');
  
  let chooseSig = document.querySelector('.choose-sign')
  console.log(playerOneName);
  
  let playerTwoName = document.querySelector('#player2name').value;
  console.log(startGame);
  
  function doOnClick(){
    resetGame.addEventListener('click', function(){
        resettingGame();
    });
  
    onePlayer.addEventListener('click', function(){
        chooseGame.style.display = "none";
        gameLevel.style.display = "block";
        choice = "1 player"
    });
  
  
    twoPlayers.addEventListener('click', function(){
        chooseGame.style.display = "none";
        playerNames.style.display = " block"
        choice = "2 player"
    });
  
  
    startGame.addEventListener('click', function(){
        startingGame();

        playerNames.style.display = "none";
        gameLevel.style.display = "none";
    });

    // starting game with computer
  
    startGames.addEventListener('click', function(){
        startingGame();
        
        playerNames.style.display = "none";
        gameLevel.style.display = "none";
    });
  
    chooseX.addEventListener('click', function(){
        player1 = "X";
        console.log("picked X");
        choose.style.display = "none";
        chooseSign();
        playAgain();
  
     
    });
  
    chooseO.addEventListener('click', function(){
        player1 = "O";
        console.log("You picked 'O'!")
        choose.style.display = "none";
        chooseSign();
        playAgain();
        if(player2Name === "Computer"){
           setTimeout(computerTurn, 500); 
        }
    })
  
    
    table.addEventListener("click", function (e) {
        fieldName = box.id
        console.log(fieldName);
        if (this.classList.contains("td-clicked")) {
          this.preventDefault();
        }
        reset = false;
  
  
        if(player2Name !== "Computer"){
            if(turn === player1){
                if(playerTurn(player1)){
                 return;
                }
             }else{
                if(playerTurn(player2)){
                 return;
                }
            }
        }  else{
            if(turn === player1){
              if(playerTurn(player1) || emptyFields.length === 0){    
               return;
              }else{
               setTimeout(computerTurn, 700); 
              }
            }
        }
    });
  }//end of doOnClick func
  
  function startingGame(){
    if(choice ==="2 player"){
        player1Name = document.querySelector('#player1name').value;
        player2Name = document.querySelector('#player2name').value;
        if(!player1Name){
          player1Name = "Player 1";
        }
        if(!player2Name){
          player2Name = "Player 2";
        }     
       } //play with other player
     
       else{
         player1Name = "You";
         player2Name = "Computer";      
       } //play with computer 
       return chooseSign();
  }//end of startGame
  
  
  
   //Display and set signs and whose turn is first (always player with 'X' sign)
  
   function chooseSign(){
    chooseSig.style.display = "block";
    if(player1Name === "You"){
     let m =   document.querySelector(".choose-sign p").innerHTML =(player1Name + " " + "pick first");
    }else{
        document.querySelector(".choose-sign p").innerHTML =(player1Name + " " + "picks first")
    }
  
    if(player1 == "X"){
        player2 = "O";  
        turn = player1;
        console.log(turn);
  
     }else{
        player2 = "X";
        turn = player2;
        console.log(turn);
     }  
   }//end of chooseSign func
  
  
      //Display playerBoard, score and whose turn is at the begining of the game
  
  
      function playAgain(){
        field.style.display = "block";
        scores.style.display = "block";
        message.style.display = 'none';
        
  const theTD = Array.from(document.querySelectorAll('#table tr td')).map(td => td.innerHTML = " ");
  
        message.style.display = "none".innerHTML = " ";
        emptyFields = ["1a", "2a", "3a", 
        "1b", "2b", "3b", 
        "1c", "2c", "3c"];
  playerBoard = ["1a", "2a", "3a", 
         "1b", "2b", "3b", 
         "1c", "2c", "3c"];
  
         td.style.color = "#333333";
         document.querySelector("td").classList.remove("td-clicked");
         td.classList.remove("td-winning-color");
        //  td.classList.remove("animated pulse");
         scoreInfo();
  
  
               // player who won score in last game goes first in next game, or
      //If after game is drawn, player who won score in previous game goes first again, or
      //If after first game is drawn, player who went first at the begining goes first again 
      if(lastScore === player2 || 
        winingMessage === "It's Tie!" && lastScore === player2 ||
        !lastScore && winingMessage == "It's Tie!" && turn === player2){
       
        if(player2Name === "Computer"){
          updateTurn(player1);
          return setTimeout(computerTurn, 500);
        }else{
          return updateTurn(player1);
        }
    }else if(lastScore === player1 || 
        winingMessage === "It's Tie!" && lastScore === player1 || 
        !lastScore && winingMessage == "It's Tie!" && turn === player1){
   return updateTurn(player2);
  }else{
   return updateTurn(turn);
  }
      }//end of playAgain func
  
  
      function winInfo() {
        message.style.display = "block" 
        
        message.innerHTML ="<p>" + winingMessage + "</p>";
        if (winingMessage === "It's Tie!") {
        //   $audioTie.play();
        } else {
        //   $audioWin.play();
        }
        showTurnInfo.style.display = "none";
      } //end of winInfo func    


   //Define players (players 1 and players2!=computer) moves, check if there is wining combination and update whose turn is, return new playerboard
    function playerTurn(player){
        if(emptyFields.includes(fieldName)){
           emptyFields.splice(emptyFields.indexOf(fieldName),1); 
           playerBoard[playerBoard.indexOf(fieldName)] = player;

           
  
           
          console.log(fieldName);
           let clicked = ("#" + fieldName)
            console.log(clicked);
            console.log(box);
      box.classList.add("td-clicked");
      box.innerHTML = player;
      console.log(player);
  
  
   
          if(player === "X"){
          //  box.style.color = "red"
          }
   
          if(checkResult(player)){
             winInfo();
             setTimeout(playAgain, 1500);
             return true;
           }
           if(emptyFields.length === 0 && !checkResult(player)){
             winInfo();
             setTimeout(playAgain, 1500);
             return;
           }
          
          updateTurn(player);
        }  
  }
      //end of playerTurn func
  

       
         //Checking for wining combination and update winingMessage 
    function checkResult(player){
        console.log(player);
        console.log(document.getElementById('1a'));
        console.log(twoA.innerHTML);
        if((document.getElementById('1a').innerHTML === player) && (document.getElementById('2a').innerHTML === player) && (document.getElementById('3a').innerHTML
             === player)){
       let a1 =   document.getElementById("1a");

       a1.className += 'td-winning-color';
       a1.className += 'animated pulse'
 

       let a2 =   document.getElementById('2a');

       a2.className += 'td-winning-color';
       a2.className += 'animated pulse'
   
          
          
        let a3 =   document.getElementById('3a');

        a3.className += 'td-winning-color';
        a3.className += 'animated pulse';
        // a3.classList.add("td-winning-color").classList.add("animated pulse");
        return winnerUpdate(player);
        }
        else if((document.getElementById('1b').innerHTML === player) && (document.getElementById('2b').innerHTML  === player) && (document.getElementById('3b').innerHTML  === player)){
            let b1 =   document.getElementById("1a");

            b1.className += 'td-winning-color';
            b1.className += 'animated pulse'
      
     
            let b2 =   document.getElementById('2a');
     
            b2.className += 'td-winning-color';
            b2.className += 'animated pulse'
        
               
               
             let b3 =   document.getElementById('3a');
     
             b3.className += 'td-winning-color';
             b3.className += 'animated pulse';
           return winnerUpdate(player);
        }
        else if((document.getElementById('1c').innerHTML === player) && (document.getElementById('2c').innerHTML  === player) && (document.getElementById('3c').innerHTML  === player)){
         let c1 =   document.getElementById("1a");

            c1.className += 'td-winning-color';
            c1.className += 'animated pulse'
      
     
            let c2 =   document.getElementById('2a');
     
            c2.className += 'td-winning-color';
            c2.className += 'animated pulse'
        
               
               
             let c3 =   document.getElementById('3a');
     
             c3.className += 'td-winning-color';
             c3.className += 'animated pulse';
          return winnerUpdate(player);
        }
        else if((document.getElementById('1a').innerHTML === player) && (document.getElementById('2b').innerHTML  === player) && (document.getElementById('3c').innerHTML  === player)){
            let c1 =   document.getElementById("1a");

            c1.className += 'td-winning-color';
            c1.className += 'animated pulse'
      
     
            let c2 =   document.getElementById('2b');
     
            c2.className += 'td-winning-color';
            c2.className += 'animated pulse'
        
               
               
             let c3 =   document.getElementById('3c');
     
             c3.className += 'td-winning-color';
             c3.className += 'animated pulse';
       
          return winnerUpdate(player);
        }
        else if((document.getElementById('3a').innerHTML === player) && (document.getElementById('2b').innerHTML  === player) && (document.getElementById('1c').innerHTML  === player)){
            let c1 =   document.getElementById("3a");

            c1.className += 'td-winning-color';
            c1.className += 'animated pulse'
      
     
            let c2 =   document.getElementById('2b');
     
            c2.className += 'td-winning-color';
            c2.className += 'animated pulse'
        
               
               
             let c3 =   document.getElementById('1c');
     
             c3.className += 'td-winning-color';
             c3.className += 'animated pulse';
          return winnerUpdate(player);
        }
        else if((document.getElementById('1a').innerHTML === player) && (document.getElementById('1b').innerHTML  === player) && (document.getElementById('1c').innerHTML  === player)){
            let c1 =   document.getElementById("1a");

            c1.className += 'td-winning-color';
            c1.className += 'animated pulse'
      
     
            let c2 =   document.getElementById('1b');
     
            c2.className += 'td-winning-color';
            c2.className += 'animated pulse'
        
               
               
             let c3 =   document.getElementById('1c');
     
             c3.className += 'td-winning-color';
             c3.className += 'animated pulse';
          return winnerUpdate(player);
        }
        else if((document.getElementById('2a').innerHTML === player) && (document.getElementById('2b').innerHTML  === player) && (document.getElementById('2c').innerHTML  === player)){
            let c1 =   document.getElementById("2a");

            c1.className += 'td-winning-color';
            c1.className += 'animated pulse'
      
     
            let c2 =   document.getElementById('2b');
     
            c2.className += 'td-winning-color';
            c2.className += 'animated pulse'
        
               
               
             let c3 =   document.getElementById('2c');
     
             c3.className += 'td-winning-color';
             c3.className += 'animated pulse';
          return winnerUpdate(player);
        }
        else if((document.getElementById('3a').innerHTML === player) && (document.getElementById('3b').innerHTML  === player) && (document.getElementById('3c').innerHTML  === player)){
            let c1 =   document.getElementById("3a");

            c1.className += 'td-winning-color';
            c1.className += 'animated pulse'
      
     
            let c2 =   document.getElementById('3b');
     
            c2.className += 'td-winning-color';
            c2.className += 'animated pulse'
        
               
               
             let c3 =   document.getElementById('3c');
     
             c3.className += 'td-winning-color';
             c3.className += 'animated pulse';
          return winnerUpdate(player);
        }else{
           winingMessage = "It's Tie!";
           return false;
           }
          
       }//end of checkResult
  
         

         //Define wining message and update scores
  function winnerUpdate(player) {
    lastScore = player;
  
    if (player === player1) {
      winingMessage = player1Name + " " + "Won!";
      player1Score++;
    }
    if (player === player2) {
      winingMessage = player2Name + " " + "Won!";
      player2Score++;
    }
    scoreInfo();
  
    return winingMessage;
  } // end of winnerUpdate func
  
  
            //Update and display/show turn message  
    function updateTurn(player){
  
        //at the very begining of the game or after reset show who goes first func playAgain() call it
         if(reset){
         if(player === player2){
              turnMessage = player2Name + " goes first !";
           turnInfo();
           return;
           }
    
         if(player === player1){
            if(player1Name === "You"){
              turnMessage = player1Name + " go first !";
            }else{
              turnMessage = player1Name + " goes first !"
            }   
           }
           turnInfo();
           return;
         }
        
               
      //Set next player turn alternately and show whose turn is
       if(player === player1){
        turn = player2;
        turnMessage = "It's " + player2Name + "'s turn !";
     }
   
   if(player === player2){
        turn = player1;
      if(player1Name === "You"){
        turnMessage = "It's " + player1Name + "r turn !";
      }else{
        turnMessage = "It's " + player1Name + "'s turn !";
      }   
     }
   return turnInfo();
  } //end of updateTurn func
  
  
   //Show updated current scores
   function scoreInfo(){
    document.querySelector( ".scores p" ).innerHTML = (player1Score + " : " + player2Score);
    document.querySelector(".player2-score").innerHTML = (player2Name + "'s score: " + player2Score);
    document.querySelector(".player1-score").innerHTML = (player1Name + "'s score: " + player1Score);
   
   if(player1Name === "You"){
    document.querySelector(".player1-score").innerHTML = (player1Name + "r score: " + player1Score);
   }
  } //end of scoreInfo func
  
  
    //Show updated turn message
    function turnInfo(){
        showTurnInfo.style.display = "block";
        showTurnInfo.innerHTML = turnMessage;
      } //end of turnInfo func


      //  function for resetting the game

      function resettingGame() {
        reset = true;
        player1Score = 0;
        player2Score = 0;
        lastScore = "";
        emptyFields = ["1a", "2a", "3a", "1b", "2b", "3b", "1c", "2c", "3c"];
        playerBoard = ["1a", "2a", "3a", "1b", "2b", "3b", "1c", "2c", "3c"];
        winingMessage = "";
        turnMessage = "";
        player1Name = "You";
        player2Name = "Computer";
        document.querySelector("#player1name").value;
        document.querySelector("#player2name").value;
      
        // $(".btn-group :radio").prop("checked", false);
      
        document.querySelector("td").classList.remove("td-winning-color");
        document.querySelector("td").classList.remove("td-clicked");
        choose.style.display = 'block';
        chooseGame.style.display = 'block';
        document.querySelector('.fields').style.display = 'none';
        document.querySelector('.scores').style.display = 'none';
        showTurnInfo.style.display = 'none';
        message.style.display = 'none';
        document.querySelector('.choose-sign').style.display = 'none';
        document.querySelector('.choose-level').style.display = 'none';
        document.querySelector('.players-names').style.display = 'none';
       
      }



//AI Predict and define computer moves

//AI checking for wining combination
function aiCheckWinner(player, board) {
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    }
  } //end of aiCheckScor func



//Define computer moves, check if there is wining combination and update whose turn is, return new playerboard
function computerTurn() {
    reset = false;
    let input = document.querySelector('#easy');
    let inputHard = document.querySelector('#hard');


  
    if (input.getAttribute('id') === 'easy') {
      console.log('working ');
      fieldName = aiMove();
    }
    if (inputHard.getAttribute('id') === 'hard') {
      fieldName = aiPredictBestMove();
    }
  
    emptyFields.splice(emptyFields.indexOf(fieldName), 1);
    playerBoard[playerBoard.indexOf(fieldName)] = player2;

    console.log(fieldName);
  let element =   document.getElementById( fieldName);
    console.log(element);
    element.classList.add("td-clicked")
    // .html(player2);
    element.innerHTML = player2
      
    if (player2 === "X") {
      // element.style.color = "red"
    
    }
  
    if (
      checkResult(player2) ||
      (emptyFields.length === 0 && !checkResult(player2))
    ) {
      winInfo();
      setTimeout(playAgain, 1500);
      return;
    }
  
    updateTurn(player2);
  } // end of computerTurn
  

  //1. AI Predict and define computer;s moves - level Easy
function aiMove() {
    var fakeEmptyFields = emptyFields.slice();
    var fakeBoard = playerBoard.slice();
    var possibleMoveAI;
  
    //Check if AI can win the game
    function aiWin() {
      for (var i = 0; i < emptyFields.length; i++) {
        possibleMoveAI = emptyFields[i];
        fakeBoard = playerBoard.slice();
        fakeBoard[playerBoard.indexOf(possibleMoveAI)] = player2;
        if (aiCheckWinner(player2, fakeBoard)) {
          return possibleMoveAI;
        } else {
          possibleMoveAI = false;
        }
      } //end of for loop
    } //end of aiWin func
  
    //Check if AI can block the player
    function aiBlock() {
      for (var i = 0; i < emptyFields.length; i++) {
        var possibleMoveHuman = emptyFields[i];
        fakeBoard = playerBoard.slice();
        fakeBoard[playerBoard.indexOf(possibleMoveHuman)] = player1;
        if (aiCheckWinner(player1, fakeBoard)) {
          possibleMoveAI = possibleMoveHuman;
          return possibleMoveHuman;
        } else {
          possibleMoveAI = false;
        }
      } //end of for loop
    } //end of aiBlock func
  
    if (aiWin()) {
      return possibleMoveAI;
    } else if (aiBlock()) {
      return possibleMoveAI;
    } else {
      possibleMoveAI =
        emptyFields[Math.floor(Math.random() * emptyFields.length)];
      return possibleMoveAI;
    }
  } //end of aiMove func
  
  //2. AI Predict and define computer's moves - level Hard
  function aiPredictBestMove() {
    var fc = 0;
    //create board for manipulating and replace empty spaces with index numbers
    var fakeBoard = playerBoard.slice();
    for (var i = 0; i < fakeBoard.length; i++) {
      if (fakeBoard[i] !== "X" && fakeBoard[i] !== "O") {
        fakeBoard[i] = i;
      }
    }
    var aiPlayer = player2;
    var huPlayer = player1;
  
    //Define empty spaces/indexes in New board arr
    function getEmptyIndexies(board) {
      return board.filter((s) => s !== "X" && s !== "O");
    } //end of getEmptyIndexie func
  
    // The main minimax function
    function minimax(newBoard, player) {
      //add one to function calls
      fc++;
      //available spots
      var availSpots = getEmptyIndexies(newBoard);
  
      // checks for the terminal states such as win, lose, and tie
      //and returning a value accordingly
  
      if (aiCheckWinner(huPlayer, newBoard)) {
        return { score: -10 };
      } else if (aiCheckWinner(aiPlayer, newBoard)) {
        return { score: 10 };
      } else if (availSpots.length === 0) {
        return { score: 0 };
      }
  
      // an array to collect all the objects
      var moves = [];
  
      // loop through available spots
      for (var i = 0; i < availSpots.length; i++) {
        //create an object for each and store the index of that spot
        var move = {};
        move.index = newBoard[availSpots[i]];
  
        // set the empty spot to the current player
        newBoard[availSpots[i]] = player;
  
        /*collect the score resulted from calling minimax 
            on the opponent of the current player*/
        if (player == aiPlayer) {
          var result = minimax(newBoard, huPlayer);
          move.score = result.score;
        } else {
          var result = minimax(newBoard, aiPlayer);
          move.score = result.score;
        }
  
        // reset the spot to empty
        newBoard[availSpots[i]] = move.index;
  
        // push the object to the array
        moves.push(move);
      }
  
      // if it is the computer's turn loop over the moves and choose the move with the highest score
      var bestMove;
      if (player === aiPlayer) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
          if (moves[i].score > bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      } else {
        // else loop over the moves and choose the move with the lowest score
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
          if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }
  
      // return the chosen move (object) from the moves array
      return moves[bestMove];
    } //end of minimax func
  
    var bestSpot = minimax(fakeBoard, aiPlayer);
    return playerBoard[bestSpot.index];
  } //end of aiPredictBestMove func;
  