//The extra feature implemented is the animation feature

window.onload = function(){
	var puzzlepiece = document.getElementsByTagName("DIV");
	var grid = document.getElementById("puzzlearea");
	grid.style.display = "grid";
	grid.style.gridTemplateColumns = "auto auto auto auto";
	for(var i = 2; i < 17; i++){
		puzzlepiece[i].classList.add("puzzlepiece");
		puzzlepiece[i].style.position = "relative";
	}
	puzzlepiece[2].style.backgroundPosition = "400px -30px";
	puzzlepiece[3].style.backgroundPosition = "1400px 100px";
	puzzlepiece[4].style.backgroundPosition = "100px -30px";
	puzzlepiece[5].style.backgroundPosition = "800px 700px";
	puzzlepiece[6].style.backgroundPosition = "800px 700px";
	puzzlepiece[7].style.backgroundPosition = "1000px 500px";
	puzzlepiece[8].style.backgroundPosition = "900px 600px";
	puzzlepiece[9].style.backgroundPosition = "800px 700px";
	puzzlepiece[10].style.backgroundPosition = "700px 800px";
	puzzlepiece[11].style.backgroundPosition = "400px -30px";
	puzzlepiece[12].style.backgroundPosition = "1000px 500px"
	puzzlepiece[13].style.backgroundPosition = "400px -30px";
	puzzlepiece[14].style.backgroundPosition = "300px -30px";
	puzzlepiece[15].style.backgroundPosition = "800px 700px";
	puzzlepiece[16].style.backgroundPosition = "100px -30px";
	puzzlepiece[17].style.backgroundPosition = "1200px 300px";
	
	//sets coordinates for each tile
	puzzlepiece[2].setAttribute("coordinates","0,0");
	puzzlepiece[3].setAttribute("coordinates","0,1");
	puzzlepiece[4].setAttribute("coordinates","0,2");
	puzzlepiece[5].setAttribute("coordinates","0,3");
	puzzlepiece[6].setAttribute("coordinates","1,0");
	puzzlepiece[7].setAttribute("coordinates","1,1");
	puzzlepiece[8].setAttribute("coordinates","1,2");
	puzzlepiece[9].setAttribute("coordinates","1,3");
	puzzlepiece[10].setAttribute("coordinates","2,0");
	puzzlepiece[11].setAttribute("coordinates","2,1");
	puzzlepiece[12].setAttribute("coordinates","2,2");
	puzzlepiece[13].setAttribute("coordinates","2,3");
	puzzlepiece[14].setAttribute("coordinates","3,0");
	puzzlepiece[15].setAttribute("coordinates","3,1");
	puzzlepiece[16].setAttribute("coordinates","3,2");
	
	//create div to represent blank area
	blankdiv =  document.createElement('div');
  	blankdiv.setAttribute("id","blank");
  	blankdiv.setAttribute("coordinates","3,3");
  	grid.appendChild(blankdiv);

	var blankrow = 3;
	var blankcol = 3;

	function moveSquare(){
		
	    var divdis = "100px";

		for(var i = 2;i < 17; i ++){
			puzzlepiece[i].onclick = function(){
				var curpos = $(this).attr('coordinates');
				var row = parseInt(curpos.split(',')[0]);
	    		var col = parseInt(curpos.split(',')[1]);
				// Move Up
				if (row + 1 == blankrow && col == blankcol){
		  			$(this).animate({
		  			'top' : "+=" + divdis //tile moves up
					});

		  			$('#blank').animate({
					'top' : "-=" + divdis //empty space moves down
					});

		  			blankrow -= 1;
		  			$(this).attr('coordinates',(row + 1) + "," + col);//updates coordinates
			  		}

			  		// Move Down
				if (row - 1 == blankrow && col == blankcol){
					$(this).animate({
					'top' : "-=" + divdis //tile moves down
					});

					$('#blank').animate({
					'top' : "+=" + divdis //empty space moves up
					});

					blankrow += 1;
					$(this).attr('coordinates',(row - 1) + "," + col);//updates coordinates
				}

				// Move Left
				if (row == blankrow && col + 1 == blankcol){
					$(this).animate({
					'right' : "-=" + divdis //tile moves right
					});

					$('#blank').animate({
					'right' : "+=" + divdis //empty space moves left
					});

					blankcol -= 1;
					$(this).attr('coordinates',row + "," + (col + 1));//updates coordinates
				}

				// Move Right
				if (row == blankrow && col - 1 == blankcol){
					$(this).animate({
					'right' : "+=" + divdis //tile moves left
					});

					$('#blank').animate({
					'right' : "-=" + divdis //empty space moves right
					});

					blankcol += 1;
					$(this).attr('coordinates',row + "," + (col - 1));//updates coordinates
				}

				// Update empty position
				$('#blank').attr('coordinates',blankrow + "," + blankcol);
				}
			}
    }
  moveSquare();
  
		
}
	

