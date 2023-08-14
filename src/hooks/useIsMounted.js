import { useState, useEffect } from 'react';

const useIsMounted = (delay = 0, arg = []) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const argArr = [arg].flat();

        if (argArr.length > 0 && !argArr.reduce((acc, el) => el, false)) return;
        const timeout = setTimeout(() => setIsMounted(true), delay);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isMounted;
};

export default useIsMounted;
