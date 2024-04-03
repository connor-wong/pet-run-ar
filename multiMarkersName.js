let markersURLArray = [];
let markersNameArray = [];

const POSTER_ARRAY = ["cover", "1", "2", "3", "4", "5", "qr"];

AFRAME.registerComponent("markers_start", {
  init: function () {
    // console.log("Add markers to the scene");

    let sceneEl = document.querySelector("a-scene");

    // List of the markers
    for (let i = 1; i < 8; i++) {
      let url = "markers/patt/pattern-" + i + ".patt";

      markersURLArray.push(url);
      markersNameArray.push("Marker_" + i);
      console.log(url);
    }

    for (let k = 0; k < 7; k++) {
      let markerEl = document.createElement("a-marker");
      markerEl.setAttribute("type", "pattern");
      markerEl.setAttribute("url", markersURLArray[k]);
      markerEl.setAttribute("id", markersNameArray[k]);

      markerEl.setAttribute("registerevents", "");
      sceneEl.appendChild(markerEl);

      // Adding text to each marker
      // let textEl = document.createElement("a-entity");

      // textEl.setAttribute("id", "text");
      // textEl.setAttribute("text", {
      //   color: "red",
      //   align: "center",
      //   value: markersNameArray[k],
      //   width: "5.5",
      // });
      // textEl.object3D.position.set(0, 0.7, 0);
      // textEl.object3D.rotation.set(-90, 0, 0);

      // Add image to each marker
      let imageEL = document.createElement("a-image");
      imageEL.setAttribute("src", `asset/${POSTER_ARRAY[k]}.jpeg`);
      imageEL.setAttribute("rotation", "-90 0 0");
      imageEL.setAttribute("width", "2");
      imageEL.setAttribute("height", "2");

      // markerEl.appendChild(textEl);
      markerEl.appendChild(imageEL);
    }
  },
});

// Detect marker found and lost
// AFRAME.registerComponent("registerevents", {
//   init: function () {
//     const marker = this.el;

//     marker.addEventListener("markerFound", () => {
//       let markerId = marker.id;
//       console.log("Marker Found: ", markerId);
//     });

//     marker.addEventListener("markerLost", () => {
//       let markerId = marker.id;
//       console.log("Marker Lost: ", markerId);
//     });
//   },
// });
