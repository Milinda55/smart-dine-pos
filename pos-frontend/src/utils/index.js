export const getBgColor = () => {
    const bgClr = ["#b73434", "#025cca", "#f6b100", "#7f167f", "#02ca3a", "#f68100", "#025cca", "#02ca3a", "#f68100"];
    const randomBg = Math.floor(Math.random() * bgClr.length);
    const color = bgClr[randomBg];
    return color;
}