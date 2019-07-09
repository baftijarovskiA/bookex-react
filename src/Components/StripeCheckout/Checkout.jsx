import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {

    onToken = '';

    render() {
        return (
            <StripeCheckout
                amount="500"
                description="Donate"
                image="https://i.ibb.co/h9HfXnL/bookex.png"
                locale="auto"
                name="BookEx Donate"
                stripeKey="pk_test_wShVl3FoJQCK3oSjBQQ752AI00jUdQEWgf"
                token={this.onToken}
            />
        )
    }
}