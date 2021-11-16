export function mergeObject(target, source) {
    if (target && source) {
        Object.keys(source).forEach(key => {
            const sourceValue = source[key];
            if (typeof sourceValue === "object") {
                if (!target[key]) {
                    target[key] = {};
                }
                mergeObject(target[key], sourceValue);
            } else {
                target[key] = sourceValue;
            }
        });
    }
    return target;
}
