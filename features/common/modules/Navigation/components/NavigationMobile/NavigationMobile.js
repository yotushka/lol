import { Box, Flex, Text, Menu, MenuList, MenuButton, IconButton, MenuItem } from "@chakra-ui/react";
import { HiHomeModern } from "react-icons/hi2"
import Link from "next/link";
import { navigationLinks } from "../../navigationConsts";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationMobile = () => {
    return (
        <Box
            color="#4F4557"
            padding="2rem"
            backgroundColor="white"
            display={{ base: "block", md: "none" }}
        >

            <Flex alignItems="center" justifyContent="space-between">
                <Link href="/">
                    <Box display="flex" gap="2" alignItems="center">
                        <HiHomeModern size="30" />
                        <Text fontSize="2xl" fontWeight="black">
                            RentUAE
                        </Text>
                    </Box>
                </Link>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<HamburgerIcon />}
                        variant="outline"
                    />
                    <MenuList border="1px solid lightgray">
                        {navigationLinks.map((item) => (
                            <NavigationLink key={item.title} {...item} />
                        ))}
                    </MenuList>
                </Menu>
            </Flex>

        </Box>
    );
}

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
    return (
        <Link href={link} gap="0.5rem">
            <MenuItem
                alignItems="center"
                gap="0.5rem"
                _hover={{ fontWeight: 'semibold', textDecoration: "underline" }}
            >
                {icon}
                {title}
            </MenuItem>
        </Link>
    )
}