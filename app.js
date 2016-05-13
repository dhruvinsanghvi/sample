(function(){


var app = angular.module('userapp', ['ngAnimate','ui.bootstrap','flow']);

app.directive('navBar', function(){
return{
    restrict:'E',
    templateUrl:'navbar.html'
  };
});

app.directive('sideBar', function(){
return{
    restrict:'E',
    templateUrl:'sidebar.html'
  };
});
app.controller('JobsController', function($scope) {
	$scope.maininfo = info;
	
	$scope.jobinfo = [];
	angular.forEach ($scope.maininfo, function(val, index){
	

		angular.forEach (val.jobs, function(val1, index){
			
			$scope.jobinfo.push(val1);
            console.log($scope.jobinfo);

		});
	});
	
});
app.controller('ColgController', function($scope){
this.main = info;

});


var info=[{

	title:'Alumni batch 2015',
	description:'gajgajgdaj hqhqhkqhkdhqkhq dqhjqhdkqhd qdhkqhdkqhdq qhdkqhdkqd qdkqhkqhqk',
	eventimg:'images/event1.jpg',
	eventdate:'14th november 2016',
	createdBy:'admin',
	time:"2:30 PM",
	desc1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio dolor ducimus hic, ipsam ipsum iste natus nemo perspiciatis quia",
	desc2:"As shown by the demo, the thumbnails change their active status while the main image slides, and the main slider will switch to the corresponding image when a thumbnail is clicked",
	desc3:"For members: The College Board blog, featuring inside information on our programs, services, and the topics that matter most to educators in K-12 and higher education.",
	jobs:[
      {
      	jobtitle:'Seniour Ux Designer',
      	company:'Univibe Network',
      	city:'mubai',
      	country:'India',
      	lastdate:'14th April'


      },
       {
      	jobtitle:'Seniour Ux Designer',
      	company:'Univibe Network',
      	city:'mubai',
      	country:'India',
      	lastdate:'14th April'


      },
       {
      	jobtitle:'Seniour Ux Designer',
      	company:'Univibe Network',
      	city:'mubai',
      	country:'India',
      	lastdate:'14th April'


      }


	]

},	
{

    title:'Tech ex 2016',
	description:'this is the technical event which concentrate mostly on robotics',
	eventimg:'images/event2.jpg',
    eventdate:'14th november 2016',
	createdBy:'user',
	time:"3:00 PM",
	jobs:[
      {
      	jobtitle:'Marketing Manager',
      	company:'Univibe Network',
      	city:'pune',
      	country:'India',
      	lastdate:'14th April'


      },
       {
      	jobtitle:'Sales Executive',
      	company:'Univibe Network',
      	city:'Banglore',
      	country:'India',
      	lastdate:'14th April'


      },
       {
      	jobtitle:'Technical Lead',
      	company:'Univibe Network',
      	city:'mubai',
      	country:'India',
      	lastdate:'14th june'


      }


	]
},
{
    title:'Game Of Thrones',
	description:'this is the technical event which concentrate mostly on robotics',
	eventimg:'images/event2.jpg',
    eventdate:'14th november 2016',
	createdBy:'user',
	time:"7:00 PM"
   
},
{

    title:'cricket meet 2016',
	description:'this is the technical event which concentrate mostly on robotics',
	eventimg:'images/event2.jpg',
	pollingdate1:'14th november 2016',
	pollingdate2:'15th december 2016',
	pollingdate3:'17th january 2017',
	createdBy:'user',
	time:"8:00 PM"
}


];


})();


