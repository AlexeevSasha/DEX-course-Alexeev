export const dataProcessingAboutSalary = (f, s) => { };

export const calculateCashback = (isCashback, sum, cb) => { };

export const getHolidaysNotifications = (f, s) => { };

export const getHolidayPrizes = (user, date, salary) => {
  const userDate = new Date(date);
  const currentDate = new Date();

  if (
    currentDate.getDate() === userDate.getDate() &&
    currentDate.getMonth() === userDate.getMonth()
  ) {
    let day = userDate.getDate();
    let month = userDate.getMonth() + 1;

    let prize = Math.ceil((+salary / 10 + day * month) / 10) * 10;
    return `У ${user} сегодня праздник, его премия составляет ${prize}`;
  }
};



