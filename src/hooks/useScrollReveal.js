import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        );

        // Observe both individual reveal elements AND group containers
        document.querySelectorAll('.reveal, .reveal-group').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
};
