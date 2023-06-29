export function getNumberOfDaysInYear(year: number): number {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366;
    } else {
        return 365;
    }
}


export function getMonthLabel(monthIndex: number): string {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    return months[monthIndex];
}
