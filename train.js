var codeHabitTrainSystem ={

    colorRoute: {
        green: {
            stopsFromMain: 6
        },
        red: {
            stopsFromMain: 5
        }, 
        orange: {
            stopsFromMain: 4
        },
        yellow: {
            stopsFromMain: 3
        },
        pink: {
            stopsFromMain: 2
        },
        blue: {
            stopsFromMain: 1
        },
        main: {
            stopsFromMain: 0
        },
        purple: {
            stopsFromMain: -1
        }
    },
    cityRoute: {
        albany: {
            stopsFromMain: 5
        },
        newYork: {
            stopsFromMain: 4
        },
        portland: {
            stopsFromMain: 3
        },
        warwick: {
            stopsFromMain: 2
        },
        providence: {
            stopsFromMain: 1
        },
        main: {
            stopsFromMain: 0
        },
        miami: {
            stopsFromMain: -1
        },
        atlanta: {
            stopsFromMain: -2
        }
    },
    foodRoute: {
        apples: {
            stopsFromMain: 5
        }, 
        grapes: {
            stopsFromMain: 4
        },
        beans: {
            stopsFromMain: 3
        },
        potato: {
            stopsFromMain: 2
        },
        steak: {
            stopsFromMain: 1
        },
        main: {
            stopsFromMain: 0
        },
        pizza: {
            stopsFromMain: -1
        }
    },
    colorRouteStops: ['green', 'red', 'orange', 'yellow', 'pink', 'blue', 'main', 'purple' ],
    cityRouteStops: ['atlanta', 'miami', 'main', 'providence', 'warwick', 'portland', 'newYork', 'albany'],
    foodRouteStops: ['apples', 'grapes', 'beans', 'potato', 'steak', 'main', 'pizza'],
    howManyStops: function(stop1, stop2){
        var routeLocationStop1;
        var routeLocationStop2;
        if(codeHabitTrainSystem.colorRouteStops.includes(stop1)){
            routeLocationStop1='color';
            stop1=codeHabitTrainSystem.colorRoute[stop1].stopsFromMain;
        }else if(codeHabitTrainSystem.cityRouteStops.includes(stop1)){
            routeLocationStop1='city';
            stop1=codeHabitTrainSystem.cityRoute[stop1].stopsFromMain;
        }else if(codeHabitTrainSystem.foodRouteStops.includes(stop1)){
            routeLocationStop1='food';
            stop1=codeHabitTrainSystem.foodRoute[stop1].stopsFromMain;
        }else{
            return stop1 + ' is not a route in the codeHabitTrainSystem';
        }
        if(codeHabitTrainSystem.colorRouteStops.includes(stop2)){
            routeLocationStop2='color';
            stop2=codeHabitTrainSystem.colorRoute[stop2].stopsFromMain;
        }else if(codeHabitTrainSystem.cityRouteStops.includes(stop2)){
            routeLocationStop2='city';
            stop2=codeHabitTrainSystem.cityRoute[stop2].stopsFromMain;
        }else if(codeHabitTrainSystem.foodRouteStops.includes(stop2)){
            routeLocationStop2='food';
            stop2=codeHabitTrainSystem.foodRoute[stop2].stopsFromMain;
        }else{
            return stop2 + ' is not a route in the codeHabitTrainSystem';
        }

        if(routeLocationStop1===routeLocationStop2){
            return stop1-stop2;
        }else{
            return stop1+stop2;
        }
    }
}


console.log(codeHabitTrainSystem.howManyStops('green','red'));
console.log(codeHabitTrainSystem.howManyStops('albany','atlanta'));