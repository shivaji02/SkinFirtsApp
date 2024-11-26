export const getCalendarDays = () :{date:string; day:string}[]=>{
    const days = [];
    const today = new Date();
    today.setDate(today.getDate() - 1);

    for (let i = 0; i < 10; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const formattedDate = date.toISOString().split('T')[0];
        const day = date.toLocaleDateString('en-US', {weekday:'short'});
        days.push({date:formattedDate,day});
    }

    return days;
}