import { Box, Image, Text } from "@chakra-ui/react";

const AgentCard = ({ name, image, description, title }) => {
    return (
        <Box
            backgroundColor="#f1f1f14a"
            padding="2rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            marginBottom={{ base: "1rem", sm: "0" }}
        >
            <Image
                src={image}
                width="10rem"
                height="10rem"
                objectFit="cover"
                borderRadius="full"
                shadow="md"
            />
            <Text
                color="#6D5D6E"
                fontSize="xl"
                fontWeight="bold"
            >
                {name}
            </Text>
            <Text
                fontSize="lg"
                color="#4F4557">
                {title}
            </Text>
            <Text
                fontSize="md"
                fontWeight="light"
                marginTop="1rem"
                color="gray.600"
            >
                {description}
            </Text>
        </Box>
    )
}
export default AgentCard;