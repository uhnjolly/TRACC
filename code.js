// let StudentArray = [];

// const Student = function(Name,Email,Time,Topic) {
//     this.Name = Name;
//     this.Email = Email;
//     this.Time = Time;
//     this.Topic = Topic;
// };

// function getAsText(fileToRead) {
//     //filereader is built into js
//     let reader = new FileReader();
//     reader.readAsText(fileToRead);
//     reader.onload = loadHandler;
//     reader.onError = errorHandler;

// }
// function handleFiles(files) {
//     if (window.Filereader) {
//         getAsText(file[0]);
//         filesUploaded = true;
//     }
//     alert( 'FileReader not supported in browser.');
// }

// function loadHandler(event) {
//     let csv = event.target.result;
//     processData(csv);
// }

// function errorHandler(evt) {
//     if(evt.target.error.name == "NotReadableError") {
//         alert('Cannot Read File!');
//     }
// }

// //this is the function I was trying to modify but got stuck
// function processData(csv) {
//     //removes all the extras
//     let allTextLines = csv.split(/\r\n|\n);
//     //reads each row
//     //deals with each row of data
//     for (let i =0; i < allTextLines.length; i++) {
//         const tempStudent= new Student()
//         let row = allTextLines[i].split(';');
//         let col = [];
//         for (let j = 0; j< row.length;j++) {
//             col.push(row[j]); 
//         }
        
//     }
// }

$(document).ready(function () {
    $.ajax({
      url: 'contact.csv',
      dataType: 'text',
    }).done(successFunction);

    function successFunction(data) {
      var allRows = data.split(/\r?\n|\r/);
      var table = '<table class="table table-striped table-hover table-bordered table-dark">';
      for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        if (singleRow === 0) {
          table += '<thead>';
          table += '<tr>';
        } else {
          table += '<tr>';
        }
        var rowCells = allRows[singleRow].split(',');
        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
          if (singleRow === 0) {
            table += '<th>';
            table += rowCells[rowCell];
            table += '</th>';
          } else {
            table += '<td>';
            table += rowCells[rowCell];
            table += '</td>';
          }
        }
        if (singleRow === 0) {
          table += '</tr>'; 
          table += '</thead>';
          table += '<tbody>';
        } else {
          table += '</tr>';
        }
      } 
      table += '</tbody>';
      table += '</table>';
      $('body').append(table);
    }
      });
