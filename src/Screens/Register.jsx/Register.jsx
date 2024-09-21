import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { Tabs, Tab, Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { UserContex } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [register_email, setregister_Email] = useState("");
  let [register_password, setregister_Password] = useState("");
  let [register_fullName, setregister_FullName] = useState("");

  let [login_email, setlogin_Email] = useState("");
  let [login_password, setlogin_Password] = useState("");

  let { isUser, setIsUser } = useContext(UserContex);

  let navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      navigate("/");
    } else {
      navigate("/register")
    }
  });

  const [selected, setSelected] = React.useState("login");

  const [isVisible, setIsVisible] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  function registerUser() {
    createUserWithEmailAndPassword(auth, register_email, register_password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed up", user);

        setregister_Email("");
        setregister_FullName("");
        setregister_Password("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function loginUser() {
    signInWithEmailAndPassword(auth, login_email, login_password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in", user);
        setlogin_Email("");
        setlogin_Password("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center flex-col flex-wrap gap-3">
        <h1 className="text-7xl font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
            Twitter.
          </span>
        </h1>

        <Button
          variant="shadow"
          color="primary"
          onPress={() => handleOpen("blur")}
          className="capitalize text-2xl p-8"
        >
          Register Your Self
        </Button>
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex items-center justify-center  flex-col w-full">
                <Card className="max-w-full w-[400px] h-[400px] mt-14">
                  <CardBody className="overflow-hidden">
                    <Tabs
                      fullWidth
                      size="md"
                      aria-label="Tabs form"
                      selectedKey={selected}
                      onSelectionChange={setSelected}
                    >
                      <Tab key="login" title="Login">
                        <form className="flex flex-col gap-4">
                          <Input
                            isRequired
                            value={login_email}
                            onChange={(e) => setlogin_Email(e.target.value)}
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                          />
                          <Input
                            isRequired
                            value={login_password}
                            onChange={(e) => setlogin_Password(e.target.value)}
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                          />
                          <p className="text-center text-small">
                            Need to create an account?{" "}
                            <Link
                              size="sm"
                              onPress={() => setSelected("sign-up")}
                            >
                              Sign up
                            </Link>
                          </p>
                          <div className="flex gap-2 justify-end">
                            <Button
                              onClick={loginUser}
                              fullWidth
                              color="primary"
                            >
                              Login
                            </Button>
                          </div>
                        </form>
                      </Tab>
                      <Tab key="sign-up" title="Sign up">
                        <form className="flex flex-col gap-4 h-[300px]">
                          <Input
                            isRequired
                            value={register_fullName}
                            onChange={(e) =>
                              setregister_FullName(e.target.value)
                            }
                            label="Name"
                            placeholder="Enter your name"
                            type="text"
                          />
                          <Input
                            isRequired
                            value={register_email}
                            onChange={(e) => setregister_Email(e.target.value)}
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                          />
                          <Input
                            isRequired
                            value={register_password}
                            onChange={(e) =>
                              setregister_Password(e.target.value)
                            }
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                          />
                          <p className="text-center text-small">
                            Already have an account?{" "}
                            <Link
                              size="sm"
                              onPress={() => setSelected("login")}
                            >
                              Login
                            </Link>
                          </p>
                          <div className="flex gap-2 justify-end">
                            <Button
                              onClick={registerUser}
                              fullWidth
                              color="primary"
                            >
                              Sign up
                            </Button>
                          </div>
                        </form>
                      </Tab>
                    </Tabs>
                  </CardBody>
                </Card>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
