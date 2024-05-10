import { Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <Blocks
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
  );
}
