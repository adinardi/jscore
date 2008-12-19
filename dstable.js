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

thetr.DSTable = function(args) {
  this.dataSource = null;
  this.supers(args);
};
thetr.inherit({sub: thetr.DSTable, base: thetr.Table});

/**
 * @param {thetr.DataSource} ds
 */
thetr.DSTable.prototype.setDataSource = function(args) {
  this.dataSource = args.ds;
  thetr.event.listen({
      on: this.dataSource,
      action: 'update',
      handler: this.dsUpdate,
      scope: this
    });
  this.dsUpdate();
};

/**
 * Handler for when the data source tells us to update
 * @handler
 */
thetr.DSTable.prototype.dsUpdate = function() {
  this.refreshDisplay();
};

/**
 * Refresh the information in this table from the dataSource.
 */
thetr.DSTable.prototype.refreshDisplay = function() {
  if (!this.dataSource) {
    return;
  }
  
  var count = this.dataSource.getCount();
  this.setRowCount({count: count});
  
  var colCount = this.columns.length;
  var colNames = this.columns;
  for (var rowIter = 0, row; row = this.rows[rowIter]; rowIter++) {
    for (var colIter = 0, column; column = colNames[colIter]; colIter++) {
      var val = this.dataSource.getValue({row: rowIter, column: column.id});
      row[column.id].innerHTML = val;
    }
  }
};
