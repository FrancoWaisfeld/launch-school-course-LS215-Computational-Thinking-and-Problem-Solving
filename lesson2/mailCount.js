function mailCount(emailData) {
  let emails = emailData.split('##||##');
  let count = emails.length;
  let emailDates = emails.map(email => email.split('#/#')[2]);

  console.log(`Count of Email: ${count}`);
  console.log(`Date Range: ${disiplayableFormattedDates(emailDates)}`);
}

function disiplayableFormattedDates(dates) {
  let dateObjects = getDateObjects(dates);
  dateObjects.sort((date1, date2) => date1.valueOf() - date2.valueOf());
  return dateObjects[0].toDateString() + ' - ' +
  dateObjects[dateObjects.length - 1].toDateString();
}

function getDateObjects(dates) {
  return dates.map(date => {
    let dateElements = date.split(' ')[1].split('-');
    let monthIndex = parseInt(dateElements[0], 10) - 1;
    let day = parseInt(dateElements[1], 10);
    let year = parseInt(dateElements[2], 10);

    return new Date(year, monthIndex, day);
  });
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016