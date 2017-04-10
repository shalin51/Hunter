var app=angular.module('starter.controllers', [])

.controller('ModelCtrl', function($scope, $rootScope, $timeout, $ionicHistory) {
 $scope.conceptList= GetAllConcepts();
 $scope.selectedConceptForModel = $scope.conceptList[0];

$scope.OnDelete=function(modelName){
$scope.modelList=ary.remove(modelName);
}

$scope.OnAdd=function(model){
   
    var selectedConcept = [];
    angular.forEach($scope.conceptList, function(concept) {
        if (concept.selected) {
        selectedConcept.push(concept.name);
      }
    });
    model.concepts=selectedConcept;
   createModel(model);
   writeModelData("Shalin",model);
};


$scope.OnUpdate=function(model){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnList=function(model){
     GetAllModels(function(data){
          console.log(data);
     });
     
      $scope.modelList=[
      'travel-v1.0',
      'apparel',
      'celeb-v1.3',
      'face-v1.3',
    ]
}
})
.controller('ConceptCtrl', function($scope) {

  $scope.OnDelete=function(modelName){
  
}

$scope.OnAdd=function(concept){
  writeConceptData('Shalin',concept);
  $scope.concept="";
}

$scope.OnUpdate=function(concept){
 
}

$scope.OnList=function(concept){
   getConceptData('Shalin',function(concepts,numberChilder){
     var count=1;
     if(concepts.length==0)
     {
        count=1;
       
     }  
     else
     {
        count=concepts.length;   
     }  
   });
}
  
})

.controller('InputCtrl', function($scope, $stateParams, Chats) {
  $scope.OnDelete=function(modelName){
  $scope.modelList=ary.remove(modelName);
}

 $scope.inputs = [];
    $scope.addfield = function () {
        $scope.inputs.push({})
    }
    $scope.getValue = function (item) {
        alert(item.value)
    }

$scope.OnAdd=function(model){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnUpdate=function(model){
  $scope.modelList=ary.remove(modelName);
}

$scope.OnList=function(model){
      $scope.modelList=[
      'Animal',
      'General',
      'Shalin',
      'Test'
    ]
}
})
.controller('PredicateCtrl', function($scope, $timeout) {

    $scope.$on('$ionicView.enter', function(e) {
      debugger;
        $scope.conceptList= GetAllConcepts();
          $scope.selectedConcept = $scope.conceptList[0];                 
           $timeout(updateView, 50);                  
    });

  var updateView=function(){
                var inputImage=localStorage.getItem("imgLink");
                $scope.link = inputImage;
                var selectedConcept=localStorage.getItem("selectedConcept");
                PredictModel(selectedConcept,inputImage,function(res){
                $scope.results= GetNameAndConfedence(res);
               });
  }

  $scope.changeLink = function() {
   $scope.link = 'https://farm4.staticflickr.com/3261/2801924702_ffbdeda927_d.jpg';
      }

var GetNameAndConfedence=function(data){
  var results=[];
  var count=data.outputs[0].data.concepts.length;
  
    for(var i=0;i<count;i++){
      var result={
      name:data.outputs[0].data.concepts[i].name,
      confedence:(data.outputs[0].data.concepts[i].value*100)
    }
  results.push(result);
  }
return results;
}

$scope.Predict=function(inputImage){
  var selectedConcept=$scope.selectedConcept.name;
  localStorage.setItem("imgLink", inputImage);  
  localStorage.setItem("selectedConcept", selectedConcept);
}

})

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};




