import React, { useState } from "react";
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

export default function Register() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [fullName, setFullName] = useState("");
  const [selected, setSelected] = React.useState("login");

  const [isVisible, setIsVisible] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="flat"
          color="warning"
          onPress={() => handleOpen("blur")}
          className="capitalize"
        >
          Blur
        </Button>
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
                <div className="flex items-center justify-center h-full flex-col w-full">
                  <Card className="max-w-full w-[400px] h-[450px]">
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
                              label="Email"
                              placeholder="Enter your email"
                              type="email"
                            />
                            <Input
                              isRequired
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
                              <Button fullWidth color="primary">
                                Login
                              </Button>
                            </div>
                          </form>
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                          <form className="flex flex-col gap-4 h-[300px]">
                            <Input
                              isRequired
                              label="Name"
                              placeholder="Enter your name"
                              type="password"
                            />
                            <Input
                              isRequired
                              label="Email"
                              placeholder="Enter your email"
                              type="email"
                            />
                            <Input
                              isRequired
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
                              <Button fullWidth color="primary">
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
