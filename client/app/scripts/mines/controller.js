'use strict';

angular.module('Minesweeper')
.controller('minesweeper', function ($scope) {
  $scope.controller_loaded = 'loaded';
  $scope.mines = [1,8];
  $scope.positions = [[1,2,3],[4,5,6],[7,8,9]];
  $scope.verifyMine=function(positions, mines , position){
  	console.log('position:'+position);
	  			
  	var lRow = 3;
  	var rows = [];
  	var cols = [];
  	var numMines = 0;
  	var i=0;
  	var j=0;
  	var k=0;
  	var tempFila=[];
  	var tempCols= [];
  	var tempPosition =0;
  	var max = 0;
  	for(i=0;i<positions.length;i++){
  		rows.push(positions[i]);
  	}
  	for( i=0;i<lRow;i++){
  		cols[i]=[];
  		var tmpArray =[];
  		for( j=0;j<lRow;j++){
  			tmpArray.push(positions[j][i]);
  		}
  		cols[i]=tmpArray;
  	}
  	//recorrer filas
  	for( i = 0 ; i<rows.length ; i++){
  		tempFila= [];
		tempPosition=-1;
		for( j=0; j<rows[i].length; j++){
  			for( k=0; k<mines.length; k++){
  				if(mines[k] === rows[i][j]){
   					tempFila = rows[i];
  				}
  			}
  			if(rows[i][j]===position){
  				tempPosition=j;
  			}
  		}
  		max = tempFila.length;
  		if(tempPosition>=0){
	  		for(k = 0; k<mines.length;k++){

	  			if(tempFila[tempPosition-1]===mines[k]){
	  				numMines++;
	  				break;
	  			}
	  			if(tempFila[tempPosition+1]===mines[k]){
	  				numMines++;
	  				break;
	  			}
	  		}
  		}
	  	
  	}
  	console.log('mines :'+numMines);
  	for( i = 0 ; i<cols.length ; i++){
  		tempCols= [];
		tempPosition=-1;
		for( j=0; j<cols[i].length; j++){
  			for( k=0; k<mines.length; k++){
  				if(mines[k] === cols[i][j]){
   					tempCols = cols[i];
  				}
  				if(cols[i][j]===position){
  					tempPosition=j;
  				}
  			}
  		}
  		console.log('tempCols :'+tempCols);
  		console.log('tempPosition :'+tempPosition);
  		
  		max = tempCols.length;
  		if(tempPosition>=0){
	  		for(k = 0; k<mines.length;k++){
	  			if(tempCols[tempPosition-1]===mines[k]){
	  				numMines++;
	  				break;
	  			}
	  			if(tempCols[tempPosition+1]===mines[k]){
	  				numMines++;
	  				break;
	  			}
	  		}
  		}
	  	
  	}

  	for( k=0; k<mines.length; k++){
  		if(mines[k]===position){
  			numMines=-1;
  		}
  	}
  	return numMines;
  };
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/minesweeper', {
    templateUrl: 'scripts/mines/views/minesweeper.html',
    controller: 'minesweeper'
  });
});
