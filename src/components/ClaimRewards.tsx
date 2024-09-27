import React, { useState } from "react";
import { Box, Text, Heading, SimpleGrid, Image, Button, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const rewardsData = [
  {
    image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_d00eefada9.webp",
    title: "Amazon",
    description: "₹100 off on school supplies",
  },
  {
    image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_1_e9c4b7ffe1.webp",
    title: "Flipkart",
    description: "₹100 off on school supplies",
  },
];

const rewardValue = [100, 200, 500, 1000, 2000, 3000, 5000];

const ClaimRewards = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: number | null }>({});

  const handleSelectChange = (rewardTitle: string, value: number | null) => {
    setSelectedValues(prev => ({ ...prev, [rewardTitle]: value }));
  };

  const CustomSelect = ({ rewardTitle }: { rewardTitle: string }) => (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} borderColor="red.400" color="red.400" variant="outline" width="full">
        {selectedValues[rewardTitle] ? `${selectedValues[rewardTitle]} VOUCHER` : "SELECT VOUCHER"}
      </MenuButton>
      <MenuList>
        {rewardValue.map((value) => (
          <MenuItem key={value} onClick={() => handleSelectChange(rewardTitle, value)}>
            <Box>
              <Text>{value} VOUCHER</Text>
              <Text fontSize="sm" color="gray.600">{value} coins will be deducted</Text>
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );

  const RewardBox = ({ reward }: { reward: typeof rewardsData[0] }) => (
    <Box key={reward.title} borderRadius="md" p={4} border="1px" borderColor="gray.300" boxShadow="md" display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="300px" width={isMobile ? "80%" : "full"} mx="auto">
      <Image src={reward.image} alt={reward.title} mb={3} />
      <Heading color="gray.800" fontSize="base" fontWeight="semibold" mb={2}>{reward.title}</Heading>
      <Text color="gray.600" fontSize="sm" mb={4}>{reward.description}</Text>
      <CustomSelect rewardTitle={reward.title} />
    </Box>
  );

  return (
    <Box display="flex" flexDirection="column" p={4} mx="auto" h={{ base: "auto", md: "1053px" }} w={{ base: "100%", md: "876px" }}>
      <Heading color="black" fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold" lineHeight="8" mb={4} textAlign={{ base: "center", md: "left" }}>
        Claim Rewards
      </Heading>
      <Text color="gray.600" fontSize={{ base: "sm", md: "base" }} fontWeight="normal" lineHeight="normal" mb={4} textAlign={{ base: "center", md: "left" }}>
        Claim any of the following rewards now! Choose your favorite and enjoy exclusive benefits today!
      </Text>

      {isMobile ? (
        <>
          <Box display="flex" justifyContent="center" mb={4}>
            <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Group_1_5a930df4e9.webp" />
          </Box>
          <SimpleGrid alignItems="flex-end" columns={1} spacing={4} width="full">
            {rewardsData.map((reward) => (
              <RewardBox key={reward.title} reward={reward} />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <SimpleGrid alignItems="flex-end" columns={{ base: 1, md: 2, lg: 3 }} spacing={4} width="full">
          {rewardsData.map((reward) => (
            <RewardBox key={reward.title} reward={reward} />
          ))}
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Group_1_5a930df4e9.webp" />
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ClaimRewards;
