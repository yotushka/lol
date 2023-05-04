import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const AboutUs = () => {
    return (
        <DefaultLayout>
            <Box
                bgColor="#f7f8f9"
                padding="3rem"
            >
                <Heading textAlign="center" fontWeight="light" color="gray.700">
                    About Us
                </Heading>
                <Stack marginTop="2rem">
                    <Heading as="h4" size="md" color="gray.700">
                        Your Premier Destination for Real Estate in the UAE
                    </Heading>
                    <Text
                        fontWeight="medium"
                        color="gray.600"
                        fontSize="1.1rem"
                        marginBottom="1rem"
                    >
                        Welcome to RentUAE, your premier destination for all things related to real estate in the United Arab Emirates.
                    </Text>
                </Stack>
                <Stack marginTop="2rem">
                    <Heading as="h4" size="md" color="gray.700">
                        Simplifying the Process for Our Valued Clients
                    </Heading>
                    <Text
                        fontWeight="medium"
                        color="gray.600"
                        fontSize="1.1rem"
                        marginBottom="1rem"
                    >
                        At RentUAE, we understand that finding the perfect property can be a challenging and time-consuming process. That's why we have dedicated ourselves to simplifying the process and making it easy for our clients to find their dream home or commercial space. We pride ourselves on our commitment to providing exceptional customer service and attention to detail, ensuring that our clients have a hassle-free experience from start to finish.
                    </Text>
                </Stack>
                <Stack marginTop="2rem">
                    <Heading as="h4" size="md" color="gray.700">
                        Experienced Professionals Dedicated to Your Success
                    </Heading>
                    <Text
                        fontWeight="medium"
                        color="gray.600"
                        fontSize="1.1rem"
                        marginBottom="1rem"
                    >
                        Our team of experienced professionals is made up of some of the most knowledgeable and passionate individuals in the industry. From our expert agents to our dedicated support staff, everyone at RentUAE is committed to helping you find the perfect property for your needs. We offer a wide range of real estate services, including buying, selling, and renting residential and commercial properties across the UAE.
                    </Text>
                </Stack>
                <Stack marginTop="2rem">
                    <Heading as="h4" size="md" color="gray.700">
                        Comprehensive Real Estate Services to Meet Your Needs
                    </Heading>
                    <Text
                        fontWeight="medium"
                        color="gray.600"
                        fontSize="1.1rem"
                        marginBottom="1rem"
                    >
                        At RentUAE, we understand the importance of staying ahead of the curve when it comes to the latest real estate trends and technology. That's why we are constantly investing in the latest tools and resources to ensure that we provide our clients with the most up-to-date information and insights available. From virtual tours and digital marketing strategies to advanced data analytics, we are always looking for ways to enhance our services and better serve our clients.
                    </Text>
                </Stack>
                <Stack marginTop="2rem">
                    <Heading as="h4" size="md" color="gray.700">
                        Keeping Up with the Latest Trends and Technology
                    </Heading>
                    <Text
                        fontWeight="medium"
                        color="gray.600"
                        fontSize="1.1rem"
                        marginBottom="1rem"
                    >
                        We take pride in our reputation for integrity, professionalism, and commitment to our clients. Whether you are looking to buy, sell, or rent property in the UAE, you can trust RentUAE to provide you with the expert guidance and support you need to make the most informed decisions possible.
                    </Text>
                </Stack>
                <Text
                    marginTop="3rem"
                    textAlign="center"
                    fontWeight="bold"
                    color="gray.600"
                    fontSize="xl"
                >
                    Thank you for choosing RentUAE as your trusted partner in real estate. We look forward to working with you and helping you achieve your goals.
                </Text>
            </Box>
            <MeetTheTeam />
        </DefaultLayout>
    );
}
export default AboutUs;