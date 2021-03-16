import "./Confirmation.scss";
const faqs = [
  {
    question: "Where will I get the card",
    answer: "You will receive it on Whatsapp/SMS on your mobile.",
    image: "./images/Whatsapp.png",
  },
  {
    question: "When will I receive the Gift Card ",
    answer: "Within 48 hours, when your Man Matters order is delivered.",
    image: "./images/gift-card.png",
  },
  {
    question: "What if I cancel the order",
    answer: "The voucher will not be delivered if you cancel the order.",
    image: "./images/close.jpeg",
  },
];
export default function Confirmation() {
  return (
    <section>
      {faqs.map((faq) => (
        <div className="question-wrapper">
          <p>{faq.question}</p>
          <div>
            <img src={faq.image} />
            <span>{faq.answer}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
