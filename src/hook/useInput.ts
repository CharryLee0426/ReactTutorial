import React, { useState } from "react";

// define a hook.
// question: what's wrong with the return??
// solution: there are some bugs when return
// an array, please return an object.
// therefore, why array can't infected correctly.
const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    return {
        v: {
            value, 
            onChange: (e: any) => setValue(e.target.value)
        },
        reset: () => setValue(initialValue)
        // () => setValue(initialValue)
    };
};

export default useInput;