import { useState } from "react";

export function useVisible(initialState) {
    const [isVisible, setIsVisible] = useState(initialState);
    const toogle = () => setIsVisible(!isVisible);
    return [isVisible, toogle];
}
