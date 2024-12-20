function toggleContent(index) {
    const contentText = [
        "Christmas is celebrated annually on December 25th to honor the birth of Jesus Christ. The holiday has its roots in both religious traditions and ancient winter solstice celebrations. Over time, Christmas merged with various cultural practices, becoming the festive occasion we know today. Initially, Christians celebrated the birth of Jesus with a solemn religious observance. However, as Christianity spread across the Roman Empire, Christmas began to incorporate elements from other ancient winter festivals, including the Roman festival of Saturnalia and the Norse Yule traditions.",
        "Over the centuries, many customs and traditions associated with Christmas have evolved. One of the most significant changes occurred in the 19th century with the introduction of the Christmas tree, which became a widespread symbol of the season. The figure of Santa Claus, derived from the Dutch legend of Sinterklaas, became an essential part of Christmas celebrations. The modern image of Santa Claus, with his red suit and jolly demeanor, was popularized in the United States through the work of Coca-Cola in the 1930s.",
        "Christmas is celebrated around the world in various ways, blending local customs with traditional Christian observances. In the United States, Christmas is marked by family gatherings, gift exchanges, and the decoration of Christmas trees. In other countries, such as Mexico and Spain, Christmas is celebrated with elaborate feasts, parades, and nativity scenes. In places like the Philippines, Christmas is one of the longest celebrations, often beginning in September and continuing through January."
    ];

    const contentBox = document.getElementById('content-box');
    const contentTextElement = document.getElementById('content-text');
    const backgroundOverlay = document.getElementById('background-overlay');
    
    // Set the content based on the index
    contentTextElement.textContent = contentText[index];
    
    // Show the content box and the background overlay
    contentBox.style.display = 'block';
    backgroundOverlay.style.display = 'block';
}

function closeContent() {
    // Hide the content box and the background overlay
    document.getElementById('content-box').style.display = 'none';
    document.getElementById('background-overlay').style.display = 'none';
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-btn');

    if (audioPlayer.paused) {
        audioPlayer.play();               // Play the music if it's paused
        playPauseButton.textContent = 'Pause Music';  // Change button text to "Pause Music"
    } else {
        audioPlayer.pause();              // Pause the music if it's playing
        playPauseButton.textContent = 'Play Music';   // Change button text to "Play Music"
    }
}

// Function to generate a snowflake
function generateSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Randomize the snowflake's position and animation speed
    snowflake.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 3 + "s"; // Random speed between 3s and 6s
    snowflake.style.animationDelay = Math.random() * 5 + "s"; // Random delay before starting to fall

    // Randomize the size of the snowflake
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Random size between 10px and 20px

    // Create the snowflake shape (you can use any symbol you want)
    snowflake.innerHTML = "❄";  // You can use other symbols for snowflakes, e.g., "❅"

    // Append the snowflake to the body
    document.body.appendChild(snowflake);

    // Remove the snowflake after it falls off the screen to avoid clutter
    setTimeout(() => {
        snowflake.remove();
    }, 7000); // Remove snowflake after 7 seconds
}

// Generate snowflakes continuously
setInterval(generateSnowflake, 100); // Generate a new snowflake every 100ms

// Function to calculate days, hours, and minutes until Christmas
function timeUntilChristmas() {
    const today = new Date(); // Current date
    const christmas = new Date(today.getFullYear(), 11, 25, 0, 0, 0); // Christmas date (December 25th, midnight)

    // If Christmas has already passed this year, set the year to the next one
    if (today > christmas) {
        christmas.setFullYear(today.getFullYear() + 1);
    }

    // Calculate the time difference in milliseconds
    const timeDifference = christmas - today;

    // Convert the time difference to days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
}

// Display the result in an element with the id 'time-until-christmas'
document.addEventListener("DOMContentLoaded", function() {
    const timeElement = document.getElementById('time-until-christmas');
    if (timeElement) {
        const { days, hours, minutes } = timeUntilChristmas();
        timeElement.textContent = `Only ${days} days, ${hours} hours, and ${minutes} minutes left until Christmas!`;
    }
});
