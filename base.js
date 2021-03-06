/*
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
*/

/**
 * @fileoverview This is the base file for the Lite Web Toolkit JSCore
 */

/**
 * Base namespace.
 */
thetr = {};
thetr.baseLoader = null;
thetr.getBaseLoader = function(baseLoc) {
  if (!thetr.baseLoader) {
    var loader = new thetr.Loader();
    loader.addFiles([
      baseLoc + 'Common.js',
      baseLoc + 'table.js',
      baseLoc + 'dstable.js',
      baseLoc + 'string.js'
    ]);
    
    thetr.baseLoader = loader;
  }
  return thetr.baseLoader;
};

thetr.argumentChecker = function(var_args) {
  
};

/**
 * Have a sub class inherit from base classes. Multiple inheritance is A-OK. 
 * Subclass ends up with a *magical* this.super() which takes an args object and 
 * calls each superclass's constructor with it in the order of inheritance.
 * Inheritance order is that the first in the array is inherited first, thus the
 * last will take precidence.
 * 
 * @param {class} sub Subclass which is inheriting from base classes
 * @param {class | null} base Base class to inherit from
 * @param {Array<class> | null} bases Base classes to inherit from.
 */
thetr.inherit = function(args) {
  var sub = args.sub;
  var bases = args.bases || [args.base] || [];
  for (var iter = 0, f; f = bases[iter]; iter++) {
    for (var i in f.prototype) {
      sub.prototype[i] = f.prototype[i];
    }
    //sub.prototype['super' +  = f;
  }
  // TODO (adinardi): This is a bit ugly. Also find a way to make them individually callable
  sub.prototype.supers = function(args) {
      for (var iter = 0; s = bases[iter]; iter++) {
        s.call(this, args);
      }
    };
};

thetr.console = {};

thetr.console.log = function(a1) {
  //alert(a1);
  //document.write(a1 + "<br>");
};

if (typeof console == 'undefined') {
  console = thetr.console;
}

/**
 * @param {object} args Args being checked
 * @param {array} check Args to be checked for exitence
 */
thetr.params = function(args) {
  if (typeof args.args == 'undefined') {
    alert('No args passed...');
    return false;
  }
  for (var iter = 0, item; item = args.check[iter]; iter++) {
    if (typeof args.args[item] == 'undefined') {
      alert('Invalid passed params: Missing <' + item + '>');
      return false;
    }
  }
};
