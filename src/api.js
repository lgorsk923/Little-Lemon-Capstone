

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export function fetchAPI(selectedDate) {

    if (!(selectedDate instanceof Date)) {
        selectedDate = new Date(selectedDate);
    };
    var submissionData = submissionData ? JSON.parse(localStorage.getItem('Date and Time')) : [];
    let bookedTimes = submissionData ? submissionData
        .filter((data) => new Date(data.date).toDateString() === selectedDate.toDateString())
        .map((data) => data.time) : [];
    let result = [];
    let random = seededRandom(selectedDate);

    for (let i = 5; i <= 11; i++) {
        var proposed1 = i + ':00 PM';
        var proposed2 = i + ':30 PM';
        if (random() < 0.5 && !bookedTimes.includes(proposed1)) {
            result.push(proposed1);
        }
        if (random() < 0.5 && !bookedTimes.includes(proposed2)) {
            result.push(proposed2);
        }
    }
    return result;
};
export function submitAPI(values) {
    var submissionData = localStorage.getItem('Date and Time');
    submissionData = submissionData ? JSON.parse(submissionData) : [];
    submissionData.push({ date: values.date, time: values.time });
    localStorage.setItem('Date and Time', JSON.stringify(submissionData));
    return true;
};
