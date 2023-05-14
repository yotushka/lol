import { useState } from 'react';
import {
    Box, FormControl, FormLabel, Input, Stack, Text, Select, Button, ButtonGroup,
} from '@chakra-ui/react';

const FilterProperties = ({ onPriceRangeChange, onRoomsChange, onBathsChange }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [rooms, setRooms] = useState('');
    const [baths, setBaths] = useState('');

    const handlePriceRangeChange = () => {
        const priceRange = [
            minPrice !== '' ? parseInt(minPrice) : 0,
            maxPrice !== '' ? parseInt(maxPrice) : Number.MAX_VALUE
        ];
        onPriceRangeChange(priceRange);
    };

    const handleRoomsChange = () => {
        const newRooms = rooms !== '' ? parseInt(rooms) : null;
        onRoomsChange(newRooms);
    };

    const handleBathsChange = () => {
        const newBaths = baths !== '' ? parseInt(baths) : null;
        onBathsChange(newBaths);
    };

    return (
        <Box
            bgColor="white"
            boxShadow="base"
            borderRadius="md"
            p="1rem"
            mb="2rem"
            gap="1rem"
        >
            <Stack
                spacing="0"
                gap="1rem"
                display={{ base: "block", sm: "flex" }}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <FormControl width="100%">
                    <FormLabel>Price Range</FormLabel>
                    <Stack direction="row">
                        <Input
                            bgColor="lightgray"
                            placeholder="Min"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            onBlur={handlePriceRangeChange}
                        />
                        <Text>to</Text>
                        <Input
                            bgColor="lightgray"
                            placeholder="Max"
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            onBlur={handlePriceRangeChange}
                        />
                    </Stack>
                </FormControl>
                <FormControl>
                    <FormLabel>Rooms</FormLabel>
                    <Select
                        bgColor="lightgray"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        onBlur={handleRoomsChange}
                    >
                        <option value="">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Baths</FormLabel>
                    <Select
                        bgColor="lightgray"
                        value={baths}
                        onChange={(e) => setBaths(e.target.value)}
                        onBlur={handleBathsChange}
                    >
                        <option value="">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                </FormControl>
            </Stack>
            <Stack
                spacing="1rem"
                direction="row"
                justifyContent="center"
                alignItems="center">
                <ButtonGroup>
                    <Button
                        bgColor="lightgray"
                        height="40px"
                        width="200px"
                        mt="1rem"
                        size="lg"
                        border="1px"
                        borderColor="gray"
                        color="gray"
                        onClick={() => {
                            handlePriceRangeChange();
                            handleRoomsChange();
                            handleBathsChange();
                        }}
                    >
                        Filter
                    </Button>
                </ButtonGroup>
            </Stack>
        </Box>
    );

};

export default FilterProperties;