export interface StoryMilestone {
  id: string;
  title: string;
  date: string;
  text: string;
  image?: string; // Optional path for user photos, e.g., "/images/story-1.jpg"
  fallbackIcon?: string; // Fallback representation if no image is present
}

export interface ReasonToLove {
  id: string;
  title: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  url: string; // E.g., "/images/gallery-1.jpg" or a default romantic illustration path
  caption: string;
  rotation: number; // Slight rotation angle for Polaroid styling
}

export interface BirthdayWish {
  id: string;
  text: string;
}

export const storyMilestones: StoryMilestone[] = [
  {
    id: "milestone-1",
    title: "El Comienzo",
    date: "El primer día",
    text: "Todo empezó como un susurro, una mirada casual que se convirtió en el inicio de mi mundo entero. Recuerdo perfectamente ese primer momento en el que nuestras vidas se cruzaron.",
    fallbackIcon: "✨"
  },
  {
    id: "milestone-2",
    title: "Nuestra Primera Cita",
    date: "Un día inolvidable",
    text: "Los nervios a flor de piel, las risas tímidas y esa sensación de que el tiempo se detenía a nuestro alrededor. Supe desde ese instante que eras alguien sumamente especial y diferente a todos.",
    fallbackIcon: "☕"
  },
  {
    id: "milestone-3",
    title: "Hoy y Siempre",
    date: "Nuestro presente",
    text: "Cada día a tu lado es un regalo maravilloso. Eres mi compañera de aventuras, mi confidente, mi mejor amiga y el amor de mi vida. Brindo por cada momento que compartimos y por los que vendrán.",
    fallbackIcon: "🌹"
  }
];

export const reasonsToLove: ReasonToLove[] = [
  {
    id: "reason-1",
    title: "Tu Sonrisa",
    description: "Tiene el poder de iluminar hasta mi día más gris. Ver tu sonrisa sincera y feliz es mi mayor recompensa."
  },
  {
    id: "reason-2",
    title: "Tu Fuerza y Determinación",
    description: "Admiro enormemente tu valentía para enfrentar los retos y cómo persigues tus sueños con tanta pasión y constancia."
  },
  {
    id: "reason-3",
    title: "Tu Ternura",
    description: "La forma en la que cuidas a los que quieres y el gran corazón que tienes te hacen una persona increíblemente hermosa."
  },
  {
    id: "reason-4",
    title: "Tus Detalles Únicos",
    description: "Esas pequeñas manías tuyas, tus risas espontáneas y los gestos cotidianos que hacen que cada día contigo sea único."
  },
  {
    id: "reason-5",
    title: "Tu Apoyo Incondicional",
    description: "Saber que estás ahí para mí, así como yo lo estoy para ti, me da una tranquilidad y fuerza inmensas."
  },
  {
    id: "reason-6",
    title: "Nuestra Complicidad",
    description: "Cómo podemos hablar durante horas o estar en total silencio y aun así entendernos perfectamente con una sola mirada."
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    url: "/images/garden.jpg",
    caption: "Nuestro jardín de recuerdos",
    rotation: -4
  },
  {
    id: "photo-2",
    url: "/images/stargazing.jpg",
    caption: "Mirando el futuro juntos",
    rotation: 3
  },
  {
    id: "photo-3",
    url: "/images/bees.jpg",
    caption: "Siempre revoloteando cerca",
    rotation: -2
  },
  {
    id: "photo-4",
    url: "/images/origami.jpg",
    caption: "Detalles que duran para siempre",
    rotation: 5
  }
];

export const birthdayWishes: BirthdayWish[] = [
  {
    id: "wish-1",
    text: "Que nunca dejes de sonreír, porque tu sonrisa ilumina hasta mis días más oscuros."
  },
  {
    id: "wish-2",
    text: "Que todos tus sueños, por muy grandes que sean, se hagan realidad."
  },
  {
    id: "wish-3",
    text: "Que siempre te sientas tan amada como lo eres en este preciso momento."
  },
  {
    id: "wish-4",
    text: "Que este nuevo año de vida te traiga aventuras infinitas y mucha paz."
  }
];
