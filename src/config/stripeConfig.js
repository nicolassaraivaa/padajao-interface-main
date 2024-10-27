import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51QDG5kH8fEtmS4T6pppploVYNHsHxEvfADswlRAOyjXU0fcpDek1auqOV8irYCtd9V9z385tJgUBc8a8gI1E4uTM00B7Noi43K'
)

export default stripePromise