import { FunctionComponent, ReactChild } from "react";

interface ILoadingProps {
    loading: boolean
    children: ReactChild[]
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props;

  if (loading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return <div>{ props.children }</div>;
};
export default Loading;
