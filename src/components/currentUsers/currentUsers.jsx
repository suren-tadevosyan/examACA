import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "../../redux/slices/userSlices";

const CurrentUser = (onUpdate) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log({ currentUser });
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5001/users");
      dispatch(setAllUsers(data));
    };
    fetchData();
  }, [onUpdate]);
  return (
    <div>
      {currentUser && (
        <p>
          welcome to our page <br />
          {currentUser}
        </p>
      )}
    </div>
  );
};

export default CurrentUser;
