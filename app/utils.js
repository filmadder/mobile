export const getDate = date => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date2 = new Date(date);
    const day = date2.getDate();
    const month = months[date2.getMonth()];
    const year = date2.getFullYear();
    
    return `${day} ${month} ${year}`
}