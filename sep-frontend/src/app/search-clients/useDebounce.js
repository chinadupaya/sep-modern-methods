import {useCallback, useRef} from "react";


const useDebounce = (callback, delay) => {
    const timeout = useRef();

    return useCallback(
        (args) => {
            const later = () => {
                clearTimeout(timeout.current);
                callback(args);
            };

            clearTimeout(timeout.current);
            timeout.current = setTimeout(later, delay);
        },
        [callback, delay]
    );
}

export default useDebounce