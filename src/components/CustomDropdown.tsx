import React, { useState } from "react";
import {
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  UnorderedList,
  ListItem,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@chakra-ui/react";

const rewardValue = ["Voucher 1", "Voucher 2", "Voucher 3"];

const CustomSelect = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Box>
      <Popover isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            onClick={onOpen}
            borderColor="red.300"
            color="red.300"
            mt={3}
            sx={{
              bg: "white",
              "&:focus": {
                bg: "white",
              },
              "&:hover": {
                bg: "white",
              },
            }}
          >
            {selectedValue || "SELECT VOUCHER"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Select a Voucher</PopoverHeader>
          <PopoverBody>
            <RadioGroup onChange={setSelectedValue} value={selectedValue}>
              <UnorderedList spacing={2}>
                {rewardValue.map((value) => (
                  <ListItem key={value}>
                    <Radio value={value} colorScheme="red">
                      {value}
                    </Radio>
                  </ListItem>
                ))}
              </UnorderedList>
            </RadioGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

// App Component
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CustomSelect />
    </div>
  );
}
