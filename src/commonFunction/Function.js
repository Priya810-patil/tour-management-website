import { useCallback, useState } from "react";



export function useForceUpdate() {
    const [, setUpdate] = useState(0);
    const update = useCallback(() => {
        setUpdate((update) => update + 1);
    }, []);
    return update;
}