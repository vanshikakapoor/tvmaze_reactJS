

export default function NameList({searchContent, original}) {

    

    return(
        <div>
            <div>
                Search Content: {searchContent}
            </div>
            <div>
                original:
                <ul>
                {
                    
                    original.map( (o) => {
                        return <li> {o} </li>
                    }

                    )
                }
                </ul>
            </div>
        </div>
    );
}