import { Formik} from "formik";
import { Pressable } from "react-native";
import { View } from "react-native-web";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
const initialValues = {
  username: "",
  password: "",
};
const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
      <Pressable onPress={onSubmit}>
        <Text>login</Text>
      </Pressable>
    </View>
  );
};
const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;
    console.log("username", username);
    console.log("password", password);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
export default SignIn;
