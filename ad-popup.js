document.addEventListener("DOMContentLoaded", function() {
 
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .floating-invite {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 120px;
            height: 120px;
            background-color: #f1f1f1;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
            animation: float 3s ease-in-out infinite;
        }
        .floating-invite img {
            width: 8em;
            height: 7em;
            border-radius: 13%;
            margin-bottom: 1px;
        }
        div {
            flex-wrap: wrap-reverse;
        }
        .close-btn {
            position: absolute;
            bottom: 138px;
            right: 22px;
            cursor: pointer;
        }
        .floating-invite-link {
            text-decoration: none;
            color: inherit; /* Inherits the text color of parent elements */
        }
    `;
    document.head.appendChild(style);

    const floatingInviteLink = document.createElement('a');
    floatingInviteLink.href = 'https://app.tronlab.in';
    floatingInviteLink.className = 'floating-invite-link';
    floatingInviteLink.target = '_blank';

    const floatingInvite = document.createElement('div');
    floatingInvite.id = 'floatingInvite';
    floatingInvite.className = 'floating-invite';

    const inviteImage = document.createElement('img');
    inviteImage.src = './purple_running_runner_game.gif';
    inviteImage.alt = 'Play Games & Apps without installation';

    const inviteText = document.createElement('div');
    inviteText.textContent = 'Free Play Games & Apps without installation';

    floatingInvite.appendChild(inviteImage);
    floatingInvite.appendChild(inviteText);

    floatingInviteLink.appendChild(floatingInvite);

    const closeButton = document.createElement('div');
    closeButton.className = 'close-btn';
    closeButton.textContent = 'X';
    closeButton.onclick = function(event) {
        event.stopPropagation();
        document.getElementById('floatingInvite').style.display = 'none';
        closeButton.style.display = 'none';
    };

    document.body.appendChild(floatingInviteLink);
    document.body.appendChild(closeButton);
});
