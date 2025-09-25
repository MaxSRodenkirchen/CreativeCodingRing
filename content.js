var tags = [
    ["Start", "Tools", "Definitions", "Functions", "Showcase", "TEeeeeesting", "HELLO WORLD"], //Tags you can use
    []
];
for (let j = 0; j < tags[0].length; j++) {
    if (!tags[1][j]) {
        tags[1][j] = [];
    }
}


var content = [{
        title: "Creative Coding als Schule des Denkens",
        subtitle: "Masterarbeit von Tim Rodenbröker",
        url: "https://master.timrodenbroeker.de/",
        img: "https://master.timrodenbroeker.de/media/tim4.jpg",
        tags: ["Definitions"]
    },
    {
        title: "p5.js",
        subtitle: "Tool für kreatives Programmieren",
        url: "https://p5js.org/",
        img: "https://p5js.org/_astro/2019_17.Bi1ZtvfA_Z2uERRG.webp",
        tags: ["tools", "start"]
    },
    {
        title: "public class Graphic_Design implements Code { // Yes, but how? }",
        subtitle: "an investigation towards bespoke Creative Coding programming courses in graphic design education",
        url: "https://stigmollerhansen.dk/resume/phd-dissertation/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cI14Cf66AzMNcTr_HqHVtQSZDwFk9DYhcw&s",
        tags: ["definitions"]
    },
    {
        title: "Hydra",
        subtitle: "A livecoding environment for shader graphics",
        url: "https://hydra.ojack.xyz/?sketch_id=example_13",
        img: "https://ojack.xyz/work/hydra/thumb.png",
        tags: ["tools"]
    }
];