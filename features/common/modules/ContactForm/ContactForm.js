import { Box, Button, FormControl, Input, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }

        emailjs.sendForm('service_qs5neqc', 'template_iwvluom', form.current, 'H2ldDj0_DORTGGchg')
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
        <Box
            width="100%"
            borderRadius="sm"
            bgColor="white"
            color="gray.700"
        >
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <FormControl>
                    <Input
                        focusBorderColor="#4F4557"
                        marginTop="1.3rem"
                        id="name"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                    />
                    <Input
                        focusBorderColor="#4F4557"
                        marginTop="1.3rem"
                        id="email"
                        type="text"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    <Input
                        focusBorderColor="#4F4557"
                        marginTop="1.3rem"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        {...register("phone", { required: true })}
                    />
                    <Textarea
                        focusBorderColor="#4F4557"
                        marginTop="1.3rem"
                        id="message"
                        type="textarea"
                        placeholder="Message"
                        {...register("message", { required: true })}
                    />
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="blackAlpha"
                    fontSize="xl"
                    padding="2rem"
                    marginTop="2rem"
                >
                    Send Message
                </Button>
            </form>
        </Box>
    );
}
export default ContactForm;