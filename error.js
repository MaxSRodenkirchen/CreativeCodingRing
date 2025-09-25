for (let i = 0; i < content.length; i++) {
    if (content[i].tags.length === 0) {
        console.error("If you don't tag it we won't find:", content[i].title);
    } else if (!Array.isArray(content[i].tags)) {
        console.error("Please put your tag in an array at:", content[i].title);
    }

    for (let k = 0; k < content[i].tags.length; k++) {
        let correctTag = false;
        for (let j = 0; j < tags[0].length; j++) {
            if (content[i].tags[k].toLowerCase() === tags[0][j].toLowerCase()) {
                correctTag = true;
            }
        }
        if (correctTag == false) {
            console.error("You have a typo or a wrong tag at:", content[i].title + ": " + content[i].tags[k]);
        }
    }
}