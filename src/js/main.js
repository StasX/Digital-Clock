"use strict";

(function () {
    function turnOff(id) {
        // turn off digit part
        document.getElementById(id).removeAttribute("style")
    }

    function turnOn(id) {
        // turn on digit part
        document.getElementById(id).style.backgroundColor = "red";
    }
    setInterval(function () {
        var date = new Date();

        // agregate hours

        var hours = date.getHours();
        hours = parseInt(hours);

        //first digit
        
        switch (Math.floor(hours / 10)) {
            case 0:
                {
                    turnOn("hour-first-digit-vertical-left-top");
                    turnOn("hour-first-digit-vertical-right-top");
                    turnOn("hour-first-digit-vertical-left-bottom");
                    turnOn("hour-first-digit-vertical-right-bottom");
                    turnOn("hour-first-digit-horizontal-top");
                    turnOff("hour-first-digit-horizontal-middle");
                    turnOn("hour-first-digit-horizontal-bottom");
                    break;
                }
            case 1:
                {
                    turnOff("hour-first-digit-vertical-left-top");
                    turnOn("hour-first-digit-vertical-right-top");
                    turnOff("hour-first-digit-vertical-left-bottom");
                    turnOn("hour-first-digit-vertical-right-bottom");
                    turnOff("hour-first-digit-horizontal-top");
                    turnOff("hour-first-digit-horizontal-middle");
                    turnOff("hour-first-digit-horizontal-bottom");
                    break;
                }
            case 2:
                {
                    turnOff("hour-first-digit-vertical-left-top");
                    turnOn("hour-first-digit-vertical-right-top");
                    turnOn("hour-first-digit-vertical-left-bottom");
                    turnOff("hour-first-digit-vertical-right-bottom");
                    turnOn("hour-first-digit-horizontal-top");
                    turnOn("hour-first-digit-horizontal-middle");
                    turnOn("hour-first-digit-horizontal-bottom");
                    break;
                }
        }

        // second digit 

        switch (hours % 10) {
            case 0:
                {
                    turnOn("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOn("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOff("hour-second-digit-horizontal-middle");
                    turnOn("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 1:
                {
                    turnOff("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOff("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOff("hour-second-digit-horizontal-top");
                    turnOff("hour-second-digit-horizontal-middle");
                    turnOff("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 2:
                {
                    turnOff("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOn("hour-second-digit-vertical-left-bottom");
                    turnOff("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOn("hour-second-digit-horizontal-middle");
                    turnOn("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 3:
                {
                    turnOff("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOff("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOn("hour-second-digit-horizontal-middle");
                    turnOn("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 4:
                {
                    turnOn("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOff("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOff("hour-second-digit-horizontal-top");
                    turnOn("hour-second-digit-horizontal-middle");
                    turnOff("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 5:
                {
                    turnOn("hour-second-digit-vertical-left-top");
                    turnOff("hour-second-digit-vertical-right-top");
                    turnOff("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOn("hour-second-digit-horizontal-middle");
                    turnOn("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 6:
                {
                    turnOn("hour-second-digit-vertical-left-top");
                    turnOff("hour-second-digit-vertical-right-top");
                    turnOn("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOn("hour-second-digit-horizontal-middle");
                    turnOn("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 7:
                {
                    turnOff("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOff("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOff("hour-second-digit-horizontal-middle");
                    turnOff("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 8:
                {
                    turnOn("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOn("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOn("hour-second-digit-horizontal-middle");
                    turnOn("hour-second-digit-horizontal-bottom");
                    break;
                }
            case 9:
                {
                    turnOn("hour-second-digit-vertical-left-top");
                    turnOn("hour-second-digit-vertical-right-top");
                    turnOff("hour-second-digit-vertical-left-bottom");
                    turnOn("hour-second-digit-vertical-right-bottom");
                    turnOn("hour-second-digit-horizontal-top");
                    turnOn("hour-second-digit-horizontal-middle");
                    turnOn("hour-second-digit-horizontal-bottom");
                    break;
                }
        }

        // agrigate minutes

        var minutes = date.getMinutes();

        // first diget

        switch (Math.floor(minutes / 10)) {
            case 0:
                {
                    turnOn("minute-first-digit-vertical-left-top");
                    turnOn("minute-first-digit-vertical-right-top");
                    turnOn("minute-first-digit-vertical-left-bottom");
                    turnOn("minute-first-digit-vertical-right-bottom");
                    turnOn("minute-first-digit-horizontal-top");
                    turnOff("minute-first-digit-horizontal-middle");
                    turnOn("minute-first-digit-horizontal-bottom");
                    break;
                }
            case 1:
                {
                    turnOff("minute-first-digit-vertical-left-top");
                    turnOn("minute-first-digit-vertical-right-top");
                    turnOff("minute-first-digit-vertical-left-bottom");
                    turnOn("minute-first-digit-vertical-right-bottom");
                    turnOff("minute-first-digit-horizontal-top");
                    turnOff("minute-first-digit-horizontal-middle");
                    turnOff("minute-first-digit-horizontal-bottom");
                    break;
                }
            case 2:
                {
                    turnOff("minute-first-digit-vertical-left-top");
                    turnOn("minute-first-digit-vertical-right-top");
                    turnOn("minute-first-digit-vertical-left-bottom");
                    turnOff("minute-first-digit-vertical-right-bottom");
                    turnOn("minute-first-digit-horizontal-top");
                    turnOn("minute-first-digit-horizontal-middle");
                    turnOn("minute-first-digit-horizontal-bottom");
                    break;
                }
            case 3:
                {
                    turnOff("minute-first-digit-vertical-left-top");
                    turnOn("minute-first-digit-vertical-right-top");
                    turnOff("minute-first-digit-vertical-left-bottom");
                    turnOn("minute-first-digit-vertical-right-bottom");
                    turnOn("minute-first-digit-horizontal-top");
                    turnOn("minute-first-digit-horizontal-middle");
                    turnOn("minute-first-digit-horizontal-bottom");
                    break;
                }
            case 4:
                {
                    turnOn("minute-first-digit-vertical-left-top");
                    turnOn("minute-first-digit-vertical-right-top");
                    turnOff("minute-first-digit-vertical-left-bottom");
                    turnOn("minute-first-digit-vertical-right-bottom");
                    turnOff("minute-first-digit-horizontal-top");
                    turnOn("minute-first-digit-horizontal-middle");
                    turnOff("minute-first-digit-horizontal-bottom");
                    break;
                }
            case 5:
                {
                    turnOn("minute-first-digit-vertical-left-top");
                    turnOff("minute-first-digit-vertical-right-top");
                    turnOff("minute-first-digit-vertical-left-bottom");
                    turnOn("minute-first-digit-vertical-right-bottom");
                    turnOn("minute-first-digit-horizontal-top");
                    turnOn("minute-first-digit-horizontal-middle");
                    turnOn("minute-first-digit-horizontal-bottom");
                    break;
                }
        }

        // second diget
        
        switch (minutes % 10) {
            case 0:
                {
                    turnOn("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOn("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOff("minute-second-digit-horizontal-middle");
                    turnOn("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 1:
                {
                    turnOff("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOff("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOff("minute-second-digit-horizontal-top");
                    turnOff("minute-second-digit-horizontal-middle");
                    turnOff("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 2:
                {
                    turnOff("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOn("minute-second-digit-vertical-left-bottom");
                    turnOff("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOn("minute-second-digit-horizontal-middle");
                    turnOn("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 3:
                {
                    turnOff("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOff("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOn("minute-second-digit-horizontal-middle");
                    turnOn("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 4:
                {
                    turnOn("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOff("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOff("minute-second-digit-horizontal-top");
                    turnOn("minute-second-digit-horizontal-middle");
                    turnOff("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 5:
                {
                    turnOn("minute-second-digit-vertical-left-top");
                    turnOff("minute-second-digit-vertical-right-top");
                    turnOff("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOn("minute-second-digit-horizontal-middle");
                    turnOn("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 6:
                {
                    turnOn("minute-second-digit-vertical-left-top");
                    turnOff("minute-second-digit-vertical-right-top");
                    turnOn("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOn("minute-second-digit-horizontal-middle");
                    turnOn("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 7:
                {
                    turnOff("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOff("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOff("minute-second-digit-horizontal-middle");
                    turnOff("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 8:
                {
                    turnOn("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOn("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOn("minute-second-digit-horizontal-middle");
                    turnOn("minute-second-digit-horizontal-bottom");
                    break;
                }
            case 9:
                {
                    turnOn("minute-second-digit-vertical-left-top");
                    turnOn("minute-second-digit-vertical-right-top");
                    turnOff("minute-second-digit-vertical-left-bottom");
                    turnOn("minute-second-digit-vertical-right-bottom");
                    turnOn("minute-second-digit-horizontal-top");
                    turnOn("minute-second-digit-horizontal-middle");
                    turnOn("minute-second-digit-horizontal-bottom");
                    break;
                }
        }
    }, 990);
})();