import { TailSpin } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <>
      <TailSpin
        height="30"
        width="30"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};