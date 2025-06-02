export const getBgColor = () => {
    const bgClr = ["#b73434", "#025cca", "#f6b100", "#7f167f", "#02ca3a", "#f68100", "#025cca", "#02ca3a", "#f68100"];
    const randomBg = Math.floor(Math.random() * bgClr.length);
    const color = bgClr[randomBg];
    return color;
}

export const getAvatarName = (name) => {
    if (!name) return "";

    return name.split(" ").map(n => n[0]).join("").toUpperCase();
}

export const formatDate = (date) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`
};