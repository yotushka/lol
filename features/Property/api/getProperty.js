import { axios } from "@/lib/axios";

const MAX_REQUESTS_PER_SECOND = 5;
const REQUEST_INTERVAL_MS = 1000 / MAX_REQUESTS_PER_SECOND;
const requestQueue = [];

export const getProperty = async (id) => {
    await enqueueRequest();

    try {
        const { data } = await axios.get("/properties/detail", {
            params: { externalID: id },
        });

        return data;
    } finally {
        dequeueRequest();
    }
};

function enqueueRequest() {
    return new Promise((resolve) => {
        const processRequest = () => {
            if (requestQueue.length < MAX_REQUESTS_PER_SECOND) {
                requestQueue.push(resolve);
            } else {
                setTimeout(processRequest, REQUEST_INTERVAL_MS);
            }
        };

        processRequest();
    });
}

function dequeueRequest() {
    if (requestQueue.length > 0) {
        const resolve = requestQueue.shift();
        resolve();
    }
}