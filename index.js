const moment = require('moment');

// default utc offset
const defaultUtcOffset = moment().utcOffset();

/**
 * Get Now Date
 * @returns {Time}
 * @constructor
 */
function Now() {
  return new Time(new Date());
}

/**
 * Parse Date from a string any layer
 * @param dateString
 * @param layer
 * @returns {Date}
 * @constructor
 */
function Parse(dateString, layer) {
  const utcOffset = layer === Time.ISO8601Z ? 0 : defaultUtcOffset;
  return moment(dateString, layer)
    .utcOffset(utcOffset)
    .toDate();
}

/**
 * Time constructor
 * @param d
 * @constructor
 */
function Time(d) {
  if (!d) return Now();
  this.date = new Date(d);
  Object.defineProperty(this, 'date', {
    enumerable: false,
    configurable: false,
    value: new Date(d)
  });
}

Time.prototype.constructor = Time;

/**
 * rewrite to string
 * @returns {string}
 */
Time.prototype.toString = function() {
  return this.date.toString();
};

/**
 * rewrite valueOf
 * @returns {*}
 */
Time.prototype.valueOf = function() {
  return this.date.valueOf();
};

// time format layer
Time.ANSIC = 'ddd MMM D  HH:mm:ss YYYY';
Time.UnixDate = 'ddd MMM  D HH:mm:ss z YYYY';
Time.RubyDate = 'ddd MMM D HH:mm:ss ZZ YYYY';
Time.RFC822 = 'ddd MMM D HH:mm:ss ZZ YYYY z';
Time.RFC822Z = 'D MMM YY HH:mm ZZ';
Time.RFC850 = 'dddd, DD-MMM-YY HH:mm:ss z';
Time.RFC1123 = 'ddd, DD MMM YY HH:mm:ss z';
Time.RFC3339 = 'YYYY-MM-DDTHH:mm:SSZ';
Time.RFC3339Nano = 'YYYY-MM-DDTHH:mm.SSSSSS:SSZ';
Time.Kitchen = 'h:mA';
Time.Stamp = 'MMM  D HH:mm:ss';
Time.StampMilli = 'MMM  D HH:mm:ss.SSS';
Time.StampMicro = 'MMM  D HH:mm:ss.SSSSSS';
Time.StampNano = 'MMM  D HH:mm:ss.SSSSSSSSS';
Time.ISO8601 = 'YYYY-MM-DDTHH:mm:ss ZZ';
Time.ISO8601Z = 'YYYY-MM-DDTHH:mm:ss\\Z';
Time.ISODate = 'YYYY-MM-DD';
Time.ISOOrigin = 'YYYY-DDD';
Time.ISOTime = 'HH:mm:ss';
Time.ISOWeek = 'YYYY-\\Www';
Time.ISOWeekDay = 'YYYY-\\Www-d';
Time.SlashedDate = 'MM/DD/YYYY';
Time.StrfTimeClock = 'HH:mm';
Time.StrfTimeISODate = 'YYYY-MM-DD';
Time.StrfTimeKitchen = 'H:MM:SS A';
Time.StrfTimeShortdate = 'D-MMM-YYYY';
Time.UTC = 'ddd, DD MMM YYYY HH:mm:ss z';

/**
 * format the date with layer
 * @param layer
 * @returns {string}
 */
Time.prototype.format = function(layer) {
  const utcOffset = layer === Time.ISO8601Z ? 0 : defaultUtcOffset;
  return moment(this.date)
    .utcOffset(utcOffset)
    .format(layer);
};

module.exports = {
  Now: Now,
  Parse: Parse,
  Time: Time
};
