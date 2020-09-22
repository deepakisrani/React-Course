import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({text, language}) => {
    const [output, setOutput] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500);

        return () => {
            clearTimeout(timerId);
        }

    }, [text]);


    useEffect(() => {
        const translateText = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: process.env.REACT_APP_GOOGLE_TRANSLATE_KEY
                }
            });

            setOutput(data.data.translations[0].translatedText);
        };

        if(debouncedText) {
            translateText();
        }

    }, [debouncedText, language])
    
    return (
        <div>
            <h1 className="ui header">{output}</h1>
        </div>
    )
};

export default Convert;