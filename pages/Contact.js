import ContactForm from "@/features/common/modules/ContactForm";
import TextContentBox from "@/features/common/modules/TextContentBox";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const ContactPage = () => {
    return (
        <DefaultLayout>
            <Box
                bgColor="#f7f8f9"
                paddingY="3rem"
            >
                <Grid
                    templateColumns="repeat(6, 1fr)"
                    gap="5"
                    maxWidth="1280px"
                    margin="0 auto"
                >
                    <GridItem colSpan={{ base: 6, sm: 3 }}>
                        <TextContentBox title="Contact Us">
                            <Text fontWeight="light">
                                Thank you for your interest in contacting us. Please use the form below to send us a message, and we will get back to you as soon as possible.
                            </Text>
                            <ContactForm />
                        </TextContentBox>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, sm: 3 }}>
                        <TextContentBox title="For Inquiries Contact:">
                            <Text
                                fontWeight="light"
                                color="gray.600"
                                fontSize="1rem"
                                marginBottom="1rem"
                            >
                                Roman Luzhnyi <br />
                                Public Relations Manager<br />
                                Lviv
                            </Text>
                            <Text
                                fontWeight="light"
                                color="gray.600"
                                fontSize="1rem"
                            >
                                Vasia Liutan <br />
                                Public Relations Manager<br />
                                Dolyna
                            </Text>
                        </TextContentBox>
                    </GridItem>
                </Grid>
            </Box>
        </DefaultLayout>
    );
};
export default ContactPage;