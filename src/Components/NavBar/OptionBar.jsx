import './OptionBar.css';

export default function OptionsBar() {
    const options = ["Shows", "People", "Networks", "Web Channels", "Articles", "Schedule", "Calendar", "Countdown", "Forms"];

    return (
        <nav className="option_bar navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsable-nav" aria-controls="collapsable-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="collapsable-nav" className="subpart collapse navbar-collapse">
                <ul className="navbar-nav">
                    {
                        options.map((option, i) => (
                            <li key={i} className='options nav-item'>
                                <a className="nav-link" href={`#${option.toLowerCase().replace(' ', '-')}`}>{option}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}
