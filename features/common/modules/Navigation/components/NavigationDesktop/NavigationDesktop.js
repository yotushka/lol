import { Box, Flex, Text } from "@chakra-ui/react";
import { HiHomeModern } from "react-icons/hi2"
import Link from "next/link";
import { navigationLinks } from "../../navigationConsts";

const NavigationDesktop = () => {
    return (<Box
        borderBottom="1px solid lightgray"
        color="#4F4557"
        paddingY="2rem"
        backgroundColor="white"
        display={{ base: "none", md: "block" }}
    >
        <Box maxWidth="1280px" margin="0 auto" >
            <Flex alignItems="center" justifyContent="space-between">
                <Link href="/">
                    <Box display="flex" gap="2" alignItems="center">
                        <HiHomeModern size="30" />
                        <Text fontSize="2xl" fontWeight="black">
                            RentUAE
                        </Text>
                    </Box>
                </Link>
                <Flex
                    gap="12"
                    alignItems="center"
                    fontWeight="medium"
                >
                    {navigationLinks.map((item) => (
                        <NavigationLink key={item.title} {...item} _hover={{ textDecoration: "underline" }} />
                    ))}
                </Flex>
            </Flex>
        </Box>
    </Box>
    );
}

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
    return (
        <Link href={link}>
            <Flex alignItems="center" gap="0.5rem">
                {icon}
                {title}
            </Flex>
        </Link>
    )
}