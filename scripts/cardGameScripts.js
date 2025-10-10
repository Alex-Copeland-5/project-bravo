// https://coderscratchpad.com/drag-and-drop-functionality-with-jquery-ui/

function easterEgg() {
  console.log("Match the emojis to the description.");
}
easterEgg();

// Store the number of correct matches
let correctMatches = 0;
// Keep a copy of the original left side items so reset can randomize them
let originalItemsHTML = "";
// Score counter
let score = 0;

$(function () {
  // Make draggables
  $(".draggable").draggable({
    revert: "invalid",
  });

  // Store original items markup after draggables are initialized
  originalItemsHTML = $("#items").html();

  // Apple target
  $("#target-apple").droppable({
    accept: "#draggable-apple",
    hoverClass: "hovered",
    drop: function (event, ui) {
      $(this).addClass("correct").html("");
      ui.draggable.appendTo(this).css({ top: 0, left: 0, position: "relative" });
      correctMatches++;
      checkWinCondition();
    },
  });

  // Dog target
  $("#target-dog").droppable({
    accept: "#draggable-dog",
    hoverClass: "hovered",
    drop: function (event, ui) {
      $(this).addClass("correct").html("");
      ui.draggable.appendTo(this).css({ top: 0, left: 0, position: "relative" });
      correctMatches++;
      checkWinCondition();
    },
  });

  // Ball target
  $("#target-ball").droppable({
    accept: "#draggable-ball",
    hoverClass: "hovered",
    drop: function (event, ui) {
      $(this).addClass("correct").html("");
      ui.draggable.appendTo(this).css({ top: 0, left: 0, position: "relative" });
      correctMatches++;
      checkWinCondition();
    },
  });

  // Music target
  $("#target-music").droppable({
    accept: "#draggable-music",
    hoverClass: "hovered",
    drop: function (event, ui) {
      $(this).addClass("correct").html("");
      ui.draggable.appendTo(this).css({ top: 0, left: 0, position: "relative" });
      correctMatches++;
      checkWinCondition();
    },
  });
});

function checkWinCondition() {
  const msg = document.getElementById("message");
  if (correctMatches === 4) {
    if (msg) {
      msg.textContent = "Congratulations! You've matched all items correctly!";
      msg.classList.add("show");
    }
    // after a short delay, reset the game and shuffle left items
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
}

// Shuffle using Array.sort (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
function shuffleLeft_simple() {
  const parent = $("#items");
  const children = parent.children().get();
  // Random sort using Math.random (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
  // Random sort (https://www.geeksforgeeks.org/javascript/how-to-shuffle-an-array-using-javascript/)
  children.sort(() => Math.random() - 0.5);
  parent.append(children);
}
// I can not get this shuffle to work. Game broke :(

// Restore targets and draggables, then shuffle left items
function resetGame() {
  correctMatches = 0;
  // restore target labels and remove correct flag
  $("#target-apple").removeClass("correct").text("Fruit");
  $("#target-dog").removeClass("correct").text("Animal");
  $("#target-ball").removeClass("correct").text("Sport");
  $("#target-music").removeClass("correct").text("Sound");

  // Restore original markup for items (ensures any moved nodes are returned)
  if (originalItemsHTML) {
    $("#items").html(originalItemsHTML);
    // Reassign draggables
    // Self note: This is the only fix I have found that works to make the items draggable again after reset
    $(".draggable").draggable({
      revert: "invalid",
      start: function () {
        $(".target-labels").addClass("highlight");
      },
      stop: function () {
        $(".target-labels").removeClass("highlight");
      },
    });
  }

  // Shuffle left items
  shuffleLeft_simple();

  // Hide message box if present
  $("#message").removeClass("show").text("");
  // increment score (reset counter) and update scoreboard in index.html
  score++;
  $("#score-count").text(score);
}


// Cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

checkCookie();