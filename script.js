document.addEventListener("DOMContentLoaded", function () {
  const target_0 = document.querySelector("#target0");
  const target_1 = document.querySelector("#target1");

  const videoControls = document.getElementById("videoControls");
  const videoControls2 = document.getElementById("videoControls2");

  // detect target found
  target_0.addEventListener("targetFound", (event) => {
    console.log("target found");
    handleTargetFound(videoControls);
  });
  target_1.addEventListener("targetFound", (event) => {
    console.log("target found");
    handleTargetFound(videoControls2);
  });

  // detect target lost
  target_0.addEventListener("targetLost", (event) => {
    console.log("target lost");
    handleTargetLost(videoControls);
  });
  target_1.addEventListener("targetLost", (event) => {
    console.log("target lost");
    handleTargetLost(videoControls2);
  });
});

AFRAME.registerComponent("play-pause", {
  init: function () {
    //var myVid = document.querySelector("#videoAlta");
    this.el.addEventListener("click", function () {
      handlePlayButtonClicked(videoControls);
    });
  },
});
AFRAME.registerComponent("play-pause2", {
  init: function () {
    this.el.addEventListener("click", function () {
      handlePlayButtonClicked(videoControls2);
    });
  },
});

// Event for touch button target 1
AFRAME.registerComponent("display_fullimage", {
  init: function () {
    this.el.addEventListener("click", function () {
      handleFullScreen();
    });
  },
});
// Event for touch button target 2
AFRAME.registerComponent("display_fullimage2", {
  init: function () {
    this.el.addEventListener("click", function () {
      handleFullScreen();
    });
  },
});

function exitFullScreen() {
  console.log("exitFullScreen");
  var fullImage = document.getElementById("fullImg");
  fullImage.removeAttribute("style");
  fullImage.setAttribute("style", "display: none;");
}
function handlePlayButtonClicked(videoControl) {
  var myVid = document.querySelector("#videoAlta");
  if (myVid.paused) {
    myVid.play();
    videoControl.setAttribute("src", "#pauseButton");
  } else {
    myVid.pause();
    videoControl.setAttribute("src", "#playButton");
  }
}

function handlePlayPauseOnDiv() {
  var myVid = document.querySelector("#videoAlta");
  var divPlayBtn = document.getElementById("divPlayBtn");
  console.log("divPlayBtn", divPlayBtn);
  if (myVid.paused) {
    myVid.play();
    divPlayBtn.style.backgroundImage = "url(./pause-icon-small.png)";

    //videoControl.setAttribute("src", "#pauseButton");
  } else {
    myVid.pause();
    divPlayBtn.style.backgroundImage = "url(./play-button-small.png)";
    //videoControl.setAttribute("src", "#playButton");
  }
  console.log("divPlayBtn", divPlayBtn);
}

function handleFullScreen() {
  var fullImage = document.getElementById("fullImg");
  fullImage.removeAttribute("style");
  fullImage.setAttribute("style", "display: inline;");
  console.log("fullImage", fullImage);
  console.log("touch");
}

function handleTargetLost(videoControls) {
  var myVid = document.querySelector("#videoAlta");
  myVid.pause();
  if (myVid.paused) {
    videoControls.setAttribute("src", "#playButton");
  } else {
    videoControls.setAttribute("src", "#pauseButton");
  }
}

function handleTargetFound(videoControl) {
  var myVid = document.querySelector("#videoAlta");
  var divPlayBtn = document.getElementById("divPlayBtn");
  myVid.play();

  if (myVid.paused) {
    videoControl.setAttribute("src", "#playButton");
    divPlayBtn.style.backgroundImage = "url(./play-button-small.png)";
  } else {
    videoControl.setAttribute("src", "#pauseButton");

    divPlayBtn.style.backgroundImage = "url(./pause-icon-small.png)";
  }
}
