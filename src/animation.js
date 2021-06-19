export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export const slideRightAnim = {
  hidden: { x: -200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
}
export const slideAnim = {
  hidden: { x: -200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
      delay: 1,
    },
  },
}
export const slideLeftAnim = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
      delay: 1,
    },
  },
}
