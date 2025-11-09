import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '@/components/Footer'
// import { Footer } from 'react-day-picker'

const CoursesNotFound: React.FC = () => {
    return (
        <>
            <Header />
            <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <section aria-labelledby="wip-title" style={{ textAlign: 'center', maxWidth: 720 }}>
                    <h1 id="wip-title">Work in Progress</h1>

                    <p>
                        This page is currently under work. We're working to bring you updated course information and features. Please check back soon.
                    </p>

                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/" style={{ padding: '.5rem 1rem', background: '#0078d4', color: '#fff', borderRadius: 4, textDecoration: 'none' }}>
                            Return to Home
                        </Link>
                        <Link to="/faq" className="secondary" aria-label="Contact support" style={{ padding: '.5rem 1rem', borderRadius: 4, textDecoration: 'none', border: '1px solid #ccc' }}>
                            Contact Support
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CoursesNotFound;
