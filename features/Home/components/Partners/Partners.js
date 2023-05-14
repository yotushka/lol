import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { partners } from "./partnerConsts";

const Partners = () => {
    return (
        <Box>
            <Text
                fontSize={{ base: "4xl", sm: "5xl" }}
                lineHeight="shorter"
                fontWeight="light"
                paddingX="2rem"
                paddingY="2rem"
                textAlign="center"
            >
                Our Partners
            </Text>

            <SimpleGrid
                columns={partners.length}
                margin="0 auto"
                minChildWidth="150px"
            >

                {partners.map((partner) => (
                    <Image
                        key={partner}
                        src={partner}
                        alignSelf="center"
                        padding={{ base: "2rem", sm: "3rem" }}
                        filter="grayscale(1)"
                        opacity="0.4"
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Partners;