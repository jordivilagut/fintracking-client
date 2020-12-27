export const EnumUtils = {
    enumListToList,
    enumValueToValue,
    listToEnumList,
    valueToEnumValue
};

function enumListToList(enumList) {
    return enumList.map(item => enumValueToValue(item));
}

function enumValueToValue(enumValue) {
    return enumValue.charAt(0).toUpperCase() + enumValue.slice(1).toLowerCase();
}

function listToEnumList(list) {
    return list.map(item => valueToEnumValue(item));
}

function valueToEnumValue(value) {
    return value.toUpperCase()
}
