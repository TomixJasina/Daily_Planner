// current date

const hour = dayjs().hour();
function setCurrentDay() {
    const currentDate = dayjs().format("dddd, MMMM DD");
    $("#currentDay").text(currentDate);
};

// create adn list timeblocks
function rowsList(){
    for (let hour = 9; hour <= 17; hour++){
        let rows = createRow(hour);
        $('#timeBlocks').append(rows);
        }
};

// function to create each element of timeblock
function createRow(rowHour) {

    let newRow = $('<div>').addClass("row time-block");

    let hourCol = $('<div>').addClass("col-1 hour").text(dayjs().hour(rowHour).format(`ha`));

    let textCol = $('<textarea>').addClass('col-10 textarea').attr({
        'placeholder': "Type event here",
        'id': rowHour
    });

    textCol.val(localStorage.getItem(rowHour) || ""); //get saved event from local storage

    let buttonCol = $('<button>').addClass('col-1 saveBtn').html('<i class="fas fa-download"></i>');
    
    //save input event by clicking on save button
    buttonCol.click(function(){ 
    localStorage.setItem(rowHour, textCol.val());
    });
    
    // adding colors to timeblocks according to current time
    const hour = dayjs().hour();

    if (rowHour === hour) {
    textCol.addClass('present');
    } else if (rowHour < hour) {
    textCol.addClass('past');
    } else {
    textCol.addClass('future');
    }

    newRow.append(hourCol, textCol, buttonCol);
    return newRow;
}
