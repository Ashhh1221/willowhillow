const works = [
  {
    id: "stillness",
    title: "Stillness",
    image: "gallery/F2.jpg",
    alt: "A figure seen from behind in a quiet interior",
    lede: "A pause before the next moment.",
    description:
      "A figure faces away from the viewer. The simple backdrop and soft tonal changes leave room to notice posture, texture, and the stillness of the scene.",
    story:
      "The figure stands close to an unadorned wall, turned away from the camera. Nothing in the frame tells us what happened before or what comes next. That open space invites the viewer to imagine a moment of reflection."
  },
  {
    id: "open-air",
    title: "Open Air",
    image: "gallery/P14.jpg",
    alt: "A distant figure in an open landscape",
    lede: "The horizon gives the figure room to breathe.",
    description:
      "One small figure stands against a broad, pale landscape. Distance changes the scale of the moment, turning a gesture into the center of the composition.",
    story:
      "A lone figure crosses an almost empty horizon with both arms extended. The surrounding space makes a small gesture feel expansive, as though the landscape has briefly become part of the movement."
  },
  {
    id: "afternoon",
    title: "Afternoon",
    image: "gallery/P20.jpg",
    alt: "A portrait in soft window light",
    lede: "Window light settles across a quiet interior.",
    description:
      "A reclining portrait shaped by shadow and daylight. The frame holds a private, unhurried moment without asking the subject to meet our gaze.",
    story:
      "A person rests beside a window while daylight reaches into the room. The scene feels suspended in the middle of an ordinary afternoon, when light can make a familiar place feel newly observed."
  },
  {
    id: "passage",
    title: "Passage",
    image: "gallery/P21.jpg",
    alt: "A figure walking beside a modern building",
    lede: "A moving figure meets a fixed architectural line.",
    description:
      "Light cuts across the building as a figure passes through the frame. The image balances the geometry of the space with a brief human presence.",
    story:
      "Past the little 'tickets' sign, the night carried that warm, half-dreaming hush you only find when time slows down. The carousel spun like a song from years ago, golden and tender, while the Ferris wheel rose high into the dark like a quiet wish. I took the shot because the warmth in the frame felt like a memory already beginning to miss itself—something fragile I wanted to keep."
  },
  {
    id: "gesture",
    title: "Gesture",
    image: "gallery/P5.jpg",
    alt: "Hands and fabric in shadow",
    lede: "A small movement becomes a landscape of texture.",
    description:
      "Hands, folds of fabric, and shadow fill the image. Without a wider setting, the viewer can linger on form and the quiet language of gesture.",
    story:
      "The frame draws close to hands gathered over fabric. With the face and setting out of view, the smallest gesture carries the scene. Light and shadow make the folds feel almost like a landscape."
  },
  {
    id: "elsewhere",
    title: "Elsewhere",
    image: "gallery/ret 3.jpg",
    alt: "A side profile outdoors in the wind",
    lede: "A portrait turned toward the distance.",
    description:
      "The wind moves through the subject’s hair while the landscape falls softly behind. The image holds a moment between attention and departure.",
    story:
      "Wind crosses the subject’s face as they look beyond the edge of the frame. The distant hills remain soft and indistinct. The image leaves the destination unknown and holds only the act of looking."
  }
];

const requestedId = new URLSearchParams(window.location.search).get("id");
const foundIndex = works.findIndex((work) => work.id === requestedId);
const currentIndex = foundIndex >= 0 ? foundIndex : 0;
const currentWork = works[currentIndex];

document.title = `${currentWork.title} — Willowfellow`;

const image = document.querySelector("#work-image");
image.src = currentWork.image;
image.alt = currentWork.alt;

document.querySelector("#work-title").textContent = currentWork.title;
document.querySelector("#work-lede").textContent = currentWork.lede;
document.querySelector("#work-description").textContent = currentWork.description;
document.querySelector("#work-story").textContent = currentWork.story;

document.querySelector(".work-number").textContent =
  `${String(currentIndex + 1).padStart(2, "0")} / ${String(works.length).padStart(2, "0")}`;

document.querySelector("#work-number-fact").textContent =
  String(currentIndex + 1).padStart(2, "0");

document.querySelector("#work-figcaption").textContent =
  `${currentWork.title} / Collection 01`;

const previous = works[(currentIndex - 1 + works.length) % works.length];
const next = works[(currentIndex + 1) % works.length];

const previousLink = document.querySelector("#previous-work");
previousLink.href = `work.html?id=${previous.id}`;
previousLink.textContent = `← ${previous.title}`;

const nextLink = document.querySelector("#next-work");
nextLink.href = `work.html?id=${next.id}`;
nextLink.textContent = `${next.title} →`;