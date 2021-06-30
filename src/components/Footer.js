export const Footer = () => {
  return (
    <div className="bg-footer-bg border-t-2 border-primary border-opacity-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <p className="text-center">
          Code licensed under{' '}
          <a
            href="https://github.com/nolimits4web/mariko/blob/master/LICENSE"
            target="_blank"
            rel="noopener"
            className="text-primary hover:opacity-50"
          >
            MIT
          </a>
          <br />
          All product names, logos, and brands are property of their respective
          owners
        </p>
        <p className="text-center mt-4">
          2021 &copy; Mariko by{' '}
          <a href="https://nolimits4web.com" target="_blank" rel="noopener">
            <img
              className="w-12 h-12 inline-block"
              src="/images/n4w-logo-white.svg"
              alt="nolimits4web"
            />
          </a>
        </p>
      </div>
    </div>
  );
};
