import cookie from "cookie";


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

export const displayContent = (list, jsx, spinner) => !list.length ? spinner : jsx;

export const parseCookies = (req) => cookie.parse(req ? req.headers.cookie || "" : document.cookie);