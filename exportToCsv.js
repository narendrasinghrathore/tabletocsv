

var file = [];
            var t = angular.element(document.getElementById(table))[0];
            for (var i = 0; i < t.rows.length; i++) {
                var row = t.rows[i];
                var line = [];
                 for (var c = 0; c < row.cells.length; c++) {
                    line.push(row.cells[c].innerText);
                }
                file.push(line.join(","));
            }
            var csvFile = file.join('\n');
            if (window.navigator.msSaveOrOpenBlob) {
                var blob = new Blob(csvFile);
                window.navigator.msSaveOrOpenBlob(blob, 'myFile.csv');
            } else {
                var a         = document.createElement('a');
                a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvFile);
                a.target      = '_blank';
                a.download    = 'myFile'+ new Date().getMilliseconds()+'.csv';
                document.body.appendChild(a);
                a.click();
            }
