import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton =({price})=>{
	const priceForStripe = price* 100;
	const publishablekey= 'pk_test_51J5RyyD1tEKZb8GcLWejc51YakJw5fAXEeTaFuKlblR4gtwwu8DoQrUef6XUz0U6T6bSPQsv88KRQA3JBthVW3Kh00oiILK4gR'
 
const onToken= token=>{
	console.log(token);
	alert('Payment Successful')
} 


	return (
		<StripeCheckout
		label='Pay Now'
		name='CRWN Clothing Ltd.'
		billingAddress
		shippingAddress
		image='https://svgshare.com/i/CUz.svg'
		description={`Your Total is $${price}`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		token={onToken}
		stripeKey={publishablekey}
		/>
		)
	}


export default StripeCheckoutButton

	