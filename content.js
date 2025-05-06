const ticketsTitles = [
    "החיבור לרשת האוניברסיטה לא עובד, ברכבת, אני כבר שוקל לחבר את המחשב לאוטובוס הבא שעובר ליד",
    "המסך שלי כועס עלי,בבקשה שיסלח לי , הוא רק מציג תמונות של פסטה – אולי אני צריך לנסות להאכיל אותו?",
    "החיבור שלי לא עובד, ניסיתי לחבר אותו למסעדת פסטה, אבל הוא לא אוהב פתיתים",
    "שלום, אתמול קניתי את המוצר שלכם והוא לא עבד בכלל חלאות. אני הייתי צריך אותו כדי להדפיס תמונה של חתולי שלי, ואני לא יכול. תעזרו לי בבקשהההההההה.",
    "היי, אני לא מצליח לשים את החלב במקרר שלכם. הוא כל הזמן בורח לי החוצה. מה עושים עם זה,כוסעמק ערס!!!!?",
    "היי, אני מנסה להסביר למחשב שלי שהוא לא יכול להרגיש, אבל הוא לא מקשיב לי האידיוט הזה. אתם יכולים לשלוח לי מדריך איך לגרום לו להבין?",
    "היי, יש לי בעיה עם המאוורר המניאק הזה. הוא מסרב להסתובב בכיוון שאני מבקש. איך אני יכול לשוחח עם הבן זונה הזה על זה?",
    "מישהו יכול להסביר לי את הטרנד החדש הזה הבן שלי כל הזמן צועק טונג טונג טונג סהורררר"
];

const input = document.querySelector(
    "body > table > tbody > tr.tbody > td > form > table > tbody > tr:nth-child(4) > td > font > input[type='text']"
);
const rawValue = input?.value || "";
const numberOnly = Number(rawValue.match(/\d+/)?.[0]); // Extracts first number sequence
console.log(numberOnly); // e.g., "123"

const idx = Math.floor(Math.random() * numberOnly); // Calculate index based on the number

console.log(idx);

function getTicketTd(index) {
    const trIndex = 5 + index * 2;
    const selector =
        "body > table > tbody > tr.tbody > td > form > table > tbody > tr:nth-child(" +
        trIndex +
        ") > td:nth-child(2)";
    return document.querySelector(selector);
}

// Example: change title of 3rd ticket
const td = getTicketTd(idx);

console.log(td); // e.g., <td>Ticket Title</td>

if (td) {
    const titleId = Math.floor(Math.random() * ticketsTitles.length); // Calculate index based on the number
    const newTitle = ticketsTitles[titleId]; // Get the new title from the funnyList
    td.querySelector("font[size='2']").textContent = newTitle;
}

const starSelector ="body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr > td > font > span > font > table > tbody > tr:nth-child(2) > td:nth-child(1) > font"

document.querySelector(starSelector).textContent="פטריק סטאר"