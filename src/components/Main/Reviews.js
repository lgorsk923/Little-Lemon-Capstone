export function Reviews() {
    function ReviewCard({ review }) {
        return (
            <div className="review">
                <div className='review-title'>
                    <img src={review.image} alt={review.name} />
                    <h4>{review.name}</h4>
                    <h3>{review.rating}</h3>
                </div>
                <blockquote>
                    <p>{review.text}</p>
                    <cite>{review.author}</cite>
                </blockquote>
            </div>
        )
    }

    const reviews = [
        {
            image: 'src/images/Charlee.jpg',
            name: 'Charlee',
            rating: '5/5',
            text: 'Great food and service! I highly recommend!',
        },
        {
            image: 'src/images/Charlee.jpg',
            name: 'Charlee',
            rating: '5/5',
            text: 'Great food and service! I highly recommend!',
        },
        {
            image: 'src/images/Charlee.jpg',
            name: 'Charlee',
            rating: '5/5',
            text: 'Great food and service! I highly recommend!',
        }
    ]
    return (
        <section className="reviews">
            <h2 className="header">Customer Reviews</h2>
            <div className="review-grid">
                {reviews.map((review, index) => {
                    return <ReviewCard key={index} review={review} />
                })}
            </div>
        </section>
    )
}