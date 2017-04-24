var app=angular.module('starter.controllers', ['ionic'])
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);
$ionicConfigProvider.tabs.position("bottom");
  // note that you can also chain configs
  
})
.controller('ModelCtrl', function($scope, $rootScope, $timeout, $ionicHistory,$ionicPopup, $state) {

   $scope.$on('$ionicView.enter', function(e) {
     $scope.showHide=false;
     $scope.topPanel=true;
    });

$scope.conceptList=[];
 GetAllConcepts("Shalin",function(data){
    if(data!=undefined)
    {
      data.forEach(function(data){
            var concept= {name:data}
            $scope.conceptList.push(concept);
      })
      $scope.selectedConceptForModel = $scope.conceptList[0];
    }
  });
  $scope.modelList=[];
GetAllModels("Shalin",function(data){
    if(data!=undefined)
    {
      data.forEach(function(data){      
            $scope.modelList.push(data);
      })
    }
  });
$scope.OnDelete=function(modelName){
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
}
//Update Model
$scope.UpdateModelSaveClicked=function(){
 var confirmPopup = $ionicPopup.confirm({
         title: 'Update Model',
         template: 'Are you sure to update Model?'
      });

      confirmPopup.then(function(res) {
         if(res) {
           alert("Model Updated Successfuly");
           $state.go('tab.model');
         }
      });
}
$scope.UpdateModelCancleClicked=function(){
  
}
$scope.UpdateModelEditClicked=function(showEditPanel){
  
  var div = angular.element( document.querySelector( '#div' ) );
  div.addClass('animate-show-hide');
   $scope.showEditPanel=true;
   $scope.topPanel=false;
}
 
//Train Model
$scope.OnTrainModel=function(model){
  $scope.svg=true;
  setTimeout(function(){
        $scope.svg=false;
        alert("Model Trained Successfully")
        angular.element(document.querySelector('#svgDiv')).style.visibility = "hidden"; 
      },500)
      trainModel(model);
}
})

.controller('ConceptCtrl', function($scope,$ionicPopup,$state) {
  $scope.OnDelete=function(modelName){
}

$scope.conceptList=[];
 GetAllConcepts("Shalin",function(data){
    if(data!=undefined)
    {
      data.forEach(function(data){
            var concept= {name:data}
            $scope.conceptList.push(concept);
      })
    }
  });


$scope.OnAdd=function(concept){
  //writeConceptData('Shalin',concept);
  $scope.concept="";
  var confirmPopup = $ionicPopup.confirm({
         title: 'Add Concept',
         template: "Sure to Add "+concept+" concept?"
      });

      confirmPopup.then(function(res) {
         if(res) {
            writeConceptData("Shalin",concept);
           alert("Concept "+ concept+ " Added Sucessfully");
           $state.go('tab.concept');
         }
      });
     
}

//Update Concept
$scope.ConceptEditClicked=function(){
 $scope.showEditPanel=true;
}

$scope.ConceptDeleteClicked=function(concept){
 var confirmPopup = $ionicPopup.confirm({
         title: 'Delete Concept',
         template: "Sure to Delete "+concept+" concept?"
      });
      confirmPopup.then(function(res) {
         if(res) {
           alert("Concept "+ concept+ " Deleted Sucessfully");
           $state.go('tab.concept');
         }
      });
}

$scope.UpdateConceptSaveClicked=function(conceptName){
  var confirmPopup = $ionicPopup.confirm({
         title: 'Edit Concept',
         template: "Sure to Edit "+conceptName+" concept?"
      });

      confirmPopup.then(function(res) {
         if(res) {
           alert("Concept "+ conceptName+ " Updated Sucessfully");
           $state.go('tab.concept');
         }
      });
}

$scope.OnList=function(concept){
  
}
})

.controller('InputCtrl', function($scope, $stateParams) {
   $scope.$on('$ionicView.enter', function(e) {
        $scope.conceptList= [];  
        GetAllConcepts("Shalin",function(data){
          if(data!=undefined)
          {
            data.forEach(function(data){
                  var concept= {name:data}
                  $scope.conceptList.push(concept);
            })
          }
        });                       
    });

  $scope.OnDelete=function(modelName){
}

 $scope.inputs = [];
 $scope.id=0;
    $scope.addfield = function () {
      $scope.id=$scope.id+1;
        $scope.inputs.push({})
    }
    $scope.getValue = function (input) {
        alert(input)
    }

    $scope.GetValues=function(input){
      for (var i=0;i<input.length;i++){
        alert(input[i]);
      }
    }
$scope.OnAdd=function(model){

}

$scope.OnUpdate=function(model){
  
}

$scope.OnList=function(model){
   
}
})
.controller('PredicateCtrl', function($scope, $timeout) {

    $scope.$on('$ionicView.enter', function(e) {
       $scope.conceptList=[];
 GetAllConcepts("Shalin",function(data){
    if(data!=undefined)
    {
      data.forEach(function(data){
            var concept= {name:data}
            $scope.conceptList.push(concept);
      })
      $scope.selectedConceptForModel = $scope.conceptList[0];
    }
  });
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






