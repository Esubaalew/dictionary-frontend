import axios from 'axios';

const domain = 'https://aziye.esube.com.et';

export const getEntries = async (word) => {
    try {
        const response = await axios.get(`${domain}/entries/${word}`);
        return response.data.entries;
    } catch (error) {
        console.error('Error fetching entries:', error);
        return [];
    }
};

export const getTotalEntries = async (word) => {
    try {
        const response = await axios.get(`${domain}/total_entries/${word}`);
        return response.data.total_entries;
    } catch (error) {
        console.error('Error fetching total entries:', error);
        return -1;
    }
};

export const getWordOfTheDay = async () => {
    try {
        const response = await axios.get(`${domain}/word_of_the_day`);
        return response.data.word_of_the_day;
    } catch (error) {
        console.error('Error fetching word of the day:', error);
        return null;
    }
};

export const getPartsOfSpeech = async (word) => {
    try {
        const response = await axios.get(`${domain}/speeches/${word}`);
        return response.data.parts_of_speech;
    } catch (error) {
        console.error('Error fetching parts of speech:', error);
        return [];
    }
};

export const getDefinitions = async (word) => {
    try {
        const response = await axios.get(`${domain}/definitions/${word}`);
        return response.data.definitions;
    } catch (error) {
        console.error('Error fetching definitions:', error);
        return [];
    }
};
