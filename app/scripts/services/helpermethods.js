'use strict';

/**
 * @ngdoc service
 * @name potFetApp.helperMethods
 * @description
 * # helperMethods
 * A factory that provides a place to put useful helper methods until such time
 * as they grow large enough to justify their own factory/service.
 */
angular.module('potFetApp')
  .factory('helperMethods', function () {
    // Service logic
    // ...
    var MONTHS = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    // Public API here
    return {
      /**
       * Formats a date string for display as the ate when a picture was published
       * @param {string} dateString - A string representation of a Date object to format
       */
      formatPublishedDate: function (dateString) {
        
        var date = new Date(dateString);
        
        // Determine the suffix to use for the day
        var daySuffix = 'th';
        var dayIdx = date.getDate();
        if (dayIdx%10 === 1 && dayIdx !== 11) {
            daySuffix = 'st';
        } else if (dayIdx%10 === 2 && dayIdx !== 12) {
            daySuffix = 'nd';
        } else if (dayIdx%10 === 3 && dayIdx !== 13) {
            daySuffix = 'rd';
        }
        
        // Build the published date string
        var month = MONTHS[ date.getMonth() ];
        
        var hours = date.getHours().toString();
        if (date.getHours() < 10) {
            hours = '0' + hours;    // Zero pad if needed
        }
        
        var minutes = date.getMinutes().toString();
        if (date.getMinutes() < 10) {
            minutes = '0' + minutes;    // Zero pad if needed
        }
        
        var publishedDateString = dayIdx.toString() + daySuffix + 
            ' ' + month + ' ' + date.getFullYear().toString() +
            ' at ' + hours + ':' + minutes;
            
        return publishedDateString;
      }
    };
  });
