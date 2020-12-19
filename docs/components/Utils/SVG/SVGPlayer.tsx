type SVGPlayerProps = {
  type: "play" | "stop" | "pause";
};

export const SVGPlayer = ({ type }: SVGPlayerProps) => {
  switch (type) {
    case "play":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      );

    case "pause":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      );

    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      );
  }
};
