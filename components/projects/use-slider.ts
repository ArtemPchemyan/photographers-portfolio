import { useRef, useState } from "react";
import { AlbumType } from "@/store/model/photos-projects-store";
import { useTransition } from "@react-spring/web";

export function useSlider(album: AlbumType[], photoId: number) {
  const [activeIndex, setActiveIndex] = useState(photoId);
  const prevIndexRef = useRef(-1);

  const transitions = useTransition(album[activeIndex], {
    from: {
      opacity: 0,
      transform:
        activeIndex > prevIndexRef.current
          ? "translateX(100%)"
          : "translateX(-100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0)",
    },
    leave: {
      opacity: 0,
      transform:
        activeIndex > prevIndexRef.current
          ? "translateX(-100%)"
          : "translateX(100%)",
    },
    config: {
      duration: 300,
    },
    onRest: () => {
      prevIndexRef.current = activeIndex;
    },
  });

  // const onClick = () => setActiveIndex((activeIndex + 1) % 3)

  return { transitions, activeIndex, setActiveIndex };
}
