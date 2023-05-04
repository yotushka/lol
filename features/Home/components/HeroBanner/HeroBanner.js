import { Box, Fade, Text } from "@chakra-ui/react";
import HeroForm from "../HeroForm";

const HeroBanner = () => {
    return (
        <Fade in>
            <Box position="relative"
                minHeight={{ base: "110vh", sm: "60vh" }}
                backgroundImage={`url('./Hero/pexels-mikhail-nilov-6707628.jpg')`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundAttachment="fixed"
            >
                <Box
                    position='absolute'
                    width='100%'
                    height='100%'
                    opacity='0.8'
                    backgroundColor="#4F4557"
                />
                <Box
                    display="flex"
                    flexDirection={{ base: "column", sm: "row" }}
                    alignItems="center"
                    justifyContent={{ base: "flex-start", sm: "space-between" }}
                    maxWidth="1280px"
                    position="absolute"
                    color="white"
                    fontWeight="light"
                    left="0"
                    right="0"
                    top="0"
                    bottom="0"
                    margin="0 auto"
                    padding="2rem"
                >
                    <Box width={{ base: "100%", sm: "50%" }}>
                        <Text
                            fontSize={{ base: "xl", sm: "4xl" }}
                            lineHeight="shorter"
                            marginBottom="1.5rem"
                        >
                            <strong>Welcome to RentUAE</strong>, your one-stop-shop for all your rental needs.</Text>
                        <Text fontSize={{ base: "lg", sm: "3xl" }}>
                            At RentUAE, we pride ourselves on providing top-quality rental services for all your needs. Our mission is to make your life easier by providing affordable and convenient rental options that meet your unique needs.
                        </Text>
                    </Box>
                    <Box
                        width={{ base: "100%", sm: "auto" }}
                        marginTop={{ base: "2rem", sm: "0" }}
                    >
                        <HeroForm />
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
}

export default HeroBanner;