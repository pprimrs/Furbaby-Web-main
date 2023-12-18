const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * 
 * @param {Date} date 
 */
function formatTime(date){
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAM = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${(isAM ? "AM" : "PM")}`;
}

/**
 * Format the date as "Day, Month Year"
 * @param {Date} date 
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
 }
 setInterval(() => {
     const now = new Date();
     // Assuming you have a formatTime function defined somewhere in your code
     timeElement.textContent = formatTime(now); // Replace formatTime with your actual function
     dateElement.textContent = formatDate(now);
 }, 200);
 