const d = new Date();

const timeDecimal = (time, mins) => {

  // Take base-60 minutes and return as a fraction of 1
  const decimal = minutes => {
    return Math.round((minutes/60)*100)/100
  };

  // Use the current time as default values
  let hours = d.getHours();
  let minutes = decimal(d.getMinutes());

  // Check if first argument is an ISO Time Object
  const isIsoTime = input => {
    try {
      return input.getTime()
    }
    catch {
      return false
    };
  };
  if ( isIsoTime(time) ) {
    return time.getHours() + decimal(time.getMinutes());
  };

  // No args provided, return with current time
  if (!time) {
    return hours + minutes;
  }
  // Time provided in first arg, ignore min arg
  else if (!mins) {

      // Make sure everthing is a string
      if (!time.isNaN) {
        time = time.toString();
      };

      // Split characters into array
      time = time.split('');

      // Get a Boolean to represent PM times
      const pm = time.includes('p') || time.includes('P')

      // Filter out non-numberic characters
      time = time.filter(i => {
        // Empty spaces return 0 with Number(), force NaN
        if ( i === ' ') { i = NaN };
        return !isNaN(Number(i));
      });

      // Cases to determine time by array length

      // Length of 4, split in half
      if (time.length === 4) {
        minutes = Number(`${time[2]}${time[3]}`);
        hours = Number(`${time[0]}${time[1]}`);
        if ( pm && hours !== 12 ) {
          hours += 12
        };
        if ( !pm && hours === 12 ) {
          hours = 0;
        };
      };

      // Length of 3
      if ( time.length === 3 ) {
        minutes = Number(`${time[1]}${time[2]}`);
        hours = Number(time[0]);
        if ( pm ) { hours += 12 };
      };

      // Two digit Hour, e.g., 12pm
      if ( time.length === 2 ) {
        minutes = 0;
        if ( pm && hours !== 12 ) {
          hours = Number(`${time[0]}${time[1]}`) + 12;
        }
        else if ( !pm && hours === 12 ) {
          hours = 0;
        }
        else {
          hours = Number(`${time[0]}${time[1]}`);
        }
      };

      // Single number, e.g., 2pm
      if ( time.length === 1 ) {
        hours = Number(time[0])
        minutes = 0;
        if ( pm ) {
          hours += 12;
        }
      };
      return hours + decimal(minutes);
  }
  // Hours and Minutes provided seperately
  else {
    return time + decimal(mins);
  }
};

module.exports = timeDecimal();
