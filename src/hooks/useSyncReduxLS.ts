import {useEffect, useRef} from "react";
import {useAppSelector} from "./useAppDispatch";
import {RootState} from "../store";

export const useSyncReduxLS = (lsKey: string, focusItemSelector: (state: RootState) => any) => {
    const isMouth = useRef(false)
    const items = useAppSelector(focusItemSelector)

    useEffect(() => {
        if (isMouth.current) {
            localStorage.setItem(lsKey, JSON.stringify(items))
        }

        isMouth.current = true
    }, [items])
}

