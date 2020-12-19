type SVGPuntuationProps = {
  type: "add" | "remove";
};

export const SVGPuntuation = ({ type }: SVGPuntuationProps) => {
  switch (type) {
    case "add":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      );

    case "remove":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M19 13H5v-2h14v2z" />
        </svg>
      );

    default:
      return <></>;
  }
};
