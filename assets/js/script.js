// current date

const hour = dayjs().hour();
function setCurrentDay() {
    const currentDate = dayjs().format("dddd, MMMM DD");
    $("#currentDay").text(currentDate);
};
