import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const HeroForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }

        emailjs.sendForm('service_qs5neqc', 'template_245fckm', form.current, 'H2ldDj0_DORTGGchg')
            .then((result) => {
                alert('Your message has been sent successfully!');
            }, (error) => {
                alert('Something went wrong. Please try again later.');
            });
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return (
        <>
            <Box
                width="100%"
                padding="2rem"
                borderRadius="sm"
                backgroundColor="white"
                color="gray.700"
            >
                <Text fontSize={{ base: "sm", sm: "xl" }} fontWeight="bold" color="gray.600">
                    Quick Consultation
                </Text>
                <Text fontSize={{ base: "sm", sm: "xl" }} fontWeight="normal" color="gray.600">
                    If You Need A Consultation, Fill Out The Form Below<br />For A Quick Contact With You.
                </Text>
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <FormControl>
                        <Input
                            focusBorderColor="#4F4557"
                            marginTop={{ base: "0.5rem", sm: "1.3rem" }}
                            id="name"
                            type="text"
                            placeholder="Name"{...register("name", { required: true })}
                        />
                        <Flex
                            gap={{ base: "0", sm: "1rem" }}
                            flexDirection={{ base: "column", sm: "row" }}
                        >
                            <Input
                                focusBorderColor="#4F4557"
                                marginTop={{ base: "0.5rem", sm: "1.3rem" }}
                                id="email"
                                type="email"
                                placeholder="Email"{...register("email", { required: true })}
                            />
                            <Input
                                focusBorderColor="#4F4557"
                                marginTop={{ base: "0.5rem", sm: "1.3rem" }}
                                id="phone"
                                type="text"
                                placeholder="Phone"{...register("phone", { required: true })}
                            />
                        </Flex>
                    </FormControl>
                    <Button
                        type="submit"
                        colorScheme="blackAlpha"
                        width="100%"
                        fontSize="xl"
                        padding={{ base: "1rem", sm: "2rem" }}
                        marginTop="2rem"
                    >
                        Contact Me
                    </Button>
                </form>
            </Box>
        </>
    );
};
export default HeroForm;

