import { socialLinks } from "../data/profile";

function Footer() {
  return (
    <footer className="mt-20 border-t border-line-soft lg:mt-35">
      <div className="mx-auto flex max-w-300 flex-col gap-4 px-5 py-7 text-sm text-fg-subtle sm:px-8 md:flex-row md:items-center md:justify-between lg:py-9 xl:px-0">
        <p>Built by Amit Samadder. Designed for fast, focused portfolio browsing.</p>
        <div className="-mx-2 flex flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-fg md:px-3.5"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
