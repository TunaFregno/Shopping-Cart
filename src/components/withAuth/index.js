import { useSelector } from "react-redux";
import Login from '../withAuth';

export const withAuth = (WrapperComponent) => {
  return (props) => {
    // console.log('withAuth props', props)
    const token = useSelector((state) => state.token)

    if (token) {
      return <WrapperComponent />
    } else {
      props.history.push(<Login />);
      return null;
    }
  }
}

export default withAuth;
