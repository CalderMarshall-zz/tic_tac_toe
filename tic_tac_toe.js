$(function() {
     // inintial value for player, win boolean
     var player = 'O';
     var win = false;
// main function for click events
     $('.box').click(function() {
          // variable for current text of box
          var value = $(this).text();
          if (value === ''){
               // alternating text based on click events
               $(this).text(player);
               if (player === 'O') {
                    player = "X";
               } else {
                    player = 'O';
               }
          }
          // mappping over box texts and sending their texts to an array
          var wtf = $('.box').map(function() { return $(this).text();
          });
          console.log(wtf);


          // WIN TESTS
          var column1 = function() {
               if (wtf[0] === wtf[1] && wtf[0] === wtf[2] && wtf[1] !=='')  {
                    console.log("column one winner, " + wtf[1]);
                    win = true;
               }
          };
          column1();

          var column2 = function() {
               if (wtf[3] === wtf[4] && wtf[3] === wtf[5] && wtf[4] !==''){
                    console.log("column two winner, " + wtf[3]);
                    win = true;
               }
          };
          column2();

          var column3 = function() {
               if (wtf[6] === wtf[7] && wtf[6] === wtf[8] && wtf[7] !==''){
                    console.log("column three winner, " + wtf[6]);
                    win = true;
               }
          };
          column3();

          var row1 = function() {
               if (wtf[0] === wtf[3] && wtf[0] === wtf[6] && wtf[3] !==''){
                    console.log("row one winner, " + wtf[6]);
                    win = true;
               }
          };
          row1();
          var row2 = function() {
               if (wtf[1] === wtf[4] && wtf[1] === wtf[7] && wtf[4] !==''){
                    console.log("row two winner, " + wtf[6]);
                    win = true;
               }
          };
          row2();

          var row3 = function() {
               if (wtf[2] === wtf[5] && wtf[2] === wtf[8] && wtf[5] !==''){
                    console.log("row three winner, " + wtf[6]);
                    win = true;
               }
          };
          row3();

          // WIN TESTS DIAGONAL

          var digLRDWN = function() {
               if (wtf[0] === wtf[4] && wtf[0] === wtf[8] && wtf[4] !==''){
                    console.log("diagonal down winner, " + wtf[0]);
                    win = true;
               }
          };
          digLRDWN();

          var digRLUP = function() {
               if (wtf[6] === wtf[4] && wtf[6] === wtf[2] && wtf[4] !==''){
                    console.log("diagonal up winner , " + wtf[6]);
                    win = true;
               }
          };
          digRLUP();
          // timeout delaying alert until text in win box has changed
          if (win === true) {
               // setting variable so winner wil display X or O
               var text = $(this).text();
               setTimeout(function(){
                    alert(text+ " Wins!");
               },100);
          }
      });
});
// consolidate win tests in to one function!!!
// end game after win
// code for a draw
