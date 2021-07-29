import axios from 'axios';

// complete an order
export const completeOrder = (values, setSubmitting, storeOrders) => dispatch => {
	const delivery = {}
	const address = {
        firstName: values.firstName,
        lastName: values.lasttName,
        phoneNumber: values.phoneNumber,
        address: values.address,
        county: values.county,
        city: values.city
	}
	// const jsonOrders = JSON.stringify(storeOrders.pendingOrders);

	const payload = {
        phoneNumber: `254${values.phoneNumber}`,
        shortCode: "174379",
        amount: "1",
        vendor: "174379",
        exampleRadios: values.exampleRadios.toString()
    }
    console.log(payload);
    
    axios
        .post('https://f3383a3e.ngrok.io/lipaNaMpesa', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setSubmitting(false);
            console.log(response);
        })
        .catch(e => console.log(e))
}