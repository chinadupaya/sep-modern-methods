"use client"
import onSearch from "./onSearch";
import useDebounce from "./useDebounce";
export default function SearchClients() {
    
    const {searchCallback, events, text} = onSearch();

    return(
        <div>

            <label htmlFor="statusInput">Search</label>
            <input type="text" className="form-control" 
                id="searchInput" aria-describedby="commentsHelp"
                placeholder="Search here"
                onChange={useDebounce(searchCallback, 1000)}
                name="search" />
            {(!events || events.length == 0) ? `Client ${text} does not exist or has no history` : 
                <div>
                    Events for Client {text}
                    <ul>
                        {events.map((event) => {
                            return(
                                <li key={event.id}>
                                    Event Id: {event.id}
                                    <ul>
                                        <li>
                                            Event Type: {event.eventType}
                                        </li>
                                        <li>
                                            Description: {event.description}
                                        </li>
                                    </ul>
                                </li>
                            )
                        })} 
                    </ul>

                </div>}
        </div>
        
    )
}