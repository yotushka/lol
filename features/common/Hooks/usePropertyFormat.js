export const usePropertyFormat = (property) => {
    // const address = property.location.map((item) => item.name).join(", ");
    // const coverPhoto = property.coverPhoto.url;
    // const propertyType = `${property.category[0].name}, ${property.category[1].name}`;
    let address = "";
    if (Array.isArray(property.location)) {
        address = property.location.map((item) => item.name).join(", ");
    }
    let coverPhoto = "";
    if (property.coverPhoto && property.coverPhoto.url) {
        coverPhoto = property.coverPhoto.url;
    }

    let propertyType = "";
    if (
        Array.isArray(property.category) &&
        property.category.length >= 2
    ) {
        propertyType = `${property.category[0].name}, ${property.category[1].name}`;
    }
    let price = "";
    if (typeof property.price === "number") {
        price = property.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        });
    };
    // const price = property.price.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD",
    //     maximumFractionDigits: 0
    // });

    const title = property.title;
    const rooms = property.rooms;
    const baths = property.baths;
    const purpose = property.purpose;
    // const sqSize = property.area.toFixed(2);
    let sqSize = "";
    if (typeof property.area === "number") {
        sqSize = property.area.toFixed(2);
    }

    const externalID = property.externalID

    const photos = property.photos?.map((photo) => photo.url) || [];
    const description = property.description;
    // const coverVideoUrl = property.coverVideo.url
    let coverVideoUrl = "";
    if (property.coverVideo && property.coverVideo.url) {
        coverVideoUrl = property.coverVideo.url;
    }

    const coverVideo = coverVideoUrl.slice(coverVideoUrl.length - 11);
    const panorama = property.panoramas?.length ? property.panoramas[0].url : [];
    const amenities = property && property.amenities
        ? property.amenities.flatMap(({ amenities }) => amenities).map((item) => item && item.text)
        : [];
    const furshied = property.furnishingStatus;

    return {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenities,
        furshied
    }
}