'use client';

export const Footer = () => {
  return (
    <footer className="px-6 py-8 text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} Voicebox. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        <a href="https://twitter.com/Voicebox" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Twitter
        </a>
      </div>
    </footer>
  )
}


