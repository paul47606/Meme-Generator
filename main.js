document.addEventListener("DOMContentLoaded", () => {
    const generateMemeBtn = document.querySelector(".generate_name_btn");
    const memeImage = document.querySelector(".meme_generator img");
    const memeTitle = document.querySelector(".meme_generator .meme_title");
    const memeAuthor = document.querySelector(".meme_generator .meme_author");

    const updateDetails = (url, title, author) => {
        memeImage.setAttribute("src", url);
        memeTitle.innerHTML = title;
        memeAuthor.innerHTML = author;
    };

    const generateMeme = () => {
        fetch("http://meme-api.com/gimme")
            .then(response => response.json())
            .then(data => {
                updateDetails(data.url, data.title, data.author);
            })
            .catch(error => {
                console.error("Error fetching meme:", error);
            });
    };

    generateMemeBtn.addEventListener("click", generateMeme);
});
