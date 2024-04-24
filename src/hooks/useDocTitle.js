import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Tech-Palate`;
        } else {
            document.title = 'Tech-Palate | The All-in-One Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
