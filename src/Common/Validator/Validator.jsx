
export function requirement(value) {
    if(value) return undefined
    return 'Required field'
};

export function maxLengthCreator(count) {
    return (value) => {
        if (value && value.length > count) return `Max length is ${count} symbols`;
        return undefined;
    };
};