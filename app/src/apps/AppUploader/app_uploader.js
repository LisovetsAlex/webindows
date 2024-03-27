function upload() {
    const formData = new FormData();
    const fileHTML = document.getElementById("html").files[0];
    const fileJS = document.getElementById("js").files[0];
    const fileCSS = document.getElementById("css").files[0];

    formData.append("html", fileHTML);
    formData.append("js", fileJS);
    formData.append("css", fileCSS);

    sendRequest(
        "http://localhost:3000/upload/app/",
        (data) => {
            console.log(data);
        },
        { body: formData, method: "POST" }
    );
}
