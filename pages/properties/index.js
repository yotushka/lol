import { useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import PropertyCard from '@/features/common/modules/PropertyCard';
import { getProperties } from '@/features/common/Api/getProperties';
import FilterProperties from '@/features/common/modules/Filter/FilterProperties';

const PropertiesPage = ({ properties }) => {
    const [priceRange, setPriceRange] = useState([0, Number.MAX_VALUE]);
    const [rooms, setRooms] = useState(null);
    const [baths, setBaths] = useState(null);
    const [filteredProperties, setFilteredProperties] = useState(properties);

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const filterProperties = debounce(() => {
        const updatedFilteredProperties = properties.filter((property) => {
            const price = typeof property.price === 'string' ? parseInt(property.price.replace(/,/g, '')) : parseInt(property.price);
            const isPriceInRange = price >= priceRange[0] && price <= priceRange[1];

            const isRoomsMatch = rooms === null || parseInt(property.rooms) === rooms;

            const isBathsMatch = baths === null || parseInt(property.baths) === baths;

            return isPriceInRange && isRoomsMatch && isBathsMatch;
        });

        setFilteredProperties(updatedFilteredProperties);
    }, 300);

    const handlePriceRangeChange = (newPriceRange) => {
        setPriceRange(newPriceRange);
        filterProperties();
    };

    const handleRoomsChange = (newRooms) => {
        setRooms(newRooms);
        filterProperties();
    };

    const handleBathsChange = (newBaths) => {
        setBaths(newBaths);
        filterProperties();
    };

    return (
        <DefaultLayout>
            <Box bgColor="#f7f8f9" padding="3rem">
                <Box maxWidth="1280px" margin="0 auto">
                    <FilterProperties
                        onPriceRangeChange={handlePriceRangeChange}
                        onRoomsChange={handleRoomsChange}
                        onBathsChange={handleBathsChange}
                    />
                    <SimpleGrid columns={{ base: '1', sm: '3' }} gap={{ base: '0', sm: '2rem' }}>
                        {filteredProperties.map((property) => (
                            <PropertyCard key={property.id} {...property} />
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </DefaultLayout>
    );
};

export default PropertiesPage;

export async function getStaticProps() {
    const properties = await getProperties(21);
    return {
        props: { properties },
    };
}