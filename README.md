timeDecimal.js converts varied time formats into a 2-decimal float.

This is useful for calculating the number of hours elapsed between two times
  For instance, 3 p.m. until 5:30 p.m., is 2.5 hours.

The function takes two arguments, both optional.
  If called with no arguments, timeDecimal will return a float of the current time.
  If called with one argument, timeDecimal will return a float based on that time.
    It can accept varied time formats, for instance:
      ~ Numbers ~
        - timeDecimal(2) >> 2
        - timeDecimal(10) >> 10
        - timeDecimal(830) >> 8.5
        - timeDecimal(1945) >> 19.75
      ~ Simple Strings ~
        - timeDecimal('0015') >> 0.25
        - timeDecimal('1845') >> 18.75
        - timeDecimal('8') >> 8
      ~ Strings with non-numeric breaks ~
        - timeDecimal('8:45') >> 8.75
        - timeDecimal('2.30') >> 2.5
        - timeDecimal('10 30') >> 10.5
      ~ Strings with A.M. and P.M. indicators (looks for 'p' or 'P', ignores A.M.)
        - timeDecimal('2pm') >> 14
        - timeDecimal('12:45 A.M.') >> 0.75
        - timeDecimal('12p') >> 12
        - timeDecimal('815 am') >> 8.25
      ~ ISO Time Object ~
        - const d = new Date(); >> 2020-03-03T03:43:46.765Z
        - timeDecimal(d) >> 22.72
  If provided a second argument, timeDecimal with take the first as hours and second as minutes.
    - timeDecimal(19,30) >> 19.5
    - timeDecimal(7,15) >> 7.25
