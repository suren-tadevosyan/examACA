import { useSelector } from "react-redux";

const CurrentUsers = () => {
  const { users } = useSelector((state) => state.user);
  console.log(users);
  return (
    <div>
      {users.map((user, id) => {
        return (
          <div key={id}>
            {user.name}:::{user.email}
          </div>
        );
      })}
    </div>
  );
};

export default CurrentUsers;
