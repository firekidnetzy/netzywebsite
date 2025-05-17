
// Profile Picture Upload
function uploadProfilePic() {
    let fileInput = document.getElementById("uploadPic");
    let profilePic = document.getElementById("profilePic");

    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
            localStorage.setItem("profilePic", e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Load saved profile picture when the page loads
document.addEventListener("DOMContentLoaded", function () {
    let savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
        document.getElementById("profilePic").src = savedPic;
    }
});

// Comment System
function postComment() {
    let commentText = document.getElementById("commentInput").value;
    if (commentText.trim() !== "") {
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = commentText;

        // Create Reply Button
        let replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        replyButton.onclick = function () {
            addReplyField(commentDiv);
        };

        // Create Delete Button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            commentDiv.remove();
        };

        commentDiv.appendChild(replyButton);
        commentDiv.appendChild(deleteButton);
        document.getElementById("comments").appendChild(commentDiv);
        document.getElementById("commentInput").value = ""; // Clear input
    }
}

// Reply Function
function addReplyField(commentDiv) {
    let replyInput = document.createElement("textarea");
    replyInput.placeholder = "Type your reply...";

    let postReplyButton = document.createElement("button");
    postReplyButton.textContent = "Post Reply";
    postReplyButton.onclick = function () {
        let replyText = replyInput.value;
        if (replyText.trim() !== "") {
            let replyDiv = document.createElement("div");
            replyDiv.classList.add("reply");
            replyDiv.textContent = replyText;
            commentDiv.appendChild(replyDiv);
            replyInput.remove();
            postReplyButton.remove();
        }
    };

    commentDiv.appendChild(replyInput);
    commentDiv.appendChild(postReplyButton);
}


