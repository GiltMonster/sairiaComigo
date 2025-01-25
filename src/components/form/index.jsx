import React, { useState, useEffect } from 'react'
import "./style.css"
import SuggestionList from '../suggestionList';

import { toast, ToastContainer } from 'react-toastify';


export default function Form() {

    const [name, setName] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        let listSuggestion = {
            name: name,
            suggestions: suggestions
        }

        if (!name) {
            toast('Digite um nome', { position: 'bottom-right', type: 'error', theme: 'colored' });
            return;
        }

        if (suggestions.length === 0) {
            toast('Adicione pelo menos uma sugestão', { position: 'bottom-right', type: 'info', theme: 'colored' });
            return;
        }


        setName('');
        setSuggestion('');
        setSuggestions([]);

        console.log(listSuggestion);
    }

    function addSuggestions(e) {
        e.preventDefault();

        if (!suggestion) {
            toast('Digite uma sugestão', { position: 'bottom-right', type: 'error', theme: 'colored' });
        } else {

            setSuggestions(prevSuggestions => {
                const newSuggestions = [...prevSuggestions, suggestion];
                return newSuggestions;
            });

            toast('Sugestão adicionada', { position: 'bottom-right', type: 'success', theme: 'colored' });
        }
    }

    function removeSuggestion(index) {
        setSuggestions(prevSuggestions => {
            const newSuggestions = [...prevSuggestions];
            newSuggestions.splice(index, 1);
            return newSuggestions;
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='callout'>
                    <p>
                        Aqui você pode criar uma lista de sugestões para o nosso date!
                    </p>
                </div>

                <div className='form-input'>
                    <label htmlFor='name'>Nome:</label>
                    <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                <hr />

                <div className='form-input'>
                    <label htmlFor='suggestion'>Sugestões para o nosso date:</label>
                    <div className='add-suggestion-input'>
                        <input type='text' id='suggestion' name='suggestion' onChange={(e) => setSuggestion(e.target.value)} value={suggestion} />
                        <button className='add' onClick={addSuggestions}>+</button>
                    </div>
                </div>

                <div className='btns'>
                    <button className='submit'>Enviar</button>
                </div>
            </form>

            {suggestions.length > 0 && <SuggestionList suggestions={suggestions} removeSuggestion={removeSuggestion} />}

            <ToastContainer />
        </>
    )
}
