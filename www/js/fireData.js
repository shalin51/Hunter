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


function GetAllConcepts(){
    var conceptList= [
      {id: '1', name: 'TestModel'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ];
    return  conceptList;
}


function GetAllModels(){
      'TestModel',
      'travel-v1.0',
      'apparel',
      'celeb-v1.3',
      'face-v1.3',
      'weddings-v1.0'
}

// Get a reference to the database service
var database = firebase.database();

function writeModelData(userID,model) {
  firebase.database().ref('users/' + userID+'/model/').push({
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

function getConceptData(userID,callback) {
  firebase.database().ref('users/' + userID+'/concepts/').once('value').then(function(snapshot) {
  var concepts = snapshot.val();
  var numberChilder= firebase.database().ref('users/' + userID+'/concepts/').transaction(function (current_value) {
        console.log (current_value || 0) + 1;
    });
  callback(concepts,numberChilder);
  });
}

function getModeltData(userID,concept) {
  firebase.database().ref('users/' + userID+'/model/').once('value').then(function(snapshot) {
  var model = snapshot.val();
  console.log(concepts);
  });
}