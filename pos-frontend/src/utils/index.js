export const getRandomBG = () => {
    const colors = [
        "#025cca",
        "#f6b100",
        "#02ca3a",
        "#f68100",
    ];

    const color = colors[Math.floor(Math.random() * colors.length)];
    return "bg-[" + color + "]";
}

export const getBgColor = () => {
    const bgClr = ["#b73434", "#025cca", "#f6b100", "#7f167f", "#02ca3a", "#f68100"];
    const randomBg = Math.floor(Math.random() * bgClr.length);
    const color = bgClr[randomBg];
    return color;
}