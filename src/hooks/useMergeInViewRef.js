import { useCallback } from 'react';

const useMergeInViewRef = (ref, inViewRef) => {
    const setRefs = useCallback(
        element => {
            // eslint-disable-next-line no-param-reassign
            if (ref) ref.current = element;
            inViewRef(element);
        },
        [inViewRef, ref],
    );

    return setRefs;
};

export default useMergeInViewRef;
