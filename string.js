Copyright (c) 2007-2008, Angelo DiNardi (angelo@dinardi.name)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


thetr.string = {};

/**
 * Trim whitespace from around a string.
 * @param {string} string The string to trim.
 * @return {string} The trimmed String.
 */
thetr.string.trim = function(args) {
  var s = args.string;
  var ns = '';
  var curPos = 0;
  while (s.charAt(curPos).search(/\s/) > -1) {
    curPos++;
  }
  ns = s.substr(curPos);
 
  curPos = ns.length - 1;
  while (ns.charAt(curPos).search(/\s/) > -1) {
    curPos--;
  }
  ns = ns.substr(0, curPos + 1);

  return ns;
};