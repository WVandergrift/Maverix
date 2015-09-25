'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ApiTestCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.$parent.title = "API Test";
    $scope.$parent.img = "img/iconset-addictive-flavour-set/png/chart.png";
    $scope.$parent.showTopToggle = false;
    $scope.apiRequest = {};
    $scope.apiRequest.url = "https://";
    $scope.apiRequest.type = "";
    $scope.apiRequest.result = {};
    $scope.apiRequest.status = 0;
    $scope.trackedList = {};
    $scope.apiRequest.trackedObjects = [];

    $scope.callAPI = function(){
      $scope.apiRequest.result = {};
      $scope.apiRequest.trackedObjects = [];

      $http.get($scope.apiRequest.url).
        success(function(data, status, headers, config) {
          $scope.apiRequest.result = data;
          $scope.apiRequest.type = config.method;
          $scope.apiRequest.status = status;
          $scope.updateTrackedObject();
        })
        .error(function(data, status, headers, config) {
          $scope.apiRequest.result = data;
          $scope.apiRequest.type = config.method;
          $scope.apiRequest.status = status;
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    $scope.updateTrackedObject = function(){
      $scope.apiRequest.trackedObjects = [];
      angular.forEach($scope.trackedList, function(value, key){
        var newTrackedObject = {};
        newTrackedObject.key = value;
        newTrackedObject.value = Object.byString($scope.apiRequest.result, value);

        $scope.apiRequest.trackedObjects.push(newTrackedObject);
        console.log(angular.toJson($scope.apiRequest.trackedObjects));
      });
    };


    Object.byString = function(o, s) {
      s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
      s = s.replace(/^\./, '');           // strip a leading dot
      var a = s.split('.');
      for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
          o = o[k];
        } else {
          return;
        }
      }
      return o;
    }
  }])
    .controller('MaverixCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Maverix Theme Guide";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ChartCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Charts";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/chart.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TypeCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Typography";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/cutting_pad.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('IconsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Icons";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/box_address.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TablesCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Tables";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/document-plaid-pen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ModalsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Modals";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/fullscreen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ControlsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Controls";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/button_blue_add.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('FormsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Forms";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/tablet.png";
        $scope.$parent.showTopToggle = false;

    }])
    .controller('MyCtrl1', ['$scope', function ($scope) {
        $scope.$parent.title = "Project Manager";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.$parent.showTopToggle = false;

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.$parent.title = "Warnings";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/moleskine_black.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.title = "Maverix Theme";
        $scope.subNav1 = 0;
        $scope.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.showTopToggle = false;
    }]);
