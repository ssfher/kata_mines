'use strict';

angular.module('Minesweeper')
.controller('minesweeper', function ($scope) {
  $scope.controller_loaded = 'loaded';
  $scope.mines = [1,8];
  $scope.positions = [[1,2,3],[4,5,6],[7,8,9]];
  $scope.verify = ['?','?','?','?','?','?','?','?','?'];
  $scope.explode='';
  $scope.verifyMine=function(position){
  	var positions = $scope.positions;
  	var mines = $scope.mines;
  	var lRow = positions.length;
  	var rows = [];
  	var cols = [];
  	var numMines = 0;
  	var rowsPosition=-1;
  	var colsPosition=-1;
  	//crea filas
  	for(var m=0;m<positions.length;m++){
  		rows.push(positions[m]);
  	}
  	//crea Columnas
  	for(var i=0;i<lRow;i++){
  		cols[i]=[];
  		var tmpArray =[];
  		for( var j=0;j<lRow;j++){
  			tmpArray.push(positions[j][i]);
  		}
  		cols[i]=tmpArray;
  	}
  	//verificar posición en filas
  	for(var k=0;k<rows.length;k++){
  		for(var l=0;l<rows[k].length;l++){
  			if(rows[k][l]===position){
  				rowsPosition=k;
  				colsPosition=l;
  			}
  		}
  	}
  	var rBack = rowsPosition-1;
    var rNext = rowsPosition+1;
    var cBack = colsPosition-1;
    var cNext = colsPosition+1;
    var aroundValues = [];
    for(var o=rBack;o<=rNext;o++){
    	for(var n=cBack;n<=cNext;n++){
    		if(o>=0&&n>=0&&o<lRow&&n<lRow){
	 			aroundValues.push(positions[o][n]);
	 		}
    	}
    }
    for(var p=0;p<aroundValues.length;p++){
    	for(var q=0;q<mines.length;q++){
    		if(mines[q]===aroundValues[p]){
    			numMines++;
    		}
    	}
    }
  	for( k=0; k<mines.length; k++){
  		if(mines[k]===position){
  			numMines='*';
  			$scope.explode='Has perdido!!!';
  		}
  	}
  	$scope.verify[position-1]=numMines;
  };
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/minesweeper', {
    templateUrl: 'scripts/mines/views/minesweeper.html',
    controller: 'minesweeper'
  });
});
