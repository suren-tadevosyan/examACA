import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../utils/button";
import "./form.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlices";

const Form = ({ handleClose }) => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post("http://localhost:5001", values);
        handleClose();
        console.log(response.data.user);
        dispatch(addUser(response.data.user));
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="formField">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error"> {formik.errors.email} </div>
          ) : null}
        </div>
        <div>
          <Button type="submit" value="Send data" className={"send"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
