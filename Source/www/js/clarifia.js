
var ClientId='IBjIUxK1sIfcYH9X-kqUc9YtvfYJqXNSARLZ2erX';
var ClientSecret='_1lNocq8FMBOtHIvI2jH4X2wifZU7UfVdF7GKFSP';

var clarifiaApp = new Clarifai.App(
    ClientId,
    ClientSecret
  );

function createInput(input){
 clarifiaApp.inputs.create([
    {
      url: input.url,
      id: input.id,
      concepts: [
            { "id": input.concept.id, "value": input.concept.value },
            { "id": "printer", "value": true },
            { "id": "horse", "value": false },
        ],
         metadata: {name: 'id001', type: 'plants', size: 100}
    },
   
    {
      url: "https://http2.mlstatic.com/impresora-todo-en-uno-hp-officejet-4500-nueva-y-sellada-D_NQ_NP_314911-MLC20675920745_042016-O.jpg",
      id: 'printer2',
      concepts: [
            { "id": "car", "value": false },
            { "id": "printer", "value": true },
            { "id": "horse", "value": false },
        ]  
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/G/01/img16/office-products/content-grid/1029672_office-products_canon_cg_750x375.jpg",
      id: 'printer3',
       concepts: [
            { "id": "car", "value": false },
            { "id": "printer", "value": true },
            { "id": "horse", "value": false },
        ]
    },
    {
      url: "http://www.pngall.com/wp-content/uploads/2016/07/Car-Free-PNG-Image.png",
      id: 'car1',
        concepts: [
        { "id": "car", "value": true },
        { "id": "printer", "value": false },
        { "id": "horse", "value": false },
        ]
    },
    {
      url: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
      id: 'car2',
      concepts: [
        { "id": "car", "value": true },
        { "id": "printer", "value": false },
        { "id": "horse", "value": false },
        ]
    },
    {
      url: "http://www.5knetwork.in/img/car-alloywheel-painting-coimbatore.png",
      id: 'car3',
      concepts: [
        { "id": "car", "value": true },
        { "id": "printer", "value": false },
        { "id": "horse", "value": false },
        ]
    },
    {
      url: "http://elelur.com/data_images/mammals/horse/horse-03.jpg",
      id: 'horse1',
        concepts: [
            { "id": "car", "value": false },
            { "id": "printer", "value": false },
            { "id": "horse", "value": true },
        ]
    },
    {
      url: "http://elelur.com/data_images/mammals/horse/horse-07.jpg",
      id: 'horse2',
      concepts: [
            { "id": "car", "value": false },
            { "id": "printer", "value": false },
            { "id": "horse", "value": true },
        ]
    },
    {
      url: "http://elelur.com/data_images/mammals/horse/horse-05.jpg",
      id: 'horse3',
      concepts: [
            { "id": "car", "value": false },
            { "id": "printer", "value": false },
            { "id": "horse", "value": true },
        ]
    }
  ]).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      console.log(err);
    }
  );
}

  // once inputs are created, create model by giving name and list of concepts
function createModel(Model) {
  clarifiaApp.models.create(Model.modelName, Model.concepts).then(
    function(response) {
      console.log(response);
      alert("Model Created Succesfully");
    },
    function(err) {
      console.log(err);
    }
  );
}

function trainModel(modelId) {
  clarifiaApp.models.train(modelId).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      console.log(err);
    }
  );
}

function PredictModel(modelId,img,callback){
    clarifiaApp.models.predict(modelId,img).then(
   function(response) {
      console.log(response);
      callback(response);
    },
    function(err) {
      console.log(err);
    }
  );
}



//createInput();
//createModel("");
//trainModel("TestModel");

