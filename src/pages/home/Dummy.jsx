import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuranLanguages = () => {
    const [language, setLanguage] = useState([]);

    useEffect(() => {
        const fetchQuran = async () => {
            try {
                const response = await axios.get("https://mp3quran.net/api/v3/languages");
                console.log(response.data);  // Log entire response to see the structure
                const filteredLanguages = response.data.language.filter((lang) =>
                    ["Arabic", "English", "Bengali", "Urdu", "Hindi"].includes(lang.language)
                );
                setLanguage(filteredLanguages);
            } catch (err) {
                console.log(err);
            }
        };

        fetchQuran();
    }, []);
    // console.log(language)

    return (
        <div>
            <h1>Available Languages</h1>
            <ul>
                {language.map((lang) => (
                    <li key={lang.id}>{lang.language}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuranLanguages;
