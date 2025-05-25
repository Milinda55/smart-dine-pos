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