import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { TbMapPin } from "react-icons/tb";
import { propertiesFooter, about, ourOffices, contactUs, companyNumber } from "./footerConsts";

const Footer = () => {
    return (
        <Box backgroundColor="#4F4557" >
            <Box
                maxWidth="1280px"
                margin="0 auto"
                paddingY="3rem"
                paddingX={{ base: "2rem", sm: "0" }}
            >
                <SimpleGrid
                    columns={{ base: "1", sm: "5" }}
                    color="whiteAlpha.700"
                    spacing="1rem"
                    minChildWidth="150px"
                >
                    <Flex>
                        {propertiesFooter.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}
                    </Flex>
                    <Flex>
                        {about.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}
                    </Flex>
                    <Flex alignItems="center" gap="0.1rem">
                        {ourOffices.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}
                        <TbMapPin />
                    </Flex>
                    <Flex >
                        {contactUs.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}
                    </Flex>
                    <Flex >
                        {companyNumber.map((item) => (
                            <FooterLink key={item.name} {...item} />
                        ))}
                    </Flex>
                </SimpleGrid>
            </Box>
            <Box
                backgroundColor="#393646"
                display="flex"
                padding="2rem"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                color="white"
            >
                <Box display="flex" gap="2" alignItems="center">
                    <HiHomeModern />
                    <Text fontSize="lg" fontWeight="black">
                        RentUAE
                    </Text>
                </Box>
                <Text marginTop="0.5rem" fontSize="xs" textAlign="center">
                    All rights reserved.
                </Text>
            </Box>
        </Box>
    );
}
export default Footer;

const FooterLink = ({ name, link }) => {
    return (
        <Text>
            <Link href={link} target="_blank">
                {name}
            </Link>
        </Text>
    );
};

