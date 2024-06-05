import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

export default function Listing() {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Store specific error message
    const params = useParams();

    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true);
                setError(null); // Reset error state before fetching
                const res = await fetch(`/api/listing/get/${params.listingId}`);
                const data = await res.json();
                if (res.ok) {
                    setListing(data);
                } else {
                    setError(data.message || 'Something went wrong'); // Use error message from response if available
                }
            } catch (error) {
                setError('Network error'); // Set generic error for network issues
            } finally {
                setLoading(false);
            }
        };

        fetchListing();
    }, [params.listingId]);

    if (loading) {
        return <div className="text-center my-7 text-2xl">Loading...</div>;
    }

    if (error) {
        return <div className="text-center my-7 text-2xl">{error}</div>;
    }

    return (
        <main>
            {listing && (
                <div className="swiper-container">
                    <Swiper navigation={true} modules={[Navigation]}>
                        {listing.imageUrls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-[550px]" style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'cover' }}>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </main>
    );
}
