export const desk = {
  project: "File issue 666",
  closesWhen: "Mira has the street back",
  crew: [
    {
      id: "mira",
      name: "Mira",
      lane: "Dispatch",
      passesTo: "ilse",
      still: "/images/mira.jpg",
    },
    {
      id: "ilse",
      name: "Ilse",
      lane: "Cold chain",
      passesTo: "luz",
      still: "/images/ilse.jpg",
    },
    {
      id: "luz",
      name: "Luz",
      lane: "Walls",
      passesTo: "nia",
      still: "/images/luz.jpg",
    },
    {
      id: "nia",
      name: "Nia",
      lane: "Floor",
      passesTo: "mira",
      still: "/images/nia.jpg",
    },
  ],
  handoffs: [
    {
      owner: "mira",
      title: "Mira opens the line",
      detail: "Carrera, phone, boba, the red light. She passes the clock to Ilse.",
    },
    {
      owner: "ilse",
      title: "Ilse closes the cooler",
      detail: "Two hearts, one lid, the slip. She passes it to Luz.",
    },
    {
      owner: "luz",
      title: "Luz marks the wall",
      detail: "New can, fog, 666 on the brick. She passes the wall to Nia.",
    },
    {
      owner: "nia",
      title: "Nia works Valley Boulevard",
      detail: "Aisle, Escalade across from the bowl, the hundred, the boombox. She passes the street back to Mira.",
    },
  ],
};

export default function handler(_request, response) {
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("cache-control", "public, max-age=60");
  response.status(200).json(desk);
}
