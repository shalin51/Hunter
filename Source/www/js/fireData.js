// initialize firebase

var config = {
    apiKey: "AIzaSyCT4kXsRaesCPMpicf_JuJI8O8GGZQof-A",
    authDomain: "firsttest-cf754.firebaseapp.com",
    databaseURL: "https://firsttest-cf754.firebaseio.com",
    projectId: "firsttest-cf754",
    storageBucket: "firsttest-cf754.appspot.com",
    messagingSenderId: "892164439114"
  };
  firebase.initializeApp(config);


// function GetAllConcepts(){
//     var conceptList= [
//       {id: '1', name: 'TestModel'},
//       {id: '2', name: 'Option B'},
//       {id: '3', name: 'Option C'}
//     ];
//     return  conceptList;
// }


// Get a reference to the database service
var database = firebase.database();

function writeModelData(userID,model) {
  firebase.database().ref('users/' + "Shalin"+'/model/').push({
    modelName: model.modelName,
    description: model.description,
    concepts : model.concepts
  });
}

function writeConceptData(userID,concept) {
  firebase.database().ref('users/' + userID+'/concepts/').push({
    name:concept
  });
}

function GetAllConcepts(userID,callback) {
  firebase.database().ref('users/' + "Shalin"+'/concepts/').once('value').then(function(snapshot) {
  var concepts = snapshot.val();
  var keys=[];
  var name=[];
  snapshot.forEach(function(snapshot) {
      keys.push(snapshot.getKey());
    });
    for(var i=0;i<keys.length;i++){
     name.push(concepts[keys[i]].name);
    }
    callback(name);
  });
}
function GetAllModels(userID,callback) {
  firebase.database().ref('users/' + "Shalin"+'/model/').once('value').then(function(snapshot) {
  var models = snapshot.val();
  var keys=[];
  var modelList=[];
  snapshot.forEach(function(snapshot) {
      keys.push(snapshot.getKey());
    });
    for(var i=0;i<keys.length;i++){
     modelList.push(models[keys[i]]);
    }
    callback(modelList);
  });
}
