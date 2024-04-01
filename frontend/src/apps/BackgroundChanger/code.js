function upload() {
    const formData = new FormData();
    const fileImg = document.getElementById("id_img").files[0];
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        console.error("User not found in localStorage");
        return;
    }

    formData.append("user", JSON.stringify(user));
    formData.append("file", fileImg);

    request("POST", "http://localhost:3000/user/bg", formData);
}

async function request(method, url, formData) {
    try {
        const options = {
            method: method,
            body: formData,
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error:", error);
    }
}

function showFileName(input) {
    const fileName = input.files[0].name;
    document.getElementById("id_fileName").textContent = fileName;
}
