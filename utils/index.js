export const formatCurrency = (val) => {
    const formatter = new Intl.NumberFormat('KEN', {
        style: 'currency',
        currency: 'KSH',
    });

    return formatter.format(val);
}

export const calculateOldPrice = (discount, newPrice) => {
    const oldPrice = parseInt(newPrice) + parseInt(discount);

    return formatCurrency(oldPrice);
}

export const loadContent = (list, jsx, spinner) => !!list.length ? jsx : spinner;