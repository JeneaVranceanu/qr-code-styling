interface UnknownObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
type Extension = "png" | "jpeg" | "webp";

interface DotTypes {
  [key: string]: DotType;
}