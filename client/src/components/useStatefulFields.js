import { useState} from 'react';


export function useStatefulFields() {
    const [fields,setFields] = useState({});
    function handleChanges({ target}) {
        setFields({
            ...fields,
            [target.name]: target.value,

        });
        console.log('useStatefulFields handle change : ', target.value);    }
    return [fields,handleChanges];
}