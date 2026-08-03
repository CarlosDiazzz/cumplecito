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
  title: string;
  text: string;
}

export const storyMilestones: StoryMilestone[] = [
  {
    id: "milestone-1",
    title: "La dinamica grupal",
    date: "La primera vez que te hablé 07 de septiembre del 2024",
    text: "Quien diría que unas simples preguntas para conocernos entre todo el grupo terminaría con esto, yo no sabía que esos sabados serían tan importantes para mi.",
    image: "/images/timeline/dibujitos.jpeg", // Puedes cambiar esta ruta a tu foto en public/images/timeline/
    fallbackIcon: "✨"
  },
  {
    id: "milestone-2",
    title: "La vez que me habia dado cuenta que me gustabas",
    date: "el tiempo libre del 26 de octubre del 2024",
    text: "Un dia que me hizo pensar que me gustabas, ese dia fue como cualquier otro pero no fue así, ese dia mientras trabajamos en una actividad del libro tu te recargaste en mi y subiste tu pierna sobre mi pierna fue tan lindo.",
    image: "/images/timeline/stargazing.jpg", // Puedes cambiar esta ruta a tu foto en public/images/timeline/
    fallbackIcon: "☕"
  },
  {
    id: "milestone-3",
    title: "La cita",
    date: "20 de febrero del 2026 Nuestro presente",
    text: "Que curioso que cuando vuelves a hablarme es para invitarme a salir pero no una salida cualquiera sino para ir a ver therian's. Un poco extraño haciendome pensar que tenias ciertos gustos.",
    image: "/images/timeline/therian.jpeg", // Puedes cambiar esta ruta a tu foto en public/images/timeline/
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
    url: "/images/galeria/lindos.jpeg", // Guarda tus fotos en public/images/galeria/
    caption: "Nuestro jardín de recuerdos",
    rotation: -4
  },
  {
    id: "photo-2",
    url: "/images/galeria/futuro.jpeg",
    caption: "Mirando el futuro juntos",
    rotation: 3
  },
  {
    id: "photo-3",
    url: "/images/galeria/bonita.jpeg",
    caption: "Siempre revoloteando cerca",
    rotation: -2
  },
  {
    id: "photo-4",
    url: "/images/galeria/detalles.jpeg",
    caption: "Detalles que duran para siempre",
    rotation: 5
  }
];

export const birthdayWishes: BirthdayWish[] = [
  {
    id: "wish-1",
    title: "Felicidad",
    text: "Que nunca dejes de sonreír, porque tu sonrisa es lo mas bonito que he visto."
  },
  {
    id: "wish-2",
    title: "Propósito",
    text: "Que todas tus metas y sueños se hagan realidad, y que siempre logres lo que te propongas."
  },
  {
    id: "wish-3",
    title: "Entorno",
    text: "Que siempre estés rodeada de personas que te aman y te respetan."
  },
  {
    id: "wish-4",
    title: "Adversidad",
    text: "Que siempre tengas la fuerza y la determinación para superar cualquier obstáculo que se cruce en tu camino."
  }
];
