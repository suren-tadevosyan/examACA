import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CurrentUsers = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log({ currentUser });
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5001/users");
      // console.log(data.data.users);
    };
    fetchData();
  }, []);
  return <div>{currentUser && <p>{currentUser}</p>}</div>;
};

export default CurrentUsers;
