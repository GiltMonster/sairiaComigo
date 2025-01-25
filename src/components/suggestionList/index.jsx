import "./style.css";

export default function SuggestionList({ suggestions, removeSuggestion }) {
    return (
        <div className='suggestions-list'>
            {suggestions.map((suggestion, index) => (
                <li key={index}>
                    {suggestion}
                    <button className='remove' onClick={() => removeSuggestion(index)}>Remover</button>
                </li>
            ))}

        </div>
    )
}
