declare module "styled-components";

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
