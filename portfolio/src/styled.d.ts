import "styled-components";
import { Theme } from "./utils/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
