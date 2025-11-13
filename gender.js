/* 
    0 = geslacht is niet gekend
    1 = man
    2 = vrouw
    3 = x
    9 = niet van toepassing 
    */

    let genderCode = 0;
    let message = "";
    let color = "";

    if (gznderCode = 0) {
        message = "Je geslacht is niet gekend."
        color = "grey"
    } else if (genderCode = 1) {
        message = "Je bent een man."
        color = "blue"
    } else if (genderCode = 2) {
        message = "Je bent een vrouw."
        color = "pink"
    } else if (genderCode = 3) {
        message = "Je bent non-binair."
        color = "orange"
    } else if ( genderCode = 9) {
        message = "Je hebt geen geslacht."
        color = "white"
    } else {
        message = "Dit cijfer kent geen geslachtcode."
        color = "black"
    };

    console.log(
        message,
        `background-color: ${color}`
    );